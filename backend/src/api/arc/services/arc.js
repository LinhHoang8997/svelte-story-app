'use strict';

/**
 * arc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::arc.arc');
