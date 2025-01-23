/* 
let Correct = "correct"

function Check(e) {
    e.preventDefault();
    let answer = document.getElementsByName("FirstQuestion");

    for (let i = 0; i < answer.length; i++) {
       if (answer[i].checked) {
        if (answer[i].value == Correct) {
            alert("Correct")
        } else {
            alert("Wrong")
        }
       }
    }
}
