import { clearActiveClass, setActiveClass, getCurrentIndex } from './utils.js';
import {rgbArray} from './const.js'

const rangeBox = document.querySelector('.rangeBox')
const colorBox = Array.from(document.querySelectorAll('.color-box__part'))

const checkoutItems = () => {
  colorBox.forEach((box, index) => {
    box.addEventListener('click', () => {
      clearActiveClass(colorBox, 'color-box__part--active')
      setActiveClass(colorBox, index, 'color-box__part--active')
    })
  })
}

const getValueColor = () => {
  // range
  const colorValueR = document.querySelector('#rangeBox__input-R').value
  const colorValueG = document.querySelector('#rangeBox__input-G').value
  const colorValueB = document.querySelector('#rangeBox__input-B').value
  // label
  const labelR = document.querySelector('.rangeBox__label-R')
  const labelG = document.querySelector('.rangeBox__label-G')
  const labelB = document.querySelector('.rangeBox__label-B')
  
  labelR.innerHTML = colorValueR
  labelG.innerHTML = colorValueG
  labelB.innerHTML = colorValueB
}

const renderColor = (r, g, b) => {
  for (let i = 0; i < rgbArray.length; i++) {
    colorBox.style.backgroundImage = `
      linear-gradient(${ rgbArray[0].field.deg }, rgb(${ rgbArray[0].field.r }, ${ rgbArray[0].field.g }, ${ rgbArray[0].field.b }), transparent 100%)`
  }
}

rangeBox.addEventListener('change', function (e) {
  const targetValue = e.target.value
  const range       = e.target.dataset.range

  switch (range) {
    case 'r':
      // r = targetValue
      rgbArray[0].field.r = +targetValue
      break;
    case 'g':
      // g = targetValue
      rgbArray[0].field.g = +targetValue
      break;
    case 'b':
      // b = targetValue
      rgbArray[0].field.b = +targetValue
      break;
  }
  
  getValueColor()
  // updateValueField(r, g, b)
  // renderColor()
})

const init = () => {
  checkoutItems()
  getValueColor()
}
init()