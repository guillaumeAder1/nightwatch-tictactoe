exports.command = function(url, username, position, size) {
    this.url(url)
        .setWindowPosition(position.left, position.top)
        .resizeWindow(size.w, size.h)
        .waitForElementVisible('#userName', 10000)
        .setValue('#userName', username)
        .click('#login')
        .pause(5000);
    return this.execute();
};