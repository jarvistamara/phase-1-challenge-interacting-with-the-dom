document.addEventListener('DOMContentLoaded', () => {

    let element = document.getElementById('counter')
    let plus = document.getElementById('plus')
    let minus = document.getElementById('minus')
    let heart = document.getElementById('heart')
    let pause = document.getElementById('pause')
    let likes = document.getElementById('likes')
    let submit = document.getElementById("submit")
    let commentForm = document.getElementById("comment-form")
    let list = document.getElementById("list")
    let commentInput = document.getElementById("comment-input")
    plus.addEventListener('click', incrementSeconds);
    minus.addEventListener('click', decrementSeconds);
    submit.addEventListener("submit", handleSubmit)
    pause.addEventListener("click", handlePause)
    heart.addEventListener("click", handleHeart)
})

let interval = setInterval(incrementSeconds, 1000)

function incrementSeconds() {
    let time = element.innerText
    time = parseInt(time)+1
    element.innerText = time
    }

function decrementSeconds() {
    let time = element.innerText
    time = parseInt(time)-1
    element.innerText = time
    }

function handlePause() {
    if (pause.innerText == `pause`) {
        clearInterval(interval)
        pause.innerText = `play`
    } else {
        pause.innerText = `pause`
        setInterval(incrementSeconds, 1000)
    }
   }

function handleHeart(e){
    e.preventDefault()
    newLi = document.createElement("li")
    newLi.dataset.count = 1
    newLi.dataset.time = element.innerText
    let likes = document.querySelector('.likes')
    newLi.innerHTML = `${newLi.dataset.time} has been liked ${newLi.dataset.count} times`
    likes.appendChild(newLi)

}
function handleSubmit(e) {
    e.preventDefault()
    comment = commentInput.value
    newLi = document.createElement("li")
    newLi.innerText = `${comment}`
    list.appendChild(newLi)
    console.log('submit')
}
