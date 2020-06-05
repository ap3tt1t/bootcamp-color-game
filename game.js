
var colors = generateRandomColors(6)

var squares = document.querySelectorAll('div.square')
var pickedColor = pickColor()
var colorDisplay = document.getElementById('colorDisplay')
var messageDisplay = document.querySelector('#message')
var h1 = document.querySelector('h1')
var resetBtn = document.querySelector('#reset')
var easyBtn = document.querySelector('#easy-btn')
var hardBtn = document.querySelector('#hard-btn')
var mode = "hard"

colorDisplay.textContent = pickedColor

// Event Listeners
easyBtn.addEventListener('click', function() {
    easyBtn.classList.add('selected')
    hardBtn.classList.remove('selected')
    for (var i = 3; i < 6; i++) {
        squares[i].style.display = 'none'
    }
    mode = "easy"
    reset(3)
    
})
hardBtn.addEventListener('click', function() {
    easyBtn.classList.remove('selected')
    hardBtn.classList.add('selected')
    for (var i = 3; i < 6; i++) {
        squares[i].style.display = 'block'
    }
    mode = "hard"
    reset(6)
})
resetBtn.addEventListener('click', function() {
    if (mode === "easy") {
        reset(3)
    } else if (mode === "hard") {
        reset(6)
    }
    
})

squares.forEach((square, index) => {
    // Add Initial Colours
    square.style.backgroundColor = `${colors[index]}`
    // Add Click Listeners
    square.addEventListener('click', function() {
        // Get color of clicked square
        var clickedColor = this.style.backgroundColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!'
            resetBtn.textContent = "Play Again?"
            changeColors(clickedColor)
            h1.style.backgroundColor = clickedColor
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
        // compare color to pickedColor
    })

})

function changeColors(color) {
    // Loop through all squares
    squares.forEach((square, index) => {
        square.style.backgroundColor = color;
    })
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}
function generateRandomColors(amount) {
    // Make array
    var arr = []
    // repeat amount time
    for (var i = 0; i < amount; i++) {
        // get random color and push into array
        arr.push(randomColor())
    }
    // return array
    return arr
}
function randomColor() {
    // pick a red from 0-255
    var r = Math.floor(Math.random() * 256)
    // pick a green from 0-255
    var g = Math.floor(Math.random() * 256)
    // pick a blue from 0-255
    var b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}
function reset(amount) {
    // generate all new colours
    colors = generateRandomColors(amount)
    // pick a new random color from array
    pickedColor = pickColor()
    // Change colour display to match picked color
    colorDisplay.textContent = pickedColor
    // change colour of squares
    squares.forEach((square, index) => {
        square.style.backgroundColor =  `${colors[index]}`
    })
    resetBtn.textContent = "New Colours"
    h1.style.backgroundColor = "steelblue"
    messageDisplay.textContent = ''
}