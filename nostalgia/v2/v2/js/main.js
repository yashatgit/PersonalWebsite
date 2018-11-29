
(function(W){
	require.config({
		paths: { 
			jQuery: 		'libs/jquery/jquery-1.9.1.min', 
			bootstrap:      'libs/bootstrap/bootstrap.min',
			lodash:        	'libs/lodash/lodash.min',
			underscore: 	'libs/lodash/lodash.underscore.min', 
			backbone: 		'libs/backbone-min',			
			
			//Require addons
            text:           'libs/require/text',
			
			application:    'application' 
		},
		
		shim: {
	            'jQuery': {
	                exports:                '$'
	            },
	            
	            'underscore': {
                	deps:                   ['jQuery'],
                	exports:                '_'
                },
	            
	            'bootstrap':{
		            deps:                   ['jQuery'],
	            },            
	
	            'backbone': {
	                deps:                   ['jQuery', 'underscore'],
	                exports:                'Backbone'
	            },
	
	            'application':              ['jQuery', 'libs']
	        },
	        
	   waitSeconds:    120
	});
	
	require(['application'], function (AppView) {		
	    var app = new AppView();        
        app.render();            
    });

})(window);