// /https://stackoverflow.com/questions/31388280/can-i-create-reusable-test-steps-in-nightwatch-js
// http://blog.js-republic.com/page-object-asynchronous-command-in-nightwatch/
// http://blog.js-republic.com/introduction-to-nightwatch-for-lightning-acceptance-tests/

module.exports = {
    '@tags': ['init'],
    'test using page': function(client) {
        var page = client.page.gws();

        //        client.login('http://dublt01926.esri-holdings.com:3344/webappbuilder/apps/13');
        client.login('http://dublt01926.esri-holdings.com:3344/webappbuilder/apps/13');
        client.enterSchemeName()
            //page.setValue('@inputTxt', 'new MM');
        client.keys(client.Keys.ENTER);

        // page.navigate()
        //     .waitForElementVisible('@login', 10000)
        //     .setValue('@login', "totoot")
        client.pause(5000);

        // page.navigate()
        //     .waitForElementVisible('@login', 10000)
        //     .setValue('@login', "totoot");
        client.pause(3000);
        client.end();

    },
    'opening:: validate popup manually': function(client) {

        /* 
        NOTES
        firsr issue : save the portal credential in cookie to use the WAB
            - create cookies manually (need to generate token) 
                https://github.com/nightwatchjs/nightwatch/issues/177
                http://nightwatchjs.org/api/setCookie.html
            - pass the popup manually (Issue as you store credential in the code)
            - share app with everyone
         */

        /* validate login popup */
        // var gws = client.page.GWS();
        // gws.navigate()
        client.url('http://dublt01926.esri-holdings.com:3344/webappbuilder/apps/13')
            .waitForElementVisible('#dijit_form_ValidationTextBox_0', 10000)
            .setValue('#dijit_form_ValidationTextBox_0', 'gaderesri')
            .setValue('#dijit_form_ValidationTextBox_1', "1810gaga,")
            .click('.dijitDialogPaneActionBar span')
            .waitForElementVisible('#GWS_3099_layer', 15000)
            .waitForElementVisible('#filterSchemeName', 5000)
            .setValue('#filterSchemeName', 'new MM')
            .keys(client.Keys.ENTER)
            .waitForElementVisible('.esriAttributeInspector', 150000)
            .click('.esriAttributeInspector .cancelButton')
            .pause(1000)
            .end();
    },
    //'@tags': ['toto'],
    'opening:: service is public ': function(client) {
        client
            .url('http://dublt01926.esri-holdings.com:3344/webappbuilder/apps/37/')
            .pause(10000)
            .end();
    }

}