module.exports = {
    'opening:: validate popup manually': function(client) {

        client.url('http://dublt01926.esri-holdings.com:3344/webappbuilder/apps/13')
            .waitForElementVisible('#dijit_form_ValidationTextBox_0', 10000)
            .setValue('#dijit_form_ValidationTextBox_0', 'gaderesri')
            .setValue('#dijit_form_ValidationTextBox_1', "1810gaga,")
            .click('.dijitDialogPaneActionBar span')
            .waitForElementVisible('#GWS_3099_layer', 15000)
            .waitForElementVisible('#filterSchemeName', 5000)
            .setValue('#filterSchemeName', 'Clooncoose (MOB)')
            .keys(client.Keys.ENTER)
            .waitForElementVisible('.esriAttributeInspector', 150000)
            .click('.esriAttributeInspector .cancelButton')
            .pause()
            .end();
    },
}