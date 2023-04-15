'use strict';

/**
 * soundtrack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::soundtrack.soundtrack');
