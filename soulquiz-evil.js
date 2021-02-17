
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
        this.evilQuizResult = [];
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
   if (evilQuestions1.style.display === "block") {
       evilQuestions1.style.display = "none";
       evilQuestions2.style.display = "block";   
   }

    //user1.quizEvilResult.push("a")

    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("a")
    console.log(user1)
    }

    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("a")
    console.log(user2)
    } else

    if ((localStorage.user3Name === undefined) && (user3 !== "")){
        user3.evilQuizResult.push("a")
        console.log(user3)
        }

        if ((localStorage.user4Name === undefined) && (user4 !== "")){
            user4.evilQuizResult.push("a")
            console.log(user4)
            }

            if ((localStorage.user5Name === undefined) && (user5 !== "")){
                user5.evilQuizResult.push("a")
                console.log(user5)
                }

                if ((localStorage.user6Name === undefined) && (user6 !== "")){
                    user6.evilQuizResult.push("a")
                    console.log(user6)
                    }

                    if ((localStorage.user7Name === undefined) && (user7 !== "")){
                        user7.evilQuizResult.push("a")
                        console.log(user7)
                        }

                        if ((localStorage.user8Name === undefined) && (user8 !== "")){
                            user8.evilQuizResult.push("a")
                            console.log(user8)
                            }

                            if ((localStorage.user9Name === undefined) && (user9 !== "")){
                                user9.evilQuizResult.push("a")
                                console.log(user9)
                                }

                                if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                    user10.evilQuizResult.push("a")
                                    console.log(user10)
                                    }

});

eframe1b[0].addEventListener("click", function(){
   if (evilQuestions1.style.display === "block") {
       evilQuestions1.style.display = "none";
       evilQuestions2.style.display = "block";   
   }
   
   //user1.quizEvilResult.push("b")
   if (localStorage.user1Name === undefined){
   user1.evilQuizResult.push("b")
   console.log(user1)
    }

   if ((localStorage.user2Name === undefined) && (user2 !== "")){
   user2.evilQuizResult.push("b")
   console.log(user2)
    } else

    if ((localStorage.user3Name === undefined) && (user3 !== "")){
        user3.evilQuizResult.push("b")
        console.log(user3)
        }

        if ((localStorage.user4Name === undefined) && (user4 !== "")){
            user4.evilQuizResult.push("b")
            console.log(user4)
            }

            if ((localStorage.user5Name === undefined) && (user5 !== "")){
                user5.evilQuizResult.push("b")
                console.log(user5)
                }

                if ((localStorage.user6Name === undefined) && (user6 !== "")){
                    user6.evilQuizResult.push("b")
                    console.log(user6)
                    }

                    if ((localStorage.user7Name === undefined) && (user7 !== "")){
                        user7.evilQuizResult.push("b")
                        console.log(user7)
                        }

                        if ((localStorage.user8Name === undefined) && (user8 !== "")){
                            user8.evilQuizResult.push("b")
                            console.log(user8)
                            }

                            if ((localStorage.user9Name === undefined) && (user9 !== "")){
                                user9.evilQuizResult.push("b")
                                console.log(user9)
                                }

                                if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                    user10.evilQuizResult.push("b")
                                    console.log(user10)
                                    }

   });


//2

eframe2a[0].addEventListener("click", function(){
   if (evilQuestions2.style.display === "block") {
       evilQuestions2.style.display = "none";
       evilQuestions3.style.display = "block";   
   }

    //user1.quizEvilResult.push("a")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("a")
    }

    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("a")
}

if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("a")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("a")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("a")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("a")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("a")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("a")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("a")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("a")
                                console.log(user10)
                                }

});

eframe2b[0].addEventListener("click", function(){
   if (evilQuestions2.style.display === "block") {
       evilQuestions2.style.display = "none";
       evilQuestions3.style.display = "block";   
   }

    //user1.quizEvilResult.push("b")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("b")
    }
    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("b")
}
if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("b")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("b")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("b")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("b")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("b")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("b")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("b")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("b")
                                console.log(user10)
                                }
   });

//3

eframe3a[0].addEventListener("click", function(){
   if (evilQuestions3.style.display === "block") {
       evilQuestions3.style.display = "none";
       evilQuestions4.style.display = "block";   
   }

    //user1.quizEvilResult.push("a")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("a")
    }
    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("a")
}

if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("a")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("a")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("a")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("a")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("a")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("a")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("a")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("a")
                                console.log(user10)
                                }

});

