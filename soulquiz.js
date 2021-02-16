
// //const test = document.getElementById("subtitle-box");

 let letsGoButton = document.querySelector("div #lets-go-box")

 let findQuizMateButton = document.querySelector("div #find-my-quiz-mates-box")

 let cityIntro = document.getElementById("city-intro")

 let cityOutro = document.getElementById("city-outro")

 let cityQuestions = document.getElementById("city-questions")

 let cityQuestions2 = document.getElementById("city-questions2")

 let cityQuestions3 = document.getElementById("city-questions3")

 let cityQuestions4 = document.getElementById("city-questions4")

 let cityQuestions5 = document.getElementById("city-questions5")

 let cityQuestions6 = document.getElementById("city-questions6")

 let cityQuestions7 = document.getElementById("city-questions7")

 let cityQuestions8 = document.getElementById("city-questions8")

 let cityQuestions9 = document.getElementById("city-questions9")

 let cityQuestions10 = document.getElementById("city-questions10")

 let inputName = document.querySelector("#nameInput");

 let user1 = {
     username : "",
     quizCityResult : []
 }

 letsGoButton.addEventListener("click", function(){
    if (inputName.value === ""){
        alert("Please enter your name");
    } else
    
    if (cityQuestions.style.display === "none") {
        
        cityQuestions.style.display = "block";
        cityIntro.style.display = "none";

        user1.username = inputName.value;

    }
 })

 console.log(user1);

// let pictureFrame = document.getElementsByClassName("pictures-frame");

// let picFrame0 = pictureFrame[0];
// let picFrame1 = pictureFrame[1];

let cframe1a = document.getElementsByClassName("cframe1a")
let cframe1b = document.getElementsByClassName("cframe1b")


let cframe2a = document.getElementsByClassName("cframe2a")
let cframe2b = document.getElementsByClassName("cframe2b")

let cframe3a = document.getElementsByClassName("cframe3a")
let cframe3b = document.getElementsByClassName("cframe3b")

let cframe4a = document.getElementsByClassName("cframe4a")
let cframe4b = document.getElementsByClassName("cframe4b")

let cframe5a = document.getElementsByClassName("cframe5a")
let cframe5b = document.getElementsByClassName("cframe5b")

let cframe6a = document.getElementsByClassName("cframe6a")
let cframe6b = document.getElementsByClassName("cframe6b")

let cframe7a = document.getElementsByClassName("cframe7a")
let cframe7b = document.getElementsByClassName("cframe7b")

let cframe8a = document.getElementsByClassName("cframe8a")
let cframe8b = document.getElementsByClassName("cframe8b")

let cframe9a = document.getElementsByClassName("cframe9a")
let cframe9b = document.getElementsByClassName("cframe9b")

let cframe10a = document.getElementsByClassName("cframe10a")
let cframe10b = document.getElementsByClassName("cframe10b")


//1

cframe1a[0].addEventListener("click", function(){
    if (cityQuestions.style.display === "block") {
        cityQuestions.style.display = "none";
        cityQuestions2.style.display = "block";   
    }
user1.quizCityResult.push("a");
});

cframe1b[0].addEventListener("click", function(){
    if (cityQuestions.style.display === "block") {
        cityQuestions.style.display = "none";
        cityQuestions2.style.display = "block";   
    }
    user1.quizCityResult.push("b");
    });

//2

cframe2a[0].addEventListener("click", function(){
    if (cityQuestions2.style.display === "block") {
        cityQuestions2.style.display = "none";
        cityQuestions3.style.display = "block";   
    }
    user1.quizCityResult.push("a");
});

cframe2b[0].addEventListener("click", function(){
    if (cityQuestions2.style.display === "block") {
        cityQuestions2.style.display = "none";
        cityQuestions3.style.display = "block";   
    }
    user1.quizCityResult.push("b");
    });

//3

cframe3a[0].addEventListener("click", function(){
    if (cityQuestions3.style.display === "block") {
        cityQuestions3.style.display = "none";
        cityQuestions4.style.display = "block";   
    }
    user1.quizCityResult.push("a");
});

cframe3b[0].addEventListener("click", function(){
    if (cityQuestions3.style.display === "block") {
        cityQuestions3.style.display = "none";
        cityQuestions4.style.display = "block";   
    }
    user1.quizCityResult.push("b");
    });
//4
cframe4a[0].addEventListener("click", function(){
    if (cityQuestions4.style.display === "block") {
        cityQuestions4.style.display = "none";
        cityQuestions5.style.display = "block";   
    }
    user1.quizCityResult.push("a");
});

cframe4b[0].addEventListener("click", function(){
    if (cityQuestions4.style.display === "block") {
        cityQuestions4.style.display = "none";
        cityQuestions5.style.display = "block";   
    }
    user1.quizCityResult.push("b");
    });

