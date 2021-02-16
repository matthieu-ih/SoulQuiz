let letsGoButton = document.querySelector("div #lets-go-box")

 let findQuizMateButton = document.querySelector("div #find-my-quiz-mates-box")

 // quiz evil

let evilIntro = document.getElementById("evil-intro")

let evilOutro = document.getElementById("evil-outro")

let evilQuestions = document.getElementById("evil-questions")

let evilQuestions2 = document.getElementById("evil-questions2")

let evilQuestions3 = document.getElementById("evil-questions3")

let evilQuestions4 = document.getElementById("evil-questions4")

let evilQuestions5 = document.getElementById("evil-questions5")

let evilQuestions6 = document.getElementById("evil-questions6")

let evilQuestions7 = document.getElementById("evil-questions7")

let evilQuestions8 = document.getElementById("evil-questions8")

let evilQuestions9 = document.getElementById("evil-questions9")

let evilQuestions10 = document.getElementById("evil-questions10")


letsGoButton.addEventListener("click", function(){
   if (evilQuestions.style.display === "none") {
       
       evilQuestions.style.display = "block";
       evilIntro.style.display = "none";

   }
})


// let pictureFrame = document.getElementsByClassName("pictures-frame");

// let picFrame0 = pictureFrame[0];
// let picFrame1 = pictureFrame[1];

let eframe1a = document.getElementsByClassName("eframe1a")
let eframe1b = document.getElementsByClassName("eframe1b")


let eframe2a = document.getElementsByClassName("eframe2a")
let eframe2b = document.getElementsByClassName("eframe2b")

let eframe3a = document.getElementsByClassName("eframe3a")
let eframe3b = document.getElementsByClassName("eframe3b")

let eframe4a = document.getElementsByClassName("eframe4a")
let eframe4b = document.getElementsByClassName("eframe4b")

let eframe5a = document.getElementsByClassName("eframe5a")
let eframe5b = document.getElementsByClassName("eframe5b")

let eframe6a = document.getElementsByClassName("eframe6a")
let eframe6b = document.getElementsByClassName("eframe6b")

let eframe7a = document.getElementsByClassName("eframe7a")
let eframe7b = document.getElementsByClassName("eframe7b")

let eframe8a = document.getElementsByClassName("eframe8a")
let eframe8b = document.getElementsByClassName("eframe8b")

let eframe9a = document.getElementsByClassName("eframe9a")
let eframe9b = document.getElementsByClassName("eframe9b")

let eframe10a = document.getElementsByClassName("eframe10a")
let eframe10b = document.getElementsByClassName("eframe10b")

//1

eframe1a[0].addEventListener("click", function(){
   if (evilQuestions.style.display === "block") {
       evilQuestions.style.display = "none";
       evilQuestions2.style.display = "block";   
   }
});

eframe1b[0].addEventListener("click", function(){
   if (evilQuestions.style.display === "block") {
       evilQuestions.style.display = "none";
       evilQuestions2.style.display = "block";   
   }
   
   });

//2

eframe2a[0].addEventListener("click", function(){
   if (evilQuestions2.style.display === "block") {
       evilQuestions2.style.display = "none";
       evilQuestions3.style.display = "block";   
   }
});

eframe2b[0].addEventListener("click", function(){
   if (evilQuestions2.style.display === "block") {
       evilQuestions2.style.display = "none";
       evilQuestions3.style.display = "block";   
   }
   
   });

//3

eframe3a[0].addEventListener("click", function(){
   if (evilQuestions3.style.display === "block") {
       evilQuestions3.style.display = "none";
       evilQuestions4.style.display = "block";   
   }
});

eframe3b[0].addEventListener("click", function(){
   if (evilQuestions3.style.display === "block") {
       evilQuestions3.style.display = "none";
       evilQuestions4.style.display = "block";   
   }
   
   });
//4
eframe4a[0].addEventListener("click", function(){
   if (evilQuestions4.style.display === "block") {
       evilQuestions4.style.display = "none";
       evilQuestions5.style.display = "block";   
   }
});

eframe4b[0].addEventListener("click", function(){
   if (evilQuestions4.style.display === "block") {
       evilQuestions4.style.display = "none";
       evilQuestions5.style.display = "block";   
   }
   
   });

//5
eframe5a[0].addEventListener("click", function(){
   if (evilQuestions5.style.display === "block") {
       evilQuestions5.style.display = "none";
       evilQuestions6.style.display = "block";   
   }
});

eframe5b[0].addEventListener("click", function(){
   if (evilQuestions5.style.display === "block") {
       evilQuestions5.style.display = "none";
       evilQuestions6.style.display = "block";   
   }
   
   });

//6
eframe6a[0].addEventListener("click", function(){
   if (evilQuestions6.style.display === "block") {
       evilQuestions6.style.display = "none";
       evilQuestions7.style.display = "block";   
   }
});

eframe6b[0].addEventListener("click", function(){
   if (evilQuestions6.style.display === "block") {
       evilQuestions6.style.display = "none";
       evilQuestions7.style.display = "block";   
   }
   
   });

//7
eframe7a[0].addEventListener("click", function(){
   if (evilQuestions7.style.display === "block") {
       evilQuestions7.style.display = "none";
       evilQuestions8.style.display = "block";   
   }
});

eframe7b[0].addEventListener("click", function(){
   if (evilQuestions7.style.display === "block") {
       evilQuestions7.style.display = "none";
       evilQuestions8.style.display = "block";   
   }
   
   });

//8

eframe8a[0].addEventListener("click", function(){
   if (evilQuestions8.style.display === "block") {
       evilQuestions8.style.display = "none";
       evilQuestions9.style.display = "block";   
   }
});

eframe8b[0].addEventListener("click", function(){
   if (evilQuestions8.style.display === "block") {
       evilQuestions8.style.display = "none";
       evilQuestions9.style.display = "block";   
   }
   
   });
//9
eframe9a[0].addEventListener("click", function(){
   if (evilQuestions9.style.display === "block") {
       evilQuestions9.style.display = "none";
       evilQuestions10.style.display = "block";   
   }
});

eframe9b[0].addEventListener("click", function(){
   if (evilQuestions9.style.display === "block") {
       evilQuestions9.style.display = "none";
       evilQuestions10.style.display = "block";   
   }
   
   });

//10

eframe10a[0].addEventListener("click", function(){
   if (evilQuestions10.style.display === "block") {
       evilQuestions10.style.display = "none";
       evilOutro.style.display = "flex";
         
   }
});

eframe10b[0].addEventListener("click", function(){
   if (evilQuestions10.style.display === "block") {
       evilQuestions10.style.display = "none";
       evilOutro.style.display = "flex";
         
   }
       
   });