eframe3b[0].addEventListener("click", function(){
   if (evilQuestions3.style.display === "block") {
       evilQuestions3.style.display = "none";
       evilQuestions4.style.display = "block";   
   }
   
    //user1.quizEvilResult.push("b")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("b")
    }
    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("b")
}
if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("b")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("b")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("b")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("b")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("b")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("b")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("b")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("b")
                                console.log(user10)
                                }
   });
//4
eframe4a[0].addEventListener("click", function(){
   if (evilQuestions4.style.display === "block") {
       evilQuestions4.style.display = "none";
       evilQuestions5.style.display = "block";   
   }

    //user1.quizEvilResult.push("a")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("a")
    }
    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("a")
}

if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("a")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("a")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("a")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("a")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("a")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("a")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("a")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("a")
                                console.log(user10)
                                }

});

eframe4b[0].addEventListener("click", function(){
   if (evilQuestions4.style.display === "block") {
       evilQuestions4.style.display = "none";
       evilQuestions5.style.display = "block";   
   }
   
    //user1.quizEvilResult.push("b")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("b")
    }
    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("b")
}
if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("b")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("b")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("b")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("b")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("b")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("b")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("b")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("b")
                                console.log(user10)
                                }
   });

//5
eframe5a[0].addEventListener("click", function(){
   if (evilQuestions5.style.display === "block") {
       evilQuestions5.style.display = "none";
       evilQuestions6.style.display = "block";   
   }

    //user1.quizEvilResult.push("a")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("a")
    }

    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("a")
}

if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("a")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("a")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("a")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("a")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("a")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("a")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("a")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("a")
                                console.log(user10)
                                }

});

eframe5b[0].addEventListener("click", function(){
   if (evilQuestions5.style.display === "block") {
       evilQuestions5.style.display = "none";
       evilQuestions6.style.display = "block";   
   }

    //user1.quizEvilResult.push("b")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("b")
    }

    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("b")
}

if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("b")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("b")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("b")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("b")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("b")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("b")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("b")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("b")
                                console.log(user10)
                                }
   });

//6
eframe6a[0].addEventListener("click", function(){
   if (evilQuestions6.style.display === "block") {
       evilQuestions6.style.display = "none";
       evilQuestions7.style.display = "block";   
   }

    //user1.quizEvilResult.push("a")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("a")
    }

    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("a")
}

if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("a")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("a")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("a")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("a")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("a")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("a")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("a")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("a")
                                console.log(user10)
                                }

});

eframe6b[0].addEventListener("click", function(){
   if (evilQuestions6.style.display === "block") {
       evilQuestions6.style.display = "none";
       evilQuestions7.style.display = "block";   
   }
   
    //user1.quizEvilResult.push("b")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("b")
    }

    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("b")
}

if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("b")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("b")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("b")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("b")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("b")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("b")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("b")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("b")
                                console.log(user10)
                                }
   });

//7
eframe7a[0].addEventListener("click", function(){
   if (evilQuestions7.style.display === "block") {
       evilQuestions7.style.display = "none";
       evilQuestions8.style.display = "block";   
   }

    //user1.quizEvilResult.push("a")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("a")
    }

    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("a")
}

if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("a")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("a")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("a")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("a")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("a")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("a")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("a")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("a")
                                console.log(user10)
                                }

});

eframe7b[0].addEventListener("click", function(){
   if (evilQuestions7.style.display === "block") {
       evilQuestions7.style.display = "none";
       evilQuestions8.style.display = "block";   
   }
   
    //user1.quizEvilResult.push("b")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("b")
    }

    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("b")
}
if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("b")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("b")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("b")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("b")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("b")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("b")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("b")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("b")
                                console.log(user10)
                                }
   });

//8

eframe8a[0].addEventListener("click", function(){
   if (evilQuestions8.style.display === "block") {
       evilQuestions8.style.display = "none";
       evilQuestions9.style.display = "block";   
   }

    //user1.quizEvilResult.push("a")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("a")
    }

    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("a")
}

if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("a")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("a")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("a")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("a")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("a")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("a")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("a")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("a")
                                console.log(user10)
                                }
});

eframe8b[0].addEventListener("click", function(){
   if (evilQuestions8.style.display === "block") {
       evilQuestions8.style.display = "none";
       evilQuestions9.style.display = "block";   
   }

    //user1.quizEvilResult.push("b")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("b")
    }

    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("b")
}