//5
cframe5a[0].addEventListener("click", function(){
    if (cityQuestions5.style.display === "block") {
        cityQuestions5.style.display = "none";
        cityQuestions6.style.display = "block";   
    }
    user1.quizCityResult.push("a");
});

cframe5b[0].addEventListener("click", function(){
    if (cityQuestions5.style.display === "block") {
        cityQuestions5.style.display = "none";
        cityQuestions6.style.display = "block";   
    }
    user1.quizCityResult.push("b");
    });

//6
cframe6a[0].addEventListener("click", function(){
    if (cityQuestions6.style.display === "block") {
        cityQuestions6.style.display = "none";
        cityQuestions7.style.display = "block";   
    }
    user1.quizCityResult.push("a");
});

cframe6b[0].addEventListener("click", function(){
    if (cityQuestions6.style.display === "block") {
        cityQuestions6.style.display = "none";
        cityQuestions7.style.display = "block";   
    }
    user1.quizCityResult.push("b");
    });

//7
cframe7a[0].addEventListener("click", function(){
    if (cityQuestions7.style.display === "block") {
        cityQuestions7.style.display = "none";
        cityQuestions8.style.display = "block";   
    }
    user1.quizCityResult.push("a");
});

cframe7b[0].addEventListener("click", function(){
    if (cityQuestions7.style.display === "block") {
        cityQuestions7.style.display = "none";
        cityQuestions8.style.display = "block";   
    }
    user1.quizCityResult.push("b");
    });

//8

cframe8a[0].addEventListener("click", function(){
    if (cityQuestions8.style.display === "block") {
        cityQuestions8.style.display = "none";
        cityQuestions9.style.display = "block";   
    }
    user1.quizCityResult.push("a");
});

cframe8b[0].addEventListener("click", function(){
    if (cityQuestions8.style.display === "block") {
        cityQuestions8.style.display = "none";
        cityQuestions9.style.display = "block";   
    }
    user1.quizCityResult.push("b");
    });
//9
cframe9a[0].addEventListener("click", function(){
    if (cityQuestions9.style.display === "block") {
        cityQuestions9.style.display = "none";
        cityQuestions10.style.display = "block";   
    }
    user1.quizCityResult.push("a");
});

cframe9b[0].addEventListener("click", function(){
    if (cityQuestions9.style.display === "block") {
        cityQuestions9.style.display = "none";
        cityQuestions10.style.display = "block";   
    }
    user1.quizCityResult.push("b");
    });

//10

cframe10a[0].addEventListener("click", function(){
    if (cityQuestions10.style.display === "block") {
        cityQuestions10.style.display = "none";
        cityOutro.style.display = "flex";
          
    }
    user1.quizCityResult.push("a");
});

cframe10b[0].addEventListener("click", function(){
    if (cityQuestions10.style.display === "block") {
        cityQuestions10.style.display = "none";
        cityOutro.style.display = "flex";
          
    }
    user1.quizCityResult.push("b"); 
    });


// // quiz evil

// let evilIntro = document.getElementById("evil-intro")

//  let evilOutro = document.getElementById("evil-outro")

//  let evilQuestions = document.getElementById("evil-questions")

//  let evilQuestions2 = document.getElementById("evil-questions2")

//  let evilQuestions3 = document.getElementById("evil-questions3")

//  let evilQuestions4 = document.getElementById("evil-questions4")

//  let evilQuestions5 = document.getElementById("evil-questions5")

//  let evilQuestions6 = document.getElementById("evil-questions6")

//  let evilQuestions7 = document.getElementById("evil-questions7")

//  let evilQuestions8 = document.getElementById("evil-questions8")

//  let evilQuestions9 = document.getElementById("evil-questions9")

//  let evilQuestions10 = document.getElementById("evil-questions10")


//  letsGoButton.addEventListener("click", function(){
//     if (evilQuestions.style.display === "none") {
        
//         evilQuestions.style.display = "block";
//         evilIntro.style.display = "none";

//     }
//  })


// // let pictureFrame = document.getElementsByClassName("pictures-frame");

// // let picFrame0 = pictureFrame[0];
// // let picFrame1 = pictureFrame[1];

// let eframe1a = document.getElementsByClassName("eframe1a")
// let eframe1b = document.getElementsByClassName("eframe1b")


// let eframe2a = document.getElementsByClassName("eframe2a")
// let eframe2b = document.getElementsByClassName("eframe2b")

// let eframe3a = document.getElementsByClassName("eframe3a")
// let eframe3b = document.getElementsByClassName("eframe3b")

// let eframe4a = document.getElementsByClassName("eframe4a")
// let eframe4b = document.getElementsByClassName("eframe4b")

// let eframe5a = document.getElementsByClassName("eframe5a")
// let eframe5b = document.getElementsByClassName("eframe5b")

// let eframe6a = document.getElementsByClassName("eframe6a")
// let eframe6b = document.getElementsByClassName("eframe6b")

// let eframe7a = document.getElementsByClassName("eframe7a")
// let eframe7b = document.getElementsByClassName("eframe7b")

