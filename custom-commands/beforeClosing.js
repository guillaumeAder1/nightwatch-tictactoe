// action before finishing script for all users
/*
    e.g pause for 10 sec OR pause indefinitely
*/

exports.command = function() {
    this.pause(5000)
    return this.execute();
};