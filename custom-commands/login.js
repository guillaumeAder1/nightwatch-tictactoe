exports.command = function(url) {
    this.url(url)
        .waitForElementVisible('#dijit_form_ValidationTextBox_0', 10000)
        .setValue('#dijit_form_ValidationTextBox_0', 'gaderesri')
        .setValue('#dijit_form_ValidationTextBox_1', "1810gaga,")
        .click('.dijitDialogPaneActionBar span');
    return this.execute();
};