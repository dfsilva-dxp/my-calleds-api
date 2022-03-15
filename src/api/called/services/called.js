'use strict';

/**
 * called service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::called.called');
