const clearActiveClass = (element, className = 'is-active') => {
  element.forEach(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className = 'is-active') => {
  element[index].classList.add(`${ className }`)
}

const getCurrentIndex = (node) => {
  return node.findIndex(item => item.classList.contains('color-box__part--active'))
}

export {
  clearActiveClass,
  setActiveClass,
  getCurrentIndex
}