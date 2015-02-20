
Ext.define('Bookmarks.view.main.Main', {
    extend: 'Ext.tab.Panel',
    requires: [
        'Bookmarks.view.main.MainController',
        'Bookmarks.view.main.MainModel',
        'Ext.grid.Panel'
    ],

    plugins: 'viewport',

    xtype: 'app-main',

    controller: 'main',

    viewModel: {
        type: 'main'
    },

    items: [
        {
            xtype: 'grid',
            title: 'Bookmarks',
            bind: '{bookmarks}',
            columns: [
                { text: 'Name', dataIndex: 'name', flex: 1 },
                { text: 'Url',  dataIndex: 'url' , flex: 1 }
            ]
        }
    ]
});
