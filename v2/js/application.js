(function (W, D, U) {
    'use strict';

    define([
        'libs',
        'bootstrap',
        'views/hfcView',
        'views/sidebarView',        
    ], function (libs, bootstrap, HFCView, SidebarView) {

        var $ = libs.$,
            _ = libs._,
            Backbone = libs.Backbone,
            Modernizr = libs.Modernizr,
            AppView;

        AppView = Backbone.View.extend({

            initialize: function () {
                var that = this;                
                new HFCView();
                new SidebarView();
            },

            render: function () {
                console.log('app initialized!');
            }        
       });

        return AppView;
    });
})(window, document);