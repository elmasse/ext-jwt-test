/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Bookmarks.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Bookmarks',

    views: [
        'login.Login',
        'main.Main'
    ],
    
    launch: function () {
        var token = localStorage.getItem('user-token');

        Ext.widget(token ? 'app-main' : 'login');
    }
});
