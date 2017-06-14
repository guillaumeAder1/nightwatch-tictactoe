// User will clik on a room to join it


exports.command = function() {
    this.useXpath()
        .waitForElementVisible("//*[contains(text(),'Created by:')]", 10000)
        .click("//*[contains(text(),'Created by:')]")
    return this.execute();
};