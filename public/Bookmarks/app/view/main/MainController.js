/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Bookmarks.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init: function () {
        this.getTokenFromLocalStorage();
    },

    getTokenFromLocalStorage: function () {
        var token = localStorage.getItem('user-token');

        this.getViewModel().set('token', token);
    }


});
