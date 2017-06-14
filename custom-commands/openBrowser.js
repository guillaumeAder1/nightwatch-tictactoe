exports.command = function(url, username, position, size) {
    this.url(url)
        .setWindowPosition(position.left, position.top)
        .resizeWindow(size.w, size.h)
        .waitForElementVisible('#userName', 10000)
        .setValue('#userName', username)
        .click('#login')

    return this.execute();
};