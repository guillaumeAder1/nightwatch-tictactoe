exports.command = function() {
    this.waitForElementVisible('#filterSchemeName', 5000).setValue('#filterSchemeName', 'Caherdrinny')
    return this.execute();
};