// let eframe8a = document.getElementsByClassName("eframe8a")
// let eframe8b = document.getElementsByClassName("eframe8b")

// let eframe9a = document.getElementsByClassName("eframe9a")
// let eframe9b = document.getElementsByClassName("eframe9b")

// let eframe10a = document.getElementsByClassName("eframe10a")
// let eframe10b = document.getElementsByClassName("eframe10b")

// //1

// eframe1a[0].addEventListener("click", function(){
//     if (evilQuestions.style.display === "block") {
//         evilQuestions.style.display = "none";
//         evilQuestions2.style.display = "block";   
//     }
// });

// eframe1b[0].addEventListener("click", function(){
//     if (evilQuestions.style.display === "block") {
//         evilQuestions.style.display = "none";
//         evilQuestions2.style.display = "block";   
//     }
    
//     });

// //2

// eframe2a[0].addEventListener("click", function(){
//     if (evilQuestions2.style.display === "block") {
//         evilQuestions2.style.display = "none";
//         evilQuestions3.style.display = "block";   
//     }
// });

// eframe2b[0].addEventListener("click", function(){
//     if (evilQuestions2.style.display === "block") {
//         evilQuestions2.style.display = "none";
//         evilQuestions3.style.display = "block";   
//     }
    
//     });

// //3

// eframe3a[0].addEventListener("click", function(){
//     if (evilQuestions3.style.display === "block") {
//         evilQuestions3.style.display = "none";
//         evilQuestions4.style.display = "block";   
//     }
// });

// eframe3b[0].addEventListener("click", function(){
//     if (evilQuestions3.style.display === "block") {
//         evilQuestions3.style.display = "none";
//         evilQuestions4.style.display = "block";   
//     }
    
//     });
// //4
// eframe4a[0].addEventListener("click", function(){
//     if (evilQuestions4.style.display === "block") {
//         evilQuestions4.style.display = "none";
//         evilQuestions5.style.display = "block";   
//     }
// });

// eframe4b[0].addEventListener("click", function(){
//     if (evilQuestions4.style.display === "block") {
//         evilQuestions4.style.display = "none";
//         evilQuestions5.style.display = "block";   
//     }
    
//     });

// //5
// eframe5a[0].addEventListener("click", function(){
//     if (evilQuestions5.style.display === "block") {
//         evilQuestions5.style.display = "none";
//         evilQuestions6.style.display = "block";   
//     }
// });

// eframe5b[0].addEventListener("click", function(){
//     if (evilQuestions5.style.display === "block") {
//         evilQuestions5.style.display = "none";
//         evilQuestions6.style.display = "block";   
//     }
    
//     });

// //6
// eframe6a[0].addEventListener("click", function(){
//     if (evilQuestions6.style.display === "block") {
//         evilQuestions6.style.display = "none";
//         evilQuestions7.style.display = "block";   
//     }
// });

// eframe6b[0].addEventListener("click", function(){
//     if (evilQuestions6.style.display === "block") {
//         evilQuestions6.style.display = "none";
//         evilQuestions7.style.display = "block";   
//     }
    
//     });

// //7
// eframe7a[0].addEventListener("click", function(){
//     if (evilQuestions7.style.display === "block") {
//         evilQuestions7.style.display = "none";
//         evilQuestions8.style.display = "block";   
//     }
// });

// eframe7b[0].addEventListener("click", function(){
//     if (evilQuestions7.style.display === "block") {
//         evilQuestions7.style.display = "none";
//         evilQuestions8.style.display = "block";   
//     }
    
//     });

// //8

// eframe8a[0].addEventListener("click", function(){
//     if (evilQuestions8.style.display === "block") {
//         evilQuestions8.style.display = "none";
//         evilQuestions9.style.display = "block";   
//     }
// });

// eframe8b[0].addEventListener("click", function(){
//     if (evilQuestions8.style.display === "block") {
//         evilQuestions8.style.display = "none";
//         evilQuestions9.style.display = "block";   
//     }
    
//     });
// //9
// eframe9a[0].addEventListener("click", function(){
//     if (evilQuestions9.style.display === "block") {
//         evilQuestions9.style.display = "none";
//         evilQuestions10.style.display = "block";   
//     }
// });

// eframe9b[0].addEventListener("click", function(){
//     if (evilQuestions9.style.display === "block") {
//         evilQuestions9.style.display = "none";
//         evilQuestions10.style.display = "block";   
//     }
    
//     });

// //10

// eframe10a[0].addEventListener("click", function(){
//     if (evilQuestions10.style.display === "block") {
//         evilQuestions10.style.display = "none";
//         evilOutro.style.display = "block";
          
//     }
// });

// eframe10b[0].addEventListener("click", function(){
//     if (evilQuestions10.style.display === "block") {
//         evilQuestions10.style.display = "none";
//         evilOutro.style.display = "flex";
          
//     }
        
//     });




 