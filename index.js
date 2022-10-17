const inputText = document.querySelector('.search')
const fruitsButton = document.querySelector('.fruits')
const allButton = document.querySelector('.all')
const vegetablesButton = document.querySelector('.vegetables')
const protinesButton = document.querySelector('.protines')
const videoCam = document.querySelector('video')


const card1 = document.querySelector('.one')
const card2 = document.querySelector('.two')
const card3 = document.querySelector('.three')
const card4 = document.querySelector('.for')


fruitsButton.addEventListener('click', function(){
  fruitsButton.classList.add('onfocus')
  allButton.classList.remove('onfocus')
  vegetablesButton.classList.remove('onfocus')
  protinesButton.classList.remove('onfocus')


})

allButton.addEventListener('click', function(){
  allButton.classList.add('onfocus')
  fruitsButton.classList.remove('onfocus')
  vegetablesButton.classList.remove('onfocus')
  protinesButton.classList.remove('onfocus')
})

vegetablesButton.addEventListener('click', function(){
  vegetablesButton.classList.add('onfocus')
  allButton.classList.remove('onfocus')
  fruitsButton.classList.remove('onfocus')
  protinesButton.classList.remove('onfocus')
})

protinesButton.addEventListener('click', function(){
  protinesButton.classList.add('onfocus')
  vegetablesButton.classList.remove('onfocus')
  allButton.classList.remove('onfocus')
  fruitsButton.classList.remove('onfocus')
})

fruitsButton.addEventListener('click', function(){
  card2.classList.add('hide')
  card3.classList.add('hide')
  card4.classList.add('hide')
  card1.classList.remove('hide')
})

allButton.addEventListener('click', function(){
  card2.classList.remove('hide')
  card1.classList.remove('hide')
  card3.classList.remove('hide')
  card4.classList.remove('hide')
})

vegetablesButton.addEventListener('click', function(){
  card2.classList.remove('hide')
  card1.classList.add('hide')
  card4.classList.add('hide')
  card3.classList.add('hide')
})

protinesButton.addEventListener('click', function(){
  card2.classList.add('hide')
  card3.classList.remove('hide')
  card1.classList.add('hide')
  card4.classList.remove('hide')
})


inputText.addEventListener('keypress', function s(e){
   if(e.key === 'Enter') {
  console.log(inputText.value)
}})