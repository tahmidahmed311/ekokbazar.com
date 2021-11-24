module.exports = {
    "Check Add to Cart": function (browser){
        browser.url("https://ekokbazar.com");
        browser.waitForElementVisible("input[type=text]");
        //browser.click("input[type=submit]");
        browser.click("https://ekokbazar.com/add to cart");
        browser.click("input[type=submit]");
    }
  }