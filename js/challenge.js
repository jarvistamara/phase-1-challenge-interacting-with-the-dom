document.addEventListener("DOMContentLoaded", () => {
    
    let plus = document.getElementById("plus")
    let minus = document.getElementById("minus")
    let pause = document.getElementById("pause")
    let element = document.getElementById("element")
    let seconds = 0
    let submit = document.getElementById("submit")
    let commentForm = document.getElementById("comment-form")
    let list = document.getElementById("list")
    let commentInput = document.getElementById("comment-input")
    let likes = document.getElementsByClassName("likes")[0]
    let heart = document.getElementById("heart")
    
    let toggle = true
    let count = setInterval(increment, 1000);

// HEART //
    
    heart.addEventListener("click", function(e){
        e.preventDefault()
        newLi = document.createElement("li")
        newLi.innerHTML = `${seconds} has been liked`

        likes.appendChild(newLi)


    })
    
// PAUSE //

   pause.addEventListener("click", function() {
    if (pause.innerText == `pause`) {
        clearInterval(count)
    pause.innerText = `play`
    } else {
    pause.innerText = `pause`
    count = setInterval(increment, 1000)
    }
   })

    function increment() {
    
    seconds++ 
    element.innerText = seconds
    }
// PLUS
    plus.addEventListener("click", function() {
        seconds = seconds + 1
        element.innerText = seconds
    
    
    })
//MINUS
    minus.addEventListener("click", function(){

        seconds = seconds - 1
        element.innerText = seconds

    })
//SUBMIT
    submit.addEventListener("click", function(e){
        e.preventDefault()
        comment = commentInput.value
        newLi = document.createElement("li")
        newLi.innerText = `${comment}`
        list.appendChild(newLi)
    })


});



