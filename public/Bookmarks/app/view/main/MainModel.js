/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Bookmarks.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Bookmarks'
        // token: will be set later
    },

    stores: {
        bookmarks: {
            autoLoad: true,
            fields: ['name', 'url'],
            proxy: {
                type: 'rest',
                api:{
                    read: '/api/bookmarks'
                },
                headers: {
                    'Authorization' : 'Bearer {token}'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});
