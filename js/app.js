console.log('connected')
const firstPlayer = 'X'
const secondPlayer = 'O'
let firstCount = 0
let secondCount = 0

const selectBox = (e) => {
    if (firstCount <= secondCount || firstCount === 0 ) {
        e.target.textContent = firstPlayer
        firstCount++
        console.log('this is secondCount', secondCount)
        console.log('this is firstCount', firstCount)
    } 
    else {
        e.target.textContent = secondPlayer
        secondCount++
        console.log('this is secondCount', secondCount)
        console.log('this is firstCount', firstCount)
    } 
}


const boxes = document.querySelectorAll('.box')
boxes.forEach((box) => {
    box.addEventListener('click', selectBox)
})

