// const mongoose = require('mongoose');
const rp = require("request-promise")
const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');

class DownLoad {
  constructor(url){
    this.main(url)
  }
  async main(url) {
    const data = await this.getData(url)
    console.log(data)
  }
  async getData(url) {
    const data = await rp({
        url,
        transform: function (body) {
          return cheerio.load(body);
        }
      })
    return data
  }
}

new DownLoad('https://pub.alimama.com/promo/search/index.htm?floorId=19460')
