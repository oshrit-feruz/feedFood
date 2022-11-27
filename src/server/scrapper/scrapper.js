const puppeteer = require("puppeteer");
const { scrollPageToBottom } = require("puppeteer-autoscroll-down");

class Scrapper {
  constructor(restName) {
    this.restName = restName;
  }
  static async getDishs(restName) {
    const scrapper = new Scrapper(restName);
    console.log("before Init");
    await scrapper.init();
    console.log("after init");
    const dishs = await scrapper.getDishs();
    console.log("after get dishs");
    await scrapper.close();
    return dishs;
  }

  async init() {
    let urlPart = this.restName.replace(/\s/g, "%20");
    const url = `https://www.mishloha.co.il/r/${urlPart}`;
    console.log("before lunch");
    const browser = await puppeteer.launch();
    console.log("before page");
    this.page = await browser.newPage();
    console.log("after page");
    await this.page.goto(url);
    this.browser = browser;

    const lastPosition = await scrollPageToBottom(this.page, {
      size: 200,
      delay: 300,
    });
  }

  async getDishs() {
    const dishArr = [];
    await this.delay(1000);

    const dishs = await this.page.$$('article[role="dish"].dish');
    for (const dish of dishs) {
      const name =
        (await (await (await dish.$(".dish-name"))?.getProperty("textContent"))
          ?.jsonValue()
          ?.catch(() => null)) || null;
      const description =
        (await (
          await (await dish.$(".item-description"))?.getProperty("textContent")
        )
          ?.jsonValue()
          ?.catch(() => null)) || "";
      const price =
        (await (await (await dish.$(".dish-price"))?.getProperty("textContent"))
          ?.jsonValue()
          ?.catch(() => null)) || null;
      const image =
        (await (await (await dish.$("img.fade-in"))?.getProperty("src"))
          ?.jsonValue()
          ?.catch(() => null)) ||
        "https://files.mishloha.co.il/files/menu_food_pic/mish_empty.jpg?v=2";

      const dishObj = {
        name,
        description,
        price,
        image,
      };
      if (name !== undefined && name !== null) {
        dishArr.push(dishObj);
      } else {
        // console.log("no name", dishObj);
      }
    }
    return dishArr;
  }
  async delay(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  async close() {
    await this.browser.close();
  }
}

module.exports = Scrapper;
