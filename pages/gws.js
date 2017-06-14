module.exports = {
    url: 'http://dublt01926.esri-holdings.com:3344/webappbuilder/apps/13/',
    elements: {
        login: {
            selector: '#dijit_form_ValidationTextBox_0'
        },

        submit: {
            selector: '//[@name="q"]',
            locateStrategy: 'xpath'
        },
        inputTxt: {
            selector: '#filterSchemeName'
        }
    }
}