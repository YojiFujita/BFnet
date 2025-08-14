    const { JSDOM } = require("jsdom");

    function generateHTML() {
      const dom = new JSDOM(`<!DOCTYPE html><html><head><title>Netlify Test</title></head><body><h1>Hello from Netlify!</h1></body></html>`);
      return dom.serialize();
    }

    module.exports = generateHTML;

    const generateHTML = require('./generateHTML');

    exports.handler = async (event, context) => {
      const html = generateHTML();
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "text/html",
        },
        body: html,
      };
    };
