const color = document.querySelector('.color')
const modal = document.querySelector('.modal')
const box = color.querySelector('.color__box')

const fieldR = modal.querySelector('.modal__label-R')
const fieldG = modal.querySelector('.modal__label-G')
const fieldB = modal.querySelector('.modal__label-B')

const getValueColor = () => {
  const colorValueR = document.querySelector('#modal__input-R').value
  const colorValueG = document.querySelector('#modal__input-G').value
  const colorValueB = document.querySelector('#modal__input-B').value
}

const setColor = (R, G, B) => {
  box.style.backgroundImage = `
    linear-gradient(to right bottom, rgb(${ R }, ${ G }, ${ B }), transparent 100%),
    linear-gradient(to left bottom, rgb(${ 0 }, ${ 0 }, ${ 0 }), transparent 100%),
    linear-gradient(to left top, rgb(${ 0 }, ${ 0 }, ${ 0 }), transparent 50%),
    linear-gradient(to right top, rgb(${ 0 }, ${ 0 }, ${ 0 }), transparent 100%)
  `
}
