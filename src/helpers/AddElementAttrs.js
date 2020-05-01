function addElementAttrs(element, attrs) {
  if (attrs && isObject(attrs)) {
    Object.keys(attrs).forEach(function (attr) {
      var attrValue = attrs[attr]

      if (isObject(attrValue)) {
        var stringfiedObject = JSON.stringify(attrValue)
        stringfiedObject = stringfiedObject.replace(/{|}|"/g, '')
        stringfiedObject = stringfiedObject.replace(/,/g, ';')
        element.setAttribute(attr, stringfiedObject)
      } else if (Array.isArray(attrValue)) {
        element.setAttribute(attr, attrValue.join(' '))
      } else {
        element.setAttribute(attr, attrValue)
      }
    })
  }
}
