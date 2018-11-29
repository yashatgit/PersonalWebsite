// Add the Header, Footer and Container in the main index.html file

(function (W, D, U) {
    'use strict';

    define([
        'libs',
        'text!templates/header.html',
        'text!templates/footer.html',
        'text!templates/container.html'
        
    ], function (libs, HeaderTemplate, FooterTemplate, ContainerTemplate) {

        var $ = libs.$,
            _ = libs._,
            HFCView;

        HFCView = Backbone.View.extend({
        
        	headerTemplate: _.template(HeaderTemplate),
        	footerTemplate: _.template(FooterTemplate),
        	containerTemplate: _.template(ContainerTemplate),

            initialize: function () {
                this.render();
            },

            render: function () {
                $('#navbar').html(this.headerTemplate());
                $('#footer').html(this.footerTemplate());
                $('#container').html(this.containerTemplate());
            }        
       });

        return HFCView;
    });
})(window, document);