const React = require("react");
const ReactDOMServer = require("react-dom/server");
const styled = require("styled-components");

module.exports = render;

function render(Component) {
  const sheet = new styled.ServerStyleSheet();
  const component = React.createElement(Component.default || Component);
  const html = ReactDOMServer.renderToString(sheet.collectStyles(component)) || Component.html;
  const styleTags = sheet.getStyleTags();

  return { head: styleTags, html };
}
