let goalNum
let btnNum
let wins = 0
let losses = 0

//main function of the game
const init = () => {
  //default number
  btnNum = 0
  //random number
  goalNum = Math.floor(Math.random() * 101) + 19
  //what the score will show
  document.querySelector('#goalNum').innerHTML = "Night King's number : " + goalNum
  document.querySelector('#btnNum').innerHTML = 'Your number : ' + btnNum
  document.querySelector('#wins').innerHTML = 'Wins : ' + wins
  document.querySelector('#losses').innerHTML = 'Losses : ' + losses
//jon snow button
  let jonBtn = document.createElement('button')
  jonBtn.innerHTML = `<img src="assets/images/jon.jpg" width="200px" height="200px">`
  jonBtn.className = 'gameBtn'
  jonBtn.setAttribute('data-value', Math.floor(Math.random() * 12) + 1)
  document.querySelector('#buttons').append(jonBtn)
//daenerys targaryen button
  let danyBtn = document.createElement('button')
  danyBtn.innerHTML = `<img src="assets/images/dany.jpg" width="200px" height="200px">`
  danyBtn.className = 'gameBtn'
  danyBtn.setAttribute('data-value', Math.floor(Math.random() * 12) + 1)
  document.querySelector('#buttons').append(danyBtn)
//cersei lannister button
  const cerseiBtn = document.createElement('button')
  cerseiBtn.innerHTML = `<img src="assets/images/cersei.jpg" width="200px" height="200px">`
  cerseiBtn.className = 'gameBtn'
  cerseiBtn.setAttribute('data-value', Math.floor(Math.random() * 12) + 1)
  document.querySelector('#buttons').append(cerseiBtn)
}

//adds the random value to the buttons and what to do when clicked
document.addEventListener('click', e => {
  if (e.target.className === 'gameBtn') {
    btnNum += parseInt(e.target.dataset.value)
    document.querySelector('#btnNum').textContent = `Your number : ${btnNum}`
    if (btnNum === goalNum) {
      wins++
      document.querySelector('#wins').textConent = `Wins : ${wins}`
    } else if (btnNum > goalNum) {
      losses++
      document.querySelector('#losses').textContent = `Losses : ${losses}`
    }
  }
})

//Bugs: Wins not adding when btnNum === goalNum. Buttons only work if you click on it and then use the space bar.
//Need to code to stop btnNum from continuing when it equals goalNum or goes over goalNum


// const results = () => {
//   document.addEventListener('click', e => {
//     if (e.target.className === 'gameBtn') {
//       btnNum += parseInt(e.target.dataset.value)
//       document.querySelector('#btnNum').innerHTML = 'Your current number : ' + btnNum
//     }
//   })
// }
// switch (results) {
//   case wins = (btnNum === goalNum):
//     wins++
//     document.querySelector('#wins').innerHTML = 'Wins : ' + wins
//     break
//   case losses = (btnNum > goalNum):
//     losses++
//     document.querySelector('losses').innerHTML = 'Losses : ' + losses
//     break
//   default:
// }


init()