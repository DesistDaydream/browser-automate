import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch(
        {
            headless: false // puppeteer 默认使用 Headless 模式控制浏览器，这里为了看到具体情况，关闭 Headless 模式
        }
    );
    const page = await browser.newPage();

    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');


    // Puppeteer 将 HTML 中的元素抽象为 ElementHandle 对象。
    // 有多种用于定位元素的方法，每个方法的返回值都是 ElementHandle 实例。
    // 定位到元素后，ElementHandle 下的方法可以对该元素进行处理。
    // 每种定位方法中，都需要使用 Selector(选择器) 作为参数。选择器就是一种 expression(表达式)，比如 XPath、传统的类似 document.querySelector 中的表达式、等等
    //
    // $ 方法相当于在页面中执行 document.querySelector。
    // 查找 id 为 my-text-id 的元素
    const eleText = await page.$('#my-text-id')
    await eleText.type('Hello Puppeteer!', { 'delay': 1000 }) // 在输入框中输入文字，每隔一秒输入一个字符

    // 通过 XPath 定位元素
    const eleCheck2 = await page.$x('//*[@id="my-check-2"]')
    await eleCheck2[0].click()
})()


