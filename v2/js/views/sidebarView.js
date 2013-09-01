// Sidebar View Class

(function (W, D, U) {
    'use strict';

    define([
        'libs',
        'views/calc/calcView',        
        'text!templates/sidebar.html'
                
    ], function (libs, CalcView, SidebarTemplate) {

        var $ = libs.$,
            _ = libs._,
            SidebarView,
            
            onBtnClick = function(e){
	            var that = this,
	            	target = $(e.target),
	            	action = target.data('action');
	            	
	           if(!action){ return; } 	
	            	
	           switch(action){
		           case 'calculator':
		           	new CalcView();			
		           break;
	           } 	
            };

        SidebarView = Backbone.View.extend({
        
        	sidebarTemplate: _.template(SidebarTemplate),
        	
        	el: '#sidebar',
        	
        	events: {
	        	'click .sidebar-btn'	: onBtnClick	
        	},

            initialize: function () {
                this.render();
            },

            render: function () {
                var that = this;
                
                that.$el.html(this.sidebarTemplate());
            }        
       });

        return SidebarView;
    });
})(window, document);