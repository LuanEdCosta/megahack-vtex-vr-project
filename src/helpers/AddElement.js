function addElement(parentElementSelector, tagName, attrs) {
  if (tagName) {
    var parentElement = null

    if (parentElementSelector) {
      parentElement = document.querySelector(parentElementSelector)
    }

    if (parentElement) {
      var newElement = document.createElement(tagName)
      addElementAttrs(newElement, attrs)
      parentElement.appendChild(newElement)
      return newElement
    }
  }

  return null
}
