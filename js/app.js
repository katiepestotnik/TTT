const inputFirstPlayer = document.querySelector('.input-x')
const inputSecondPlayer = document.querySelector('.input-o')
const displayFirstPlayer = document.querySelector('.display-p1')
const displaySecondPlayer = document.querySelector('.display-p2')
let firstPlayer
let secondPlayer
const label1 = document.querySelector('#label-1')
const label2 = document.querySelector('#label-2')
const nameBtn1 = document.querySelector('.name-btn-1')
const nameBtn2 = document.querySelector('.name-btn-2')
let firstCount = 0
let secondCount = 0
const boxes = document.querySelectorAll('.box')
const winner = document.querySelector('.winner')
const reset = document.querySelector('.reset')
const status = document.querySelector('.status')
const current = document.querySelector('.current-player')


const selectPlayer1 = (e) => {
    firstPlayer = inputFirstPlayer.value
    displayFirstPlayer.textContent = `${firstPlayer} is player X`
    inputFirstPlayer.value = ''
    nameBtn1.disabled = true
    current.textContent = firstPlayer
    inputFirstPlayer.remove()
    nameBtn1.remove()
    label1.remove()
}
const selectPlayer2 = (e) => {
    secondPlayer = inputSecondPlayer.value
    displaySecondPlayer.textContent = `${secondPlayer} is player O`
    inputSecondPlayer.value = ''
    nameBtn2.disabled = true
    inputSecondPlayer.remove()
    nameBtn2.remove()
    label2.remove()
}
nameBtn1.addEventListener('click', selectPlayer1)
nameBtn2.addEventListener('click', selectPlayer2)
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
    box.style.backgroundColor = '#fff'
    if (current.textContent === firstPlayer) current.textContent = secondPlayer
    else current.textContent = firstPlayer
    if (firstCount <= secondCount || firstCount === 0) {
        box.classList.add('guessed')
        box.textContent = 'X'
        firstCount++
        checkWin1(className, win1, firstPlayer)
        checkWin2(className, win2, firstPlayer)
        checkWin3(className, win3, firstPlayer)
        checkWin4(className, win4, firstPlayer)
        checkWin5(className, win5, firstPlayer)
        checkWin6(className, win6, firstPlayer)
        checkWin7(className, win7, firstPlayer)
        checkWin8(className, win8, firstPlayer)
        box.removeEventListener('click', selectBox)
    } 
    else {
        box.classList.add('guessed')
        box.textContent = 'O'
        secondCount++
        checkWin1(className, win1, secondPlayer)
        checkWin2(className, win2, secondPlayer)
        checkWin3(className, win3, secondPlayer)
        checkWin4(className, win4, secondPlayer)
        checkWin5(className, win5, secondPlayer)
        checkWin6(className, win6, secondPlayer)
        checkWin7(className, win7, secondPlayer)
        checkWin8(className, win8, secondPlayer)
        box.removeEventListener('click', selectBox)
    } 
}

const checkTie = () => {
    const newBoxes = Array.from(boxes)
    return newBoxes.every((ele)=>ele.classList[2] === 'guessed')
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
        status.textContent = 'GAME OVER'
        displayFirstPlayer.textContent = ''
        displaySecondPlayer.textContent = ''
        winner.textContent = `${firstPlayer} wins!`
        boxes.forEach((box) => {
            box.removeEventListener('click', selectBox)
        })
    }
    if (checkTie()) {
        status.textContent = 'It\'s a tie, no winner!'
        displayFirstPlayer.textContent = ''
        displaySecondPlayer.textContent = ''
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
    const answer7 = win7.every((ele) => ele === secondPlayer)
    const answer8 = win8.every((ele) => ele === secondPlayer)
    if (answer1 || answer2 || answer3 || answer4 || answer5 || answer6 || answer7 || answer8) {
        status.textContent = 'GAME OVER'
        displayFirstPlayer.textContent = ''
        displaySecondPlayer.textContent = ''
        winner.textContent = `${secondPlayer} wins!`
        boxes.forEach((box) => {
            box.removeEventListener('click', selectBox)
        })
    }
}

const resetter = (e) => {
    location.reload()
}

boxes.forEach((box) => {
    box.addEventListener('click', selectBox) 
    box.addEventListener('click', winnerCheckO)
    box.addEventListener('click', winnerCheckX)
})

reset.addEventListener('click', resetter)