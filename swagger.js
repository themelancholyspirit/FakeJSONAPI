const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Mock JSON API',
      version: '1.0.0',
      description: 'Welcome to the Mock JSON API! This API is designed for testing and development purposes, providing simulated data for various resources. Enjoy exploring and testing with the Mock JSON API!',
    },
  },
  apis: ['./routes/*.js'], // Make sure this path points to your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
