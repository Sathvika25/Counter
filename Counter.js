const content = document.getElementById("content")
        const decreaseBtn = document.getElementById("decrease-btn")
        const resetBtn = document.getElementById("reset-btn")
        const increaseBtn =  document.getElementById("increase-btn")
        decreaseBtn.addEventListener("click",function(){
            let contentVal = content.textContent
            content.textContent = contentVal-1
            content.style.color = "red"
        })
        resetBtn.addEventListener("click",function(){
            content.textContent = 0
            content.style.color = "black"
        })
        increaseBtn.addEventListener("click",function(){
            let contentVal = content.textContent
            content.textContent = Number(contentVal)+1
            content.style.color = "green"
        })