if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("b")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("b")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("b")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("b")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("b")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("b")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("b")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("b")
                                console.log(user10)
                                }
   });
//9
eframe9a[0].addEventListener("click", function(){
   if (evilQuestions9.style.display === "block") {
       evilQuestions9.style.display = "none";
       evilQuestions10.style.display = "block";   
   }

    //user1.quizEvilResult.push("a")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("a")
    }

    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("a")
}

if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("a")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("a")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("a")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("a")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("a")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("a")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("a")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("a")
                                console.log(user10)
                                }

});

eframe9b[0].addEventListener("click", function(){
   if (evilQuestions9.style.display === "block") {
       evilQuestions9.style.display = "none";
       evilQuestions10.style.display = "block";   
   }
   
    //user1.quizEvilResult.push("b")
    if (localStorage.user1Name === undefined){
    user1.evilQuizResult.push("b")
    }

    if ((localStorage.user2Name === undefined) && (user2 !== "")){
    user2.evilQuizResult.push("b")
}

if ((localStorage.user3Name === undefined) && (user3 !== "")){
    user3.evilQuizResult.push("b")
    console.log(user3)
    }

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
        user4.evilQuizResult.push("b")
        console.log(user4)
        }

        if ((localStorage.user5Name === undefined) && (user5 !== "")){
            user5.evilQuizResult.push("b")
            console.log(user5)
            }

            if ((localStorage.user6Name === undefined) && (user6 !== "")){
                user6.evilQuizResult.push("b")
                console.log(user6)
                }

                if ((localStorage.user7Name === undefined) && (user7 !== "")){
                    user7.evilQuizResult.push("b")
                    console.log(user7)
                    }

                    if ((localStorage.user8Name === undefined) && (user8 !== "")){
                        user8.evilQuizResult.push("b")
                        console.log(user8)
                        }

                        if ((localStorage.user9Name === undefined) && (user9 !== "")){
                            user9.evilQuizResult.push("b")
                            console.log(user9)
                            }

                            if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                user10.evilQuizResult.push("b")
                                console.log(user10)
                                }
   });

//10

