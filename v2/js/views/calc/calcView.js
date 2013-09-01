// Add the Header, Footer and Container in the main index.html file
//http://dribbble.com/shots/725601-Calculator
//http://dribbble.com/shots/778627-Calculator-for-Mac?list=searches&tag=calculator
(function (W, D, U) {
    'use strict';

    define([
        'libs',
        'text!templates/calculatorTemplate.html'
        
    ], function (libs, CalculatorTemplate) {

        var $ = libs.$,
            _ = libs._,
            CalcView,
            jContainer = $('#container'),
            
            onNumClick = function(e){
	            var that = this,
	            	value = $(e.target).data('value'),
	            	dispVal = that.jDisplay.val();
	            
	            if(!value){ return; }
	            
	            that.jDisplay.val(dispVal + value);
	            	
            },
            
            
            onActClick = function(e){
	            var that = this,
	            	action = $(e.target).data('action'),
	            	dispVal = that.jDisplay.val(),
	            	sDispVal = that.jSDisplay.html();
	            
	            if(!action){ return; }
	            
	            switch(action){
		            case 'c':
		            	that.jDisplay.val('');
		            	that.jSDisplay.html('');
		            	break;
		            case '+':
			            that.jSDisplay.html(dispVal);
			            that.jDisplay.val('');			            
		            	break;			            			            
		            
	            }	            
	            	
            };

        CalcView = Backbone.View.extend({
        
        	id: 'calculator',
        	
        	className: 'row-fluid',
        
        	calculatorTemplate: _.template(CalculatorTemplate),
        	
        	events: {
	        	'click .calc-btn'	: onNumClick,
	        	'click .calc-act'	: onActClick	
        	},

            initialize: function () {
            	var that = this;
            	
                that.render();
            },

            render: function () {
            	var that = this;
            	
            	that.$el.html(that.calculatorTemplate())
				jContainer.html(that.$el);                
                that.jDisplay = that.$('.display');
                that.jSDisplay = that.$('.semi-display');                
                
                return that;
            }        
       });

        return CalcView;
    });
})(window, document);