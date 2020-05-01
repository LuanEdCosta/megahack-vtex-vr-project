function addChildElement(parent, tagName, attrs) {
  if ((parent, tagName)) {
    var newElement = document.createElement(tagName)
    addElementAttrs(newElement, attrs)
    parent.appendChild(newElement)
    return newElement
  }

  return null
}
