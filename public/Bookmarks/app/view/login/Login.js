Ext.define('Bookmarks.view.login.Login', {
    extend: 'Ext.Panel',
    xtype: 'login',

     requires: [
        'Bookmarks.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    plugins: 'viewport',

    layout: 'center',

    items: [{
        bodyPadding: 10,
        title: 'Login Window',
        width: 400,
        items: {
            xtype: 'form',
            reference: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'username',
                    fieldLabel: 'Username',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'password',
                    inputType: 'password',
                    fieldLabel: 'Password',
                    allowBlank: false
                },
                {
                    xtype: 'displayfield',
                    hideEmptyLabel: false,
                    value: 'Enter your username and password'
                }
            ],
            buttons: [
                {
                    text: 'Login',
                    formBind: true,
                    listeners: {
                        click: 'doLogin'
                    }
                }
            ]
        }
    }]
});
