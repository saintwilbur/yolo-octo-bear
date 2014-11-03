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
 * Artist Schema
 */
var ArtistSchema = new Schema({
	_uid: Number,
<<<<<<< HEAD
    artistName: {
        type: String,
        trim: true,
        default: 'Artist',
        validate: [validateLocalStrategyProperty, 'Please fill in valid artist name']
    },
	tourInfo: [Number], //gig_uids
    provider: {
        type: String
    },
    providerData: {},
    additionalProvidersData: {},
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
=======
	artistName: {
		type: String,
		trim: true,
		default: 'Artist',
		validate: [validateLocalStrategyProperty, 'Please fill in valid artist name']
	},
	tourInfo: [Number], //gig_uids
	provider: {
		type: String,
	},
	providerData: {},
	additionalProvidersData: {},
	updated: {
 		type: Date
	},
	created: {
		type: Date,
		default: Date.now
	}
>>>>>>> jack-dev-update
});

mongoose.model('Artist', ArtistSchema);