from scrapy import Spider
from dataclasses import dataclass


@dataclass
class PartialPoem:
    POET_NAME = "حافظ"
    verse_1: str
    verse_2: str

    @property
    def has_poet_name(self):
        return self.POET_NAME in self.verse_1 or self.POET_NAME in self.verse_2


class HafezSpider(Spider):
    name = "hafez"
    start_urls = ["https://ganjoor.net/hafez/ghazal/sh1"]

    def parse(self, response):
        yield from self.parse_poem(response)
        next_page = response.xpath('//*[@class="navleft"]/a/@href').get()
        if next_page is not None:
            yield response.follow(next_page, callback=self.parse)

    def parse_poem(self, response):
        poem = response.xpath('//*[@class="b"]//p/text()').extract()
        poem_name = response.xpath('//*[@id="page-hierarchy"]//h2/a/text()').get().strip()
        start_couplet = poem[0]
        autobiographical_reference = []
        for verse_no in range(0, len(poem) - 1, 2):
            verse_1 = poem[verse_no]
            verse_2 = poem[verse_no + 1]
            poem_part = PartialPoem(verse_1, verse_2)
            if poem_part.has_poet_name:
                autobiographical_reference.extend([verse_1, verse_2])
        if autobiographical_reference:
            yield {"شماره": poem_name, "مطلع": start_couplet, "تلخیص": autobiographical_reference}
