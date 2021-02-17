let user1 = { 
    quiz1 : ["a", "b", "b", "a", "b", "b", "a", "a", "a", "b" ] ,
    quiz2 : ["b", "b", "a", "a", "a", "b", "b", "a", "b", "b" ]
}

console.log(user1.quiz1[0]);

let user2 = { 
    quiz1 : ["a", "a", "b", "a", "b", "a", "a", "a", "b", "b" ] ,
    quiz2 : ["b", "b", "a", "a", "a", "b", "b", "a", "b", "b" ]
}

let user1User2 = {
    quiz1 : [],
    quiz2: [],
    quiz1Score : 0,
    quiz2Score : 0,
    overallScore : 0,
}

console.log(user1User2)

function compare(userA, userB, userAUserB){
for (let i = 0; i < userA.quiz1.length; i++){
  if ((userA.quiz1[i] === userB.quiz1[i]) && userA.quiz1[i] !== ""){
    userAUserB.quiz1[i] = 1;
  } else {
    userAUserB.quiz1[i] = 0;
  }
}

for (let i = 0; i < userA.quiz2.length; i++){
    if ((userA.quiz2[i] === userB.quiz2[i]) && userA.quiz2[i] !== ""){
      userAUserB.quiz2[i] = 1;
    } else {
      userAUserB.quiz2[i] = 0;
    }
  }

userAUserB.quiz1Score = userAUserB.quiz1.reduce(function(a, c){  
     return a + c ;

 });

userAUserB.quiz2Score = userAUserB.quiz2.reduce(function(a, c){  
    return a + c ;

});


user1User2.overallScore = user1User2.quiz1Score + user1User2.quiz2Score

}

compare (user1, user2, user1User2);
console.log(user1User2)

   
//////



let letsGoButton = document.querySelector("div #lets-go-box")

 let findQuizMateButton = document.querySelector("div #find-my-quiz-mates-box")

 // quiz evil

let evilIntro = document.getElementById("evil-intro")

let evilOutro = document.getElementById("evil-outro")

let evilQuestions1 = document.getElementById("evil-questions1")

let evilQuestions2 = document.getElementById("evil-questions2")

let evilQuestions3 = document.getElementById("evil-questions3")

let evilQuestions4 = document.getElementById("evil-questions4")

let evilQuestions5 = document.getElementById("evil-questions5")

let evilQuestions6 = document.getElementById("evil-questions6")

let evilQuestions7 = document.getElementById("evil-questions7")

let evilQuestions8 = document.getElementById("evil-questions8")

let evilQuestions9 = document.getElementById("evil-questions9")

let evilQuestions10 = document.getElementById("evil-questions10")


let inputName = document.querySelector("#nameInput");

// let user1 = {
//     username : "",
//     quizEvilResult : []
// }

// class user

class User {
    constructor(userName, quizName){
        this.userName = userName;
        this.quizName = quizName;
        this.quizNameResult = [];
    }
}

let user1 = "";
let user2 = "";
let user3 = "";
let user4 = "";
let user5 = "";
let user6 = "";
let user7 = "";
let user8 = "";
let user9 = "";
let user10 = "";


letsGoButton.addEventListener("click", function(){
   if (inputName.value === ""){
       alert("Please enter your name");
   } else
   
    if (evilQuestions1.style.display === "none") {
       evilQuestions1.style.display = "block";
       evilIntro.style.display = "none";

    // if (localStorage.user1Name === undefined){
    //     user1 = new User (inputName.value, 'EvilQuiz');
    // } else 
    //     if (localStorage.user1Name !== undefined){
    //     user2 = new User (inputName.value, 'EvilQuiz');
    //     } 


       //console.log(inputName.value.replace(/ /g, ''));

   }

   if (localStorage.user1Name === undefined){
    user1 = new User (inputName.value, 'EvilQuiz');
    } //else 
    if (localStorage.user1Name !== undefined){
    user2 = new User (inputName.value, 'EvilQuiz');
    } //else 
    if ((localStorage.user1Name && localStorage.user2Name) !== undefined){
    user3 = new User (inputName.value, 'EvilQuiz');
    } //else 
    if ((localStorage.user1Name && localStorage.user2Name && localStorage.user3Name) !== undefined){
    user4 = new User (inputName.value, 'EvilQuiz');
    } //else 
    if ((localStorage.user1Name && localStorage.user2Name && localStorage.user3Name  && localStorage.user4Name) !== undefined){
    user5 = new User (inputName.value, 'EvilQuiz');
    } //else 
    if ((localStorage.user1Name && localStorage.user2Name && localStorage.user3Name  && localStorage.user4Name && localStorage.user5Name) !== undefined){
    user6 = new User (inputName.value, 'EvilQuiz');
    } //else 
    if ((localStorage.user1Name && localStorage.user2Name && localStorage.user3Name  && localStorage.user4Name && localStorage.user5Name && localStorage.user6Name) !== undefined){
    user7 = new User (inputName.value, 'EvilQuiz');
    } //else 
    if ((localStorage.user1Name && localStorage.user2Name && localStorage.user3Name  && localStorage.user4Name && localStorage.user5Name && localStorage.user6Name && localStorage.user7Name) !== undefined){
    user8 = new User (inputName.value, 'EvilQuiz');
    } //else 
    if ((localStorage.user1Name && localStorage.user2Name && localStorage.user3Name  && localStorage.user4Name && localStorage.user5Name && localStorage.user6Name && localStorage.user7Name && localStorage.user8Name) !== undefined){
    user9 = new User (inputName.value, 'EvilQuiz');
    } //else 
    if ((localStorage.user1Name && localStorage.user2Name && localStorage.user3Name  && localStorage.user4Name && localStorage.user5Name && localStorage.user6Name && localStorage.user7Name && localStorage.user8Name && localStorage.user9Name) !== undefined){
    user10 = new User (inputName.value, 'EvilQuiz');
    } 
   
})

//console.log(user1);
//console.log(user2);

