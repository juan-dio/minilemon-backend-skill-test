const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation - Minilemon Backend Skill Test",
      version: "1.0.0",
      description: "Dokumentasi API untuk Minilemon Backend Skill Test",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1", // sesuaikan dengan base url kamu
      },
    ],
  },
  apis: ["./routes/*.js"], // lokasi file route kamu
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📖 Dokumentasi tersedia di http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
