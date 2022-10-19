console.log("hi!");
function check(){
    let input = document.getElementById("input").value;
    let answer = document.getElementById("answer");

    if(input%4==0 && input%100!=0 || input%400==0){
        answer.innerHTML = "Leap Year";
    }
    else{
        answer.innerHTML = "Not Leap Year";
    }
    document.getElementById("input").value = "";

}