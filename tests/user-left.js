// /https://stackoverflow.com/questions/31388280/can-i-create-reusable-test-steps-in-nightwatch-js
// http://blog.js-republic.com/page-object-asynchronous-command-in-nightwatch/
// http://blog.js-republic.com/introduction-to-nightwatch-for-lightning-acceptance-tests/

module.exports = {

    'test User left': function(client) {
        //var page = client.page.gws();

        client.openBrowser('http://localhost:9000/#/sailsApp/', "left", { top: 0, left: 0 }, { w: 350, h: 1000 })

        client.click('#clearData')
        client.end();

    },



}