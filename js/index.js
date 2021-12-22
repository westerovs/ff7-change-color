const modal    = document.querySelector('.modal')
const colorBox = document.querySelectorAll('.color-box__part')

const updateValueField = (r, g, b) => {
  console.log(r, g, b)
  const fieldR = modal.querySelector('.modal__label-R')
  const fieldG = modal.querySelector('.modal__label-G')
  const fieldB = modal.querySelector('.modal__label-B')
  
  fieldR.innerHTML = r
  fieldG.innerHTML = g
  fieldB.innerHTML = b
}

const rgbArray = [
  {
    field: {
      r  : 199,
      g  : 2,
      b  : 35,
      deg: 'to right bottom'
    }
  }, {
    field: {
      r  : 100,
      g  : 100,
      b  : 100,
      deg: 'to left bottom'
    }
  }, {
    field: {
      r  : 20,
      g  : 200,
      b  : 20,
      deg: 'to right top'
    }
  }, {
    field: {
      r  : 30,
      g  : 30,
      b  : 130,
      deg: 'to left top'
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
  for (let i = 0; i < rgbArray.length; i++) {
    console.log(rgbArray[i].field.r)
    colorBox[i].style.backgroundImage = `
      linear-gradient(${ rgbArray[i].field.deg }, rgb(${ rgbArray[i].field.r }, ${ rgbArray[i].field.g }, ${ rgbArray[i].field.b }), transparent 100%)`
  }
}

renderColor()

// обновить окно rgb text
let r = null
let g = null
let b = null
modal.addEventListener('change', function (e) {
  console.log('change')
  const targetValue = e.target.value
  const range       = e.target.dataset.range
  
  switch (range) {
    case 'r':
      r = targetValue
      break;
    case 'g':
      g = targetValue
      break;
    case 'b':
      b = targetValue
      break;
  }
  
  updateValueField(r, g, b)
})
