(function(W) {
    'use strict';

    define([
        'jQuery',
        'underscore',
        'backbone'
    ], function ($, _, Backbone) {

        W.jQuery = $;
        W.$ = $;

        return {
            "jQuery":       $,
            "$":            $,
            "_":            _,
            "Backbone":     Backbone,
            "Modernizr":    W.Modernizr
        };
    });
})(window);