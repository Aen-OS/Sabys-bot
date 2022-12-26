const readline = require('readline');
const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');

const product_url = "https://www.ugg.com/eu/fr/fr/chausson-scuffette-npmii/1106872.html?dwvar_1106872_color=GOA";

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function givePage(){
    const browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true,
        slowMo: 0,
        args: ['--window-size=1800,1090','--no-sandbox'
        ]})
    const page = await browser.newPage();
    return page;
}

async function addToCart(page){
    let sendnoti = false;
    // head to target page and wait 3 seconds (to prevent bot-detection)
    await page.goto(product_url).then(
        delay(3000));
    // h1 selector is the product title/name then wait for the size I want to appear, then just to be safe, I wait for the addtocart button to appear
    await page.waitForSelector("h1[class='product-name']").then(
        page.waitForSelector("button[data-attr-value='38']"));
    await page.waitForSelector("button[data-qa='addToCart']");
    // a delay of 5 seconds then I click on the size I want
    await delay(5000).then(
        page.click("button[data-attr-value='38']", 
        elem => elem.click()));
    // here is a conditional to check if the size is indeed available and if it is, an email notification is sent, otherwise nothing happens.
    if ((await page.$("button[class='options-select    selected']")) !== null) {
        await page.evaluate(el => el.innerText, await page.$('#idProductType'))
        sendnoti = true;
    } else {
        sendnoti = false; // nothing to do here
    }
    // just taking a screenshot when puppeteer is headless to see if everything went well
    await page.click("button[data-qa='addToCart']", elem => elem.click()).then(
        await page.screenshot({
            path: 'screenshot_full.jpg',
            fullPage: true 
          }));
    if (sendnoti === true) {
        // send email notification here
    } else {
        sendnoti = false; // nothing to do here
    }
}

async function mainFunc(){
    var page = await givePage();
    await addToCart(page);
    console.log('done');
}

mainFunc()
