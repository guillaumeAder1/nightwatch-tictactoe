module.exports = {

    'test User Middle': function(client) {
        //var page = client.page.gws();

        client.openBrowser('http://localhost:9000/#/sailsApp/', "middle", { top: 0, left: 350 }, { w: 350, h: 1000 });


        client.beforeClosing();
        client.end();

    },


}