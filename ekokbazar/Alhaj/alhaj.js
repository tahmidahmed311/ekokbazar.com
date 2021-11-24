module.exports = {
    "Test Google": function (browser){
        browser.url("https://www.google.com/");
        browser.waitForElementVisible("input[type=text]");
        browser.setvalue("input[type=text]", "bangladesh");
        browser.click("input[type=submit]");
    }
}