'use strict';

/**
 *  called controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::called.called');
