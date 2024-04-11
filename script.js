const boxes = document.querySelectorAll('.box')
const body = document.body

boxes.forEach( (box) => {
    box.addEventListener('click', (elem) => {
        /* OR :
        const color = elem.target.id
        body.style.backgroundColor = color
        */
       
        body.style.backgroundColor = elem.target.id
    })
})