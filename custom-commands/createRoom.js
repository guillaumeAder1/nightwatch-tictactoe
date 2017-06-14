exports.command = function() {
    this.pause(500)
        .click('#createRoom')
        .useXpath()
        .waitForElementVisible("//*[contains(text(),'Created by:')]", 10000)
    return this.execute();
};