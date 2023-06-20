const clock = document.getElementById('clock')
const hello = document.getElementById('hello')
const home = document.querySelector('.home')

//이미지 array
const image = ['https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']


function getImage(){
  let a = Math.floor(Math.random(10)*100 % 2)
  return home.style.backgroundImage = `url(${image[a]})`
}

function getCurrentTime(){
  const date = new Date()
  return clock.textContent=`
  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().length == 1 ? '0'+date.getSeconds() : date.getSeconds()}
  `
}

setInterval(() => {
  getCurrentTime()
}, 1000);

setInterval(() => {
  getImage()
}, 1000);

hello.innerHTML = `
  Good morning, Levi
`