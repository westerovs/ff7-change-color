import { clearActiveClass, setActiveClass, getCurrentIndex } from './utils.js';
import {rgbArray} from './const.js'

const modal    = document.querySelector('.modal')
const colorBox = Array.from(document.querySelectorAll('.color-box__part'))

const checkoutItems = () => {
  colorBox.forEach((box, index) => {
    box.addEventListener('click', () => {
      clearActiveClass(colorBox, 'color-box__part--active')
      setActiveClass(colorBox, index, 'color-box__part--active')
    })
  })
}

const updateValueField = (r, g, b) => {
  const fieldR = modal.querySelector('.modal__label-R')
  const fieldG = modal.querySelector('.modal__label-G')
  const fieldB = modal.querySelector('.modal__label-B')

  fieldR.innerHTML = r
  fieldG.innerHTML = g
  fieldB.innerHTML = b
}


const getValueColor = (event) => {
  console.log(event.target)

  const colorValueR = document.querySelector('#modal__input-R').value
  const colorValueG = document.querySelector('#modal__input-G').value
  const colorValueB = document.querySelector('#modal__input-B').value
}

const renderColor = (r, g, b) => {
  for (let i = 0; i < rgbArray.length; i++) {
    colorBox.style.backgroundImage = `
      linear-gradient(${ rgbArray[0].field.deg }, rgb(${ rgbArray[0].field.r }, ${ rgbArray[0].field.g }, ${ rgbArray[0].field.b }), transparent 100%)`
  }
}

// обновить окно rgb text
let r = null
let g = null
let b = null
modal.addEventListener('change', function (e) {
  const targetValue = e.target.value
  const range       = e.target.dataset.range

  console.log(rgbArray[0].field.b)

  switch (range) {
    case 'r':
      r = targetValue
      rgbArray[0].field.r = +targetValue
      break;
    case 'g':
      g = targetValue
      rgbArray[0].field.g = +targetValue
      break;
    case 'b':
      b = targetValue
      rgbArray[0].field.b = +targetValue
      break;

  }

  // updateValueField(r, g, b)
  // renderColor()
})

const init = () => {
  checkoutItems()
}
init()