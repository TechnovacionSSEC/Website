this.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".question")
    questions.forEach((question) => question.addEventListener("click", () =>{
  
        if(question.parentNode.classList.contains("active1")){
            question.parentNode.classList.toggle("active1")
        }
    else{
    questions.forEach(question => question.parentNode.classList.remove("active1"))
    question.parentNode.classList.add("active1")
        }

    }))
}) 