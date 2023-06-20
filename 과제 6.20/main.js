const clock = document.getElementById('clock')
const hello = document.getElementById('hello')
const home = document.querySelector('.home')

//이미지 array
const image = ['https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

let date = new Date()

let num = Math.floor(Math.random(10) * 100) % 3;

// num = setInterval(() => {
//   let getNum = Math.floor(Math.random(10) * 100) % 3
//   console.log(getNum)
//   return getNum
// }, 1000);

clock.textContent = `
${date.getHours() > 12 ? date.getHours()-12 : date.getHours()}:${date.getMinutes()}
`

hello.innerHTML = `
  Good morning, Levi
`

home.style.backgroundImage = `url(${image[num]})`

