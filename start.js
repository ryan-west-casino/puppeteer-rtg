exports.default = async ({ page }) => {
    await page.setViewport({ width: 880, height: 1064 });
    // Full puppeteer API is available
    await page.goto('https://scoobiedog.casinoman.app/g?token=97f4d4c4-3bb7-4b3c-915a-8e2dc22fd2f1&entry=7301dd7dfd657e71fab74d054d699c78-1670777974&player_id=650066311a9aec1eb646109292b637f9');
    await page.waitForTimeout(29000); // setup
    await page.keyboard.type(' ');
    await page.keyboard.type(' ');
    await page.waitForTimeout(9000); // setup
    page.waitForSelector(".turbo-button", { visible: true });
    await page.click('.turbo-button');
    const readLoop = async () => {
        await page.waitForTimeout(400);
        await page.keyboard.type(' ');
        return readLoop(); // run the loop again
    };
    // invoke it for infinite callbacks without any delays at all
    await readLoop();
};
