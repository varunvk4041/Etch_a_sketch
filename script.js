let inputbtn = document.createElement('button')
let grid = document.querySelector('.grid-container')
let container = document.querySelector('.container')
let h1 = document.querySelector('h1')

inputbtn.textContent = 'Size: 10'
inputbtn.classList.add('btn')
makeGrid(10)
inputbtn.addEventListener('click', () => {
    grid.innerHTML = ''
    let n = prompt('Enter grid size(max=100)')
    if (n > 100)
        n = 100
        inputbtn.textContent = 'Size: '+n
    makeGrid(n)
})

container.insertBefore(inputbtn,grid)
// Making an nxn grid 
function makeGrid(n) {

    for (let i = 0; i < n; i++) {
        let row = document.createElement('div')
        row.classList.add('rows')
        for (let j = 0; j < n; j++) {
            let cols = document.createElement('div')
            cols.classList.add('cols')
            row.appendChild(cols)
        }
        grid.appendChild(row)
    }
    //Selecting all the pixels and storing in an array
    let pixels = document.querySelectorAll('.cols')
    // For all pixels, adding an event listener
    pixels.forEach(p =>
        p.addEventListener('mouseover', function (e) {
            let pixel = e.target
            // pixel.classList.add('black')
            let r,g,b
            r = Math.floor((Math.random()*255))+1
            g = Math.floor((Math.random()*255))+1
            b = Math.floor((Math.random()*255))+1
            let color = `rgb(${r},${g},${b})`
            pixel.style.backgroundColor = color
        }
        ))
}