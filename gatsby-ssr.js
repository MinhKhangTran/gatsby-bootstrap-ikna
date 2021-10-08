// Import React so that you can use JSX in HeadComponents
const React = require("react")




const BodyAttributes = {
    "data-bs-spy":"scroll",
    "data-bs-target":"#mainNav",
    "data-bs-offset":"0",
    className:"scrollspy-example",
    "tabindex":"0"
  
}

exports.onRenderBody = ({
  setBodyAttributes
}, pluginOptions) => {
 
  setBodyAttributes(BodyAttributes)
}