eframe10a[0].addEventListener("click", function(){
   if (evilQuestions10.style.display === "block") {
       evilQuestions10.style.display = "none";
       evilOutro.style.display = "flex";

       if (localStorage.user1Name === undefined){
       user1.evilQuizResult.push("a")
       console.log(user1)
       }

       if ((localStorage.user2Name === undefined) && (user2 !== "")){
       user2.evilQuizResult.push("a")
       console.log(user2)
    }

    if ((localStorage.user3Name === undefined) && (user3 !== "")){
        user3.evilQuizResult.push("a")
        console.log(user3)
        }

        if ((localStorage.user4Name === undefined) && (user4 !== "")){
            user4.evilQuizResult.push("a")
            console.log(user4)
            }

            if ((localStorage.user5Name === undefined) && (user5 !== "")){
                user5.evilQuizResult.push("a")
                console.log(user5)
                }

                if ((localStorage.user6Name === undefined) && (user6 !== "")){
                    user6.evilQuizResult.push("a")
                    console.log(user6)
                    }

                    if ((localStorage.user7Name === undefined) && (user7 !== "")){
                        user7.evilQuizResult.push("a")
                        console.log(user7)
                        }

                        if ((localStorage.user8Name === undefined) && (user8 !== "")){
                            user8.evilQuizResult.push("a")
                            console.log(user8)
                            }

                            if ((localStorage.user9Name === undefined) && (user9 !== "")){
                                user9.evilQuizResult.push("a")
                                console.log(user9)
                                }

                                if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                    user10.evilQuizResult.push("a")
                                    console.log(user10)
                                    }

       //localStorage.setItem("user1-EvilQuiz", JSON.stringify(user1.quizEvilResult))
       //localStorage.setItem("user1-username", JSON.stringify(user1.username))

       if (localStorage.user1Name === undefined){
       localStorage.setItem("user1Name", JSON.stringify(user1.userName))
       localStorage.setItem("user1QuizName", JSON.stringify(user1.quizName))
       localStorage.setItem("user1evilQuizResult", JSON.stringify(user1.evilQuizResult))
    } else

    if ((localStorage.user2Name === undefined) && (user2 !== "")){
       localStorage.setItem("user2Name", JSON.stringify(user2.userName))
       localStorage.setItem("user2QuizName", JSON.stringify(user2.quizName))
       localStorage.setItem("user2evilQuizResult", JSON.stringify(user2.evilQuizResult))    

    } else

    if ((localStorage.user3Name === undefined) && (user3 !== "")){
       localStorage.setItem("user3Name", JSON.stringify(user3.userName))
       localStorage.setItem("user3QuizName", JSON.stringify(user3.quizName))
       localStorage.setItem("user3evilQuizResult", JSON.stringify(user3.evilQuizResult))    

    } else

    if ((localStorage.user4Name === undefined) && (user4 !== "")){
       localStorage.setItem("user4Name", JSON.stringify(user4.userName))
       localStorage.setItem("user4QuizName", JSON.stringify(user4.quizName))
       localStorage.setItem("user4evilQuizResult", JSON.stringify(user4.evilQuizResult))    

    } else

    if ((localStorage.user5Name === undefined) && (user5 !== "")){
       localStorage.setItem("user5Name", JSON.stringify(user5.userName))
       localStorage.setItem("user5QuizName", JSON.stringify(user5.quizName))
       localStorage.setItem("user5evilQuizResult", JSON.stringify(user5.evilQuizResult))    

    } else

    if ((localStorage.user6Name === undefined) && (user6 !== "")){
       localStorage.setItem("user6Name", JSON.stringify(user6.userName))
       localStorage.setItem("user6QuizName", JSON.stringify(user6.quizName))
       localStorage.setItem("user6evilQuizResult", JSON.stringify(user6.evilQuizResult))    

    } else

    if ((localStorage.user7Name === undefined) && (user7 !== "")){
       localStorage.setItem("user7Name", JSON.stringify(user7.userName))
       localStorage.setItem("user7QuizName", JSON.stringify(user7.quizName))
       localStorage.setItem("user7evilQuizResult", JSON.stringify(user7.evilQuizResult))    

    } else

    if ((localStorage.user8Name === undefined) && (user8 !== "")){
       localStorage.setItem("user8Name", JSON.stringify(user8.userName))
       localStorage.setItem("user8QuizName", JSON.stringify(user8.quizName))
       localStorage.setItem("user8evilQuizResult", JSON.stringify(user8.evilQuizResult))    

    } else

    if ((localStorage.user9Name === undefined) && (user9 !== "")){
       localStorage.setItem("user9Name", JSON.stringify(user9.userName))
       localStorage.setItem("user9QuizName", JSON.stringify(user9.quizName))
       localStorage.setItem("user9evilQuizResult", JSON.stringify(user9.evilQuizResult))    

    } else

    if ((localStorage.user10Name === undefined) && (user10 !== "")){
       localStorage.setItem("user10Name", JSON.stringify(user10.userName))
       localStorage.setItem("user10QuizName", JSON.stringify(user10.quizName))
       localStorage.setItem("user10evilQuizResult", JSON.stringify(user10.evilQuizResult))    

    }


   }

    //user1.quizEvilResult.push("a")
    //user1.evilQuizResult.push("a")

});

