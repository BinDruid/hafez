# Hafez Fal Application

## Setup Crawler

Installing dependencies

```bash
cd crawler
pipenv shell
pipenv install
```

Running crawler

```bash
scrapy crawl hafez -O ../front/crawl_data.json
```

## Setup Front

Running frontend

```bash
cd front
npm install
npm run dev
```
