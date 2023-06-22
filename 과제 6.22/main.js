const clock = document.getElementById('clock')
const hello = document.getElementById('hello')
const weather = document.getElementById('weather')
const home = document.querySelector('.home')
const list = document.querySelector('.toDoList')
const list__btn = document.querySelector('.listButton')
const inputText = document.querySelector('.input__text')
const homeData = document.querySelector('.home__data')
const listGrid = document.querySelector('.list__grid')
const del1 = document.querySelector('.btn__del')

//이미지 array
const image = ['https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

//1. 시계
let date = new Date()
  clock.textContent = `
  ${date.getHours() > 12 ? date.getHours()-12 : date.getHours()}:${date.getMinutes().toString().length == 1 ? "0"+date.getMinutes() : date.getMinutes()}:${date.getSeconds().toString().length == 1 ? "0"+date.getSeconds() : date.getSeconds()}
  `

setInterval(() => {
  let date = new Date()
  clock.textContent = `
  ${date.getHours() > 12 ? date.getHours()-12 : date.getHours()}:${date.getMinutes().toString().length == 1 ? "0"+date.getMinutes() : date.getMinutes()}:${date.getSeconds().toString().length == 1 ? "0"+date.getSeconds() : date.getSeconds()}
  `
}, 1000);


// 2. 배경화면
setInterval(() => {
  let num = Math.floor(Math.random(10) * 100) % 3;
  home.style.backgroundImage = `url(${image[num]})`
}, 3000);


//3. 인사하기
let inputValue;
inputText.addEventListener('input',(e) => {
  inputValue = e.target.value
})

inputText.addEventListener('keyup',(e) => {
  if(e.keyCode === 13){
    e.preventDefault();
    hello.innerHTML = `
      Good morning, ${inputValue}
    `
    inputText.style.display = "none"
  }
})

//4. to-do list 만들기
let listValue;
list.addEventListener('input',(e) => {
  listValue = e.target.value
})

list.addEventListener('keyup',(e) => {
  if(e.keyCode === 13){
    e.preventDefault()
    const div = document.createElement('div')
    div.classList.add('list__item')
    div.innerHTML = `
      <p>${listValue}</p>
      <button class="btn__del">삭제하기</button>
    `
    listGrid.appendChild(div)
  }
})

list__btn.addEventListener('click',(e) => {
  const div = document.createElement('div')
  div.classList.add('list__item')
  div.innerHTML = `
  <p>${listValue}</p>
  <button class="btn__del">삭제하기</button>
  `
  listGrid.appendChild(div)
})

// del1.addEventListener('click',(e) => {
//   console.log(e.target)
// })







//5. 날씨 만들기

navigator.geolocation.getCurrentPosition(pos => {
  let latitude = pos.coords.latitude
  let longitude = pos.coords.longitude
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6da0e9b306a29b1541e5215644ac7a99`)
    .then(data => data.json())
    .then(data => data.weather[0].main)
    .then(data => {
      weather.textContent = `${data}`
    })
})
