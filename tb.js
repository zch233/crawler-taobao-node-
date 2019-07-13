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
    const $ = await this.getHTML(url)
    console.log($.html())
  }
  async getHTML(url) {
    const data = await rp({
        url,
        resolveWithFullResponse: true,
        headers: {
          'authority': 'pub.alimama.com',
          'method': 'POST',
          'path': '/openapi/json2/1/gateway.unionpub/optimus.material.json?t=1562829289878&_tb_token_=581355b663e91',
          'scheme': 'https',
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
          'cache-control': 'no-cache',
          'content-length': '122',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          cookie: 't=133450cb95cef282869fdf84ba7138a6; cookie2=1e51ff3826d2f78b559de3efafbe4ae0; v=0; _tb_token_=581355b663e91; alimamapwag=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzc1LjAuMzc3MC4xMDAgU2FmYXJpLzUzNy4zNg%3D%3D; taokeisb2c=; cna=ysdWFQpd6GkCAXxaNkZw0yoQ; JSESSIONID=DA1C4C41DBB3EA0C385BB9FA76CF8EC4; account-path-guide-s1=true; cookie32=3faab8af9ea25ec3af04968f8289bb7f; alimamapw=EXALFHV3QHt1HHgiQXcFEnQHEXENFHQBQHt1HHgiQXcFEnQHPQMNVQMDBA4ECVtWUwoHVFEDVwAP%0AAgRXVA4CXw1SAFZX; cookie31=NDY4MjIwMTkxLCVFNiVCMiVBMSVFNSVCQyU4MCVFNSVCRiU4MyVFNyU5QSU4NCVFNSVCQyU4MCVFNSVCRiU4Myw1Mjk3NDM1OTVAcXEuY29tLFRC; login=WqG3DMC9VAQiUQ%3D%3D; l=cBNkrdWIqxYV0r-NBOCZourza7797IRAguPzaNbMi_5Kq_T_s7QOk0Ru2E96cjWd9R8B4G2npwy9-etkiFkfurKJu1eO.; isg=BI6OXuioX991quv4exSF9g2-32RQD1IJsif9cLjX7hFMGy51IJtwGBndUwfSA0oh',
          dnt: '1',
          origin: 'https://pub.alimama.com',
          pragma: 'no-cache',
          referer: 'https://pub.alimama.com/promo/search/index.htm?spm=a219t.11816995.1998910419.de727cf05.7d5075a5qRGrUo',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
        },
        transform: function (body) {
          return cheerio.load(body);
        }
      })
    return data
  }
}

new DownLoad('https://pub.alimama.com/promo/search/index.htm?spm=a219t.11816995.1998910419.de727cf05.7d5075a5qRGrUo')

