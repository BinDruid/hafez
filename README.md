# Hafez Fal Application

## Setup Crawler

Installing dependencies

```bash
cd crawler
pipenv shell
pipenv install
```

Running crawler

In `.env` file set the poet name and their initial poem url then run:

```bash
scrapy crawl hafez -O ../front/crawl_data.json
```

## Setup Front

Install dependencies and run frontend

```bash
cd front
npm install
npm run dev
```
