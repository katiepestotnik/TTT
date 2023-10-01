console.log('connected')
const firstPlayer = 'X'
const secondPlayer = 'O'
let firstCount = 0
let secondCount = 0
const boxes = document.querySelectorAll('.box')
const winner = document.querySelector('.winner')
//win 1,2,3
//1,4,7
//4,5,6
//2,5,8
//3,6,9
//1,5,9
//7,5,3
//7,6,9

const win1 = [1, 2, 3]
const win2 = [1, 4, 7]
const win3 = [4, 5, 6]
const win4 = [2, 5, 8]
const win5 = [3, 6, 9]
const win6 = [1, 5, 9]
const win7 = [7, 5, 3]
const win8 = [7, 8, 9]

const checkWin1 = (className, winArr, player) => {
    if (className === 'one') winArr.splice(0, 1, player)
    if (className === 'two') winArr.splice(1, 1, player)
    if (className === 'three') winArr.splice(2, 1, player)
}
const checkWin2 = (className, winArr, player) => {
    if (className === 'one') winArr.splice(0, 1, player)
    if (className === 'four') winArr.splice(1, 1, player)
    if (className === 'seven') winArr.splice(2, 1, player)
}
const checkWin3 = (className, winArr, player) => {
    if (className === 'four') winArr.splice(0, 1, player)
    if (className === 'five') winArr.splice(1, 1, player)
    if (className === 'six') winArr.splice(2, 1, player)
}
const checkWin4 = (className, winArr, player) => {
    if (className === 'two') winArr.splice(0, 1, player)
    if (className === 'five') winArr.splice(1, 1, player)
    if (className === 'eight') winArr.splice(2, 1, player)
}
const checkWin5 = (className, winArr, player) => {
    if (className === 'three') winArr.splice(0, 1, player)
    if (className === 'six') winArr.splice(1, 1, player)
    if (className === 'nine') winArr.splice(2, 1, player)
}
const checkWin6 = (className, winArr, player) => {
    if (className === 'one') winArr.splice(0, 1, player)
    if (className === 'five') winArr.splice(1, 1, player)
    if (className === 'nine') winArr.splice(2, 1, player)
}
const checkWin7 = (className, winArr, player) => {
    if (className === 'seven') winArr.splice(0, 1, player)
    if (className === 'five') winArr.splice(1, 1, player)
    if (className === 'three') winArr.splice(2, 1, player)
}
const checkWin8 = (className, winArr, player) => {
    if (className === 'seven') winArr.splice(0, 1, player)
    if (className === 'eight') winArr.splice(1, 1, player)
    if (className === 'nine') winArr.splice(2, 1, player)
}
const selectBox = (e) => {
    const box = e.target
    const className = box.classList[1]
    if (firstCount <= secondCount || firstCount === 0 ) {
        box.textContent = firstPlayer
        firstCount++
        checkWin1(className, win1, firstPlayer)
        checkWin2(className, win2, firstPlayer)
        checkWin3(className, win3, firstPlayer)
        checkWin4(className, win4, firstPlayer)
        checkWin5(className, win5, firstPlayer)
        checkWin6(className, win6, firstPlayer)
        checkWin7(className, win5, firstPlayer)
        checkWin8(className, win6, firstPlayer)
    } 
    else {
        box.textContent = secondPlayer
        secondCount++
        checkWin1(className, win1, secondPlayer)
        checkWin2(className, win2, secondPlayer)
        checkWin3(className, win3, secondPlayer)
        checkWin4(className, win4, secondPlayer)
        checkWin5(className, win5, secondPlayer)
        checkWin6(className, win6, secondPlayer)
        checkWin7(className, win7, firstPlayer)
        checkWin8(className, win8, firstPlayer)
    } 
}

const winnerCheckX = (e) => {
    const answer1 = win1.every((ele) => ele === firstPlayer)
    const answer2 = win2.every((ele) => ele === firstPlayer)
    const answer3 = win3.every((ele) => ele === firstPlayer)
    const answer4 = win4.every((ele) => ele === firstPlayer)
    const answer5 = win5.every((ele) => ele === firstPlayer)
    const answer6 = win6.every((ele) => ele === firstPlayer)
    const answer7 = win7.every((ele) => ele === firstPlayer)
    const answer8 = win8.every((ele) => ele === firstPlayer)
    if (answer1 || answer2 || answer3 || answer4 || answer5 || answer6 || answer7 || answer8) {
        winner.textContent = 'Player 1: X'
        boxes.forEach((box) => {
            box.removeEventListener('click', selectBox)
        })
    }
}
const winnerCheckO = (e) => {
    const answer1 = win1.every((ele) => ele === secondPlayer)
    const answer2 = win2.every((ele) => ele === secondPlayer)
    const answer3 = win3.every((ele) => ele === secondPlayer)
    const answer4 = win4.every((ele) => ele === secondPlayer)
    const answer5 = win5.every((ele) => ele === secondPlayer)
    const answer6 = win6.every((ele) => ele === secondPlayer)
    const answer7 = win7.every((ele) => ele === firstPlayer)
    const answer8 = win8.every((ele) => ele === firstPlayer)
    if (answer1 || answer2 || answer3 || answer4 || answer5 || answer6 || answer7 || answer8) {
        winner.textContent = 'Player 2: O'
        boxes.forEach((box) => {
            box.removeEventListener('click', selectBox)
        })
    }
}

boxes.forEach((box) => {
    box.addEventListener('click', selectBox) 
    box.addEventListener('click', winnerCheckO)
    box.addEventListener('click', winnerCheckX)
})

