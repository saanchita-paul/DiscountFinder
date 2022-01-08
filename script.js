replaceText(document.body)

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  }
  else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/discount/gi)) {
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(/(discount)/gi, '<span class="rainbow">$1</span>')
      element.replaceWith(newElement)
    }
  }
}