eframe10b[0].addEventListener("click", function(){
   if (evilQuestions10.style.display === "block") {
       evilQuestions10.style.display = "none";
       evilOutro.style.display = "flex";
    
       if (localStorage.user1Name === undefined){
       user1.evilQuizResult.push("b")
       console.log(user1)
       }

       if ((localStorage.user2Name === undefined) && (user2 !== "")){
       user2.evilQuizResult.push("b")
       console.log(user2)

    }

    if ((localStorage.user3Name === undefined) && (user3 !== "")){
        user3.evilQuizResult.push("b")
        console.log(user3)
        }

        if ((localStorage.user4Name === undefined) && (user4 !== "")){
            user4.evilQuizResult.push("b")
            console.log(user4)
            }

            if ((localStorage.user5Name === undefined) && (user5 !== "")){
                user5.evilQuizResult.push("b")
                console.log(user5)
                }

                if ((localStorage.user6Name === undefined) && (user6 !== "")){
                    user6.evilQuizResult.push("b")
                    console.log(user6)
                    }

                    if ((localStorage.user7Name === undefined) && (user7 !== "")){
                        user7.evilQuizResult.push("b")
                        console.log(user7)
                        }

                        if ((localStorage.user8Name === undefined) && (user8 !== "")){
                            user8.evilQuizResult.push("b")
                            console.log(user8)
                            }

                            if ((localStorage.user9Name === undefined) && (user9 !== "")){
                                user9.evilQuizResult.push("b")
                                console.log(user9)
                                }

                                if ((localStorage.user10Name === undefined) && (user10 !== "")){
                                    user10.evilQuizResult.push("b")
                                    console.log(user10)
                                    }

    //localStorage.setItem("user1-EvilQuiz", JSON.stringify(user1.quizEvilResult))
    //localStorage.setItem("user1-username", JSON.stringify(user1.username))

    if (localStorage.user1Name === undefined){
    localStorage.setItem("user1Name", JSON.stringify(user1.userName))
    localStorage.setItem("user1QuizName", JSON.stringify(user1.quizName))
    localStorage.setItem("user1evilQuizResult", JSON.stringify(user1.evilQuizResult))
    } else

     if ((localStorage.user2Name === undefined) && (user2 !== "")){
        localStorage.setItem("user2Name", JSON.stringify(user2.userName))
        localStorage.setItem("user2QuizName", JSON.stringify(user2.quizName))
        localStorage.setItem("user2evilQuizResult", JSON.stringify(user2.evilQuizResult))    

     } else

     if ((localStorage.user3Name === undefined) && (user3 !== "")){
        localStorage.setItem("user3Name", JSON.stringify(user3.userName))
        localStorage.setItem("user3QuizName", JSON.stringify(user3.quizName))
        localStorage.setItem("user3evilQuizResult", JSON.stringify(user3.evilQuizResult))    
 
     } else
 
     if ((localStorage.user4Name === undefined) && (user4 !== "")){
        localStorage.setItem("user4Name", JSON.stringify(user4.userName))
        localStorage.setItem("user4QuizName", JSON.stringify(user4.quizName))
        localStorage.setItem("user4evilQuizResult", JSON.stringify(user4.evilQuizResult))    
 
     } else
 
     if ((localStorage.user5Name === undefined) && (user5 !== "")){
        localStorage.setItem("user5Name", JSON.stringify(user5.userName))
        localStorage.setItem("user5QuizName", JSON.stringify(user5.quizName))
        localStorage.setItem("user5evilQuizResult", JSON.stringify(user5.evilQuizResult))    
 
     } else
 
     if ((localStorage.user6Name === undefined) && (user6 !== "")){
        localStorage.setItem("user6Name", JSON.stringify(user6.userName))
        localStorage.setItem("user6QuizName", JSON.stringify(user6.quizName))
        localStorage.setItem("user6evilQuizResult", JSON.stringify(user6.evilQuizResult))    
 
     } else
 
     if ((localStorage.user7Name === undefined) && (user7 !== "")){
        localStorage.setItem("user7Name", JSON.stringify(user7.userName))
        localStorage.setItem("user7QuizName", JSON.stringify(user7.quizName))
        localStorage.setItem("user7evilQuizResult", JSON.stringify(user7.evilQuizResult))    
 
     } else
 
     if ((localStorage.user8Name === undefined) && (user8 !== "")){
        localStorage.setItem("user8Name", JSON.stringify(user8.userName))
        localStorage.setItem("user8QuizName", JSON.stringify(user8.quizName))
        localStorage.setItem("user8evilQuizResult", JSON.stringify(user8.evilQuizResult))    
 
     } else
 
     if ((localStorage.user9Name === undefined) && (user9 !== "")){
        localStorage.setItem("user9Name", JSON.stringify(user9.userName))
        localStorage.setItem("user9QuizName", JSON.stringify(user9.quizName))
        localStorage.setItem("user9evilQuizResult", JSON.stringify(user9.evilQuizResult))    
 
     } else
 
     if ((localStorage.user10Name === undefined) && (user10 !== "")){
        localStorage.setItem("user10Name", JSON.stringify(user10.userName))
        localStorage.setItem("user10QuizName", JSON.stringify(user10.quizName))
        localStorage.setItem("user10evilQuizResult", JSON.stringify(user10.evilQuizResult)) 

    
   }

    }

   });

   console.log(localStorage)



///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
////////// USER SCORES ////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////


function compare(userA, userB, userAUserB){
    for (let i = 0; i < userA.quiz1.length; i++){
      if ((userA.quiz1[i] === userB.quiz1[i]) && userA.quiz1[i] !== ""){
        userAUserB.quiz1[i] = 1;
      } else {
        userAUserB.quiz1[i] = 0;
      }
    }

    userAUserB.quiz1Score = userAUserB.quiz1.reduce(function(a, c){  
        return a + c ;
   
    });

}


