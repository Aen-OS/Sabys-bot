var headless_mode = process.argv[2]

const readline = require('readline')
const puppeteer = require('puppeteer')
const puppeteerextra = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteerextra.use(StealthPlugin());
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
puppeteerextra.use(AdblockerPlugin({ blockTrackers: true }));

const product_url = "https://www.ugg.com/eu/fr/fr/chausson-scuffette-npmii/1106872.html?dwvar_1106872_color=GOA";

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function givePage(){
    const browser = await puppeteersbutton({
        headless: false,
        ignoreHTTPSErrors: true,
        args: ['--window-size=1400,900', '--no-sandbox'
        ]})
    const page = await browser.newPage();
    return page;
}

async function addToCart(page){
    await page.goto(product_url).then(
        delay(3000));
    await page.waitForSelector("h1[class='product-name']").then(
        page.waitForSelector("button[data-attr-value='37']")).then(
            page.waitForSelector("button[data-qa='addToCart']"));
    await delay(5000).then(page.click("button[data-attr-value='37']", elem => elem.click()));
    // await page.evaluate(() => document.getElementsByName('38')[0].click());
    // await page.click("button[data-attr-value='38']", elem => elem.click());
    function Testnum(a){
        let result;
        if (a > 0) {
            result = 'positive';
        } else {
            result = 'NOT positive';
        }
        return result;}
    await page.waitForSelector("button[class='options-select    selected']");
    // await Promise.all([page.click("button[data-attr-value='38']"), page.waitForNavigation({waitUntil: 'load'})]);
    // await page.waitForTimeout(4000);
    // await page.click("button[data-attr-value='38']")
    await page.click("button[data-qa='addToCart']", elem => elem.click()).then(
        await page.screenshot({
            path: 'screenshot_full.jpg',
            fullPage: true 
          }));
}

async function mainFunc(){
    var page = await givePage();
    await addToCart(page);

    console.log('done')
}

mainFunc()