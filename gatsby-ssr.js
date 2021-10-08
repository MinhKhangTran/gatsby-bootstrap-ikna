// Import React so that you can use JSX in HeadComponents
const React = require("react")


const HeadComponents = [
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.min.js" integrity="sha384-PsUw7Xwds7x08Ew3exXhqzbhuEYmA2xnwc8BuD6SEr+UmEHlX8/MCltYEodzWA4u" crossorigin="anonymous"></script>
]

const BodyAttributes = {
    "data-bs-spy":"scroll",
    "data-bs-target":"#mainNav",
    "data-bs-offset":"0",
    className:"scrollspy-example",
    "tabindex":"0"
  
}

exports.onRenderBody = ({
  setHeadComponents,
  setBodyAttributes
}, pluginOptions) => {
  setHeadComponents(HeadComponents)
  setBodyAttributes(BodyAttributes)
}