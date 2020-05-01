function addElement(tagName, attrs) {
  var newElement = document.createElement(tagName)

  if (attrs) {
    Object.keys(attrs).forEach(function (attr) {
      var attrValue = attrs[attr]
      newElement.setAttribute(attr, attrValue)
    })
  }

  document.querySelector('a-scene').appendChild(newElement)
}
