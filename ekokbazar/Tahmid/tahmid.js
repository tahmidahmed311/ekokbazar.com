module.exports = {
  "Check Wish List": function (browser){
      browser.url("https://ekokbazar.com");
      browser.waitForElementVisible("input[type=text]");
      //browser.click("input[type=submit]");
      browser.click("https://ekokbazar.com/wishlist");
      browser.click("input[type=submit]");
  }
}