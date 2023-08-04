from scrapy import Spider
from dataclasses import dataclass


@dataclass
class PartialPoem:
    POET_NAME = "حافظ"
    verse_1: str
    verse_2: str

    @property
    def includes_poet_name(self):
        return self.POET_NAME in self.verse_1 or self.POET_NAME in self.verse_2


class HafezSpider(Spider):
    name = "hafez"
    start_urls = ["https://ganjoor.net/hafez/ghazal/sh1"]
    poem_path = '//*[@class="b"]//p/text()'
    poem_no_path = '//*[@id="page-hierarchy"]//h2/a/text()'
    next_poem_path = '//*[@class="navleft"]/a/@href'

    def parse(self, response):
        yield from self.parse_poem(response)
        next_poem = response.xpath(self.next_poem_path).get()
        if next_poem is not None:
            yield response.follow(next_poem, callback=self.parse)

    def parse_poem(self, response):
        poem = response.xpath(self.poem_path).extract()
        poem_no = response.xpath(self.poem_no_path).get().strip()
        start_couplet = poem[0]
        autobiographical_reference = []
        for verse_no in range(0, len(poem) - 1, 2):
            verse_1 = poem[verse_no]
            verse_2 = poem[verse_no + 1]
            poem_part = PartialPoem(verse_1, verse_2)
            if poem_part.includes_poet_name:
                autobiographical_reference.extend([verse_1, verse_2])
        if autobiographical_reference:
            yield {
                "poem_no": poem_no,
                "poem_url": response.url,
                "start_couplet": start_couplet,
                "autobiographical_reference": autobiographical_reference,
            }
