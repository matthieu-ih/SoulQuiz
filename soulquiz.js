
// //const test = document.getElementById("subtitle-box");

 let letsGoButton = document.querySelector("div #lets-go-box")

 console.log(letsGoButton)

 let cityIntro = document.getElementById("city-intro")

 console.log(cityIntro)

 let cityQuestions = document.getElementById("city-questions")

 let cityQuestions2 = document.getElementById("city-questions2")

 console.log(cityQuestions)

 console.log(document.getElementById("city-questions").style)

 letsGoButton.addEventListener("click", function(){
    if (cityQuestions.style.display === "none") {
        console.log("REALLY");
        cityQuestions.style.display = "block";
        cityIntro.style.display = "none";

    }
 })


let pictureFrame = document.getElementsByClassName("pictures-frame");

let picFrame0 = pictureFrame[0];
let picFrame1 = pictureFrame[1];

picFrame0.addEventListener("click", function(){
    if (cityQuestions.style.display === "block") {
        cityQuestions.style.display = "none";
        cityQuestions2.style.display = "block";   
    }
});

picFrame1.addEventListener("click", function(){
    if (cityQuestions.style.display === "block") {
        cityQuestions.style.display = "none";
        cityQuestions2.style.display = "block";   
    }
    
    });

// let quizWindow = document.querySelector("div #quiz-window");

// console.log(quizWindow)


// letsGoButton.addEventListener("click", function() {

//     quizWindow.innerHTML = `
//     <div class="quiz-question-or"> 
//     <p class="city-question" >PARIS 
//         OR MARSEILLE</p>
//     </div>
//     <div class="picture-box">
//     <div class="pictures-frame">
//     <img class="picture" src="/images/ca1.jpg" alt="Paris">
//     </div>
//     <div class="pictures-frame">
//     <img class="picture" src="/images/cb1.jpg" alt="Marseille ">
//     </div>
//     </div>
//     `;

//   });





 