import puppeteer from 'puppeteer';

(async () => {
    // 启动浏览器并打开一个新的空白页面
    const browser = await puppeteer.launch(
        { headless: false } // puppeteer 默认使用 Headless 模式控制浏览器，这里为了看到具体情况，关闭 Headless 模式
    );
    // 创建一个新的标签页
    const page = await browser.newPage();

    // 标签页导航到指定的 URL
    await page.goto('https://baidu.com/');

    // 截图
    await page.screenshot({ path: 'baidu.png' });

    // 关闭浏览器
    await browser.close();
})()


