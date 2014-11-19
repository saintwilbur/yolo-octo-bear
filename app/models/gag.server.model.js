'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
    return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * Gag Schema
 */
var GagSchema = new Schema({
	_uid: Number,
    gagName: {
        type: String,
        trim: true,
        default: 'Gag',
        validate: [validateLocalStrategyProperty, 'Please fill in valid artist name']
    },
    users: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
        /*artist_uid: Number,
        status: {
            type: String,
            enum: ['tracking', 'watching']
        }*/
    }],
    provider: {
        type: String
    },
    providerData: {},
    additionalProvidersData: {},
    updated: {
        type: Date
    },
	date: {
        type: Date,
        default: Date.now
    },
	venue: {
		city: String,
		region: String,
		country: String,
		venueName: String
	},
	location: {
		latitude: String,
		longitude: String
	},
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Gag', GagSchema);