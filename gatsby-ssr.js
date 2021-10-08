// Import React so that you can use JSX in HeadComponents
const React = require("react")


const HeadComponents = [
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
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