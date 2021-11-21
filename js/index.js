const modal = document.querySelector('.modal')
const box = document.querySelector('.color-box')

const fieldR = modal.querySelector('.modal__label-R')
const fieldG = modal.querySelector('.modal__label-G')
const fieldB = modal.querySelector('.modal__label-B')

const rgbArray = [
  {
    field: {
      r: 1,
      g: 2,
      b: 3,
    }
  }, {
    field: {
      r: 10,
      g: 10,
      b: 10,
    }
  }, {
    field: {
      r: 20,
      g: 20,
      b: 20,
    }
  }, {
    field: {
      r: 30,
      g: 30,
      b: 30,
    }
  }
]

const getValueColor = (event) => {
  console.log(event.target)
  
  const colorValueR = document.querySelector('#modal__input-R').value
  const colorValueG = document.querySelector('#modal__input-G').value
  const colorValueB = document.querySelector('#modal__input-B').value
}

const renderColor = () => {
  rgbArray.find(color => {
    box.style.backgroundImage = `
    linear-gradient(to right bottom, rgb(${ color.field.r }, ${ color.field.g }, ${ color.field.b }), transparent 100%),
    linear-gradient(to left bottom, rgb(${ color.field.r }, ${ color.field.g }, ${ color.field.b }), transparent 100%),
    linear-gradient(to left top, rgb(${ color.field.r }, ${ color.field.g }, ${ color.field.b }), transparent 50%),
    linear-gradient(to right top, rgb(${ color.field.r }, ${ color.field.g }, ${ color.field.b }), transparent 100%)`
  })
}


modal.addEventListener('change', getValueColor)
