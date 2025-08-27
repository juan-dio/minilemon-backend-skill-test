const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require('path');

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
        url: "https://minilemon-backend-skill-test.vercel.app/api/v1",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);
const css_url = 'api-docs-static/swagger-ui.css';
const js_url = 'api-docs-static/swagger-ui-bundle.js';

function swaggerDocs(app, port) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, { customCssUrl: css_url, customJsUrl: js_url }));
  // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec, { explorer: true });
  });
}

module.exports = swaggerDocs;
