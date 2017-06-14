module.exports = {

    'test User Right': function(client) {
        //var page = client.page.gws();

        client.openBrowser('http://localhost:9000/#/sailsApp/', "Right", { top: 0, left: 700 }, { w: 350, h: 1000 })

        client.end();

    },


}