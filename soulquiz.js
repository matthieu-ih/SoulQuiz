
// //const test = document.getElementById("subtitle-box");

 let letsGoButton = document.querySelector("div #lets-go-box")

 console.log(letsGoButton)

 let cityIntro = document.getElementById("city-intro")

 console.log(cityIntro)

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

 console.log(document.getElementById("city-questions").style)

 letsGoButton.addEventListener("click", function(){
    if (cityQuestions.style.display === "none") {
        console.log("REALLY");
        cityQuestions.style.display = "block";
        cityIntro.style.display = "none";

    }
 })


// let pictureFrame = document.getElementsByClassName("pictures-frame");

// let picFrame0 = pictureFrame[0];
// let picFrame1 = pictureFrame[1];

let frame1a = document.getElementsByClassName("frame1a")
let frame1b = document.getElementsByClassName("frame1b")


let frame2a = document.getElementsByClassName("frame2a")
let frame2b = document.getElementsByClassName("frame2b")

let frame3a = document.getElementsByClassName("frame3a")
let frame3b = document.getElementsByClassName("frame3b")

let frame4a = document.getElementsByClassName("frame4a")
let frame4b = document.getElementsByClassName("frame4b")

let frame5a = document.getElementsByClassName("frame5a")
let frame5b = document.getElementsByClassName("frame5b")

let frame6a = document.getElementsByClassName("frame6a")
let frame6b = document.getElementsByClassName("frame6b")

let frame7a = document.getElementsByClassName("frame7a")
let frame7b = document.getElementsByClassName("frame7b")

let frame8a = document.getElementsByClassName("frame8a")
let frame8b = document.getElementsByClassName("frame8b")

let frame9a = document.getElementsByClassName("frame9a")
let frame9b = document.getElementsByClassName("frame9b")

let frame10a = document.getElementsByClassName("frame10a")
let frame10b = document.getElementsByClassName("frame10b")


1

frame1a[0].addEventListener("click", function(){
    if (cityQuestions.style.display === "block") {
        cityQuestions.style.display = "none";
        cityQuestions2.style.display = "block";   
    }
});

frame1b[0].addEventListener("click", function(){
    if (cityQuestions.style.display === "block") {
        cityQuestions.style.display = "none";
        cityQuestions2.style.display = "block";   
    }
    
    });

//2

frame2a[0].addEventListener("click", function(){
    if (cityQuestions2.style.display === "block") {
        cityQuestions2.style.display = "none";
        cityQuestions3.style.display = "block";   
    }
});

frame2b[0].addEventListener("click", function(){
    if (cityQuestions2.style.display === "block") {
        cityQuestions2.style.display = "none";
        cityQuestions3.style.display = "block";   
    }
    
    });

//3

frame3a[0].addEventListener("click", function(){
    if (cityQuestions3.style.display === "block") {
        cityQuestions3.style.display = "none";
        cityQuestions4.style.display = "block";   
    }
});

frame3b[0].addEventListener("click", function(){
    if (cityQuestions3.style.display === "block") {
        cityQuestions3.style.display = "none";
        cityQuestions4.style.display = "block";   
    }
    
    });
//4
frame4a[0].addEventListener("click", function(){
    if (cityQuestions4.style.display === "block") {
        cityQuestions4.style.display = "none";
        cityQuestions5.style.display = "block";   
    }
});

frame4b[0].addEventListener("click", function(){
    if (cityQuestions4.style.display === "block") {
        cityQuestions4.style.display = "none";
        cityQuestions5.style.display = "block";   
    }
    
    });

//5
frame5a[0].addEventListener("click", function(){
    if (cityQuestions5.style.display === "block") {
        cityQuestions5.style.display = "none";
        cityQuestions6.style.display = "block";   
    }
});

frame5b[0].addEventListener("click", function(){
    if (cityQuestions5.style.display === "block") {
        cityQuestions5.style.display = "none";
        cityQuestions6.style.display = "block";   
    }
    
    });

//6
frame6a[0].addEventListener("click", function(){
    if (cityQuestions6.style.display === "block") {
        cityQuestions6.style.display = "none";
        cityQuestions7.style.display = "block";   
    }
});

frame6b[0].addEventListener("click", function(){
    if (cityQuestions6.style.display === "block") {
        cityQuestions6.style.display = "none";
        cityQuestions7.style.display = "block";   
    }
    
    });

//7
frame7a[0].addEventListener("click", function(){
    if (cityQuestions7.style.display === "block") {
        cityQuestions7.style.display = "none";
        cityQuestions8.style.display = "block";   
    }
});

frame7b[0].addEventListener("click", function(){
    if (cityQuestions7.style.display === "block") {
        cityQuestions7.style.display = "none";
        cityQuestions8.style.display = "block";   
    }
    
    });

//8

frame8a[0].addEventListener("click", function(){
    if (cityQuestions8.style.display === "block") {
        cityQuestions8.style.display = "none";
        cityQuestions9.style.display = "block";   
    }
});

frame8b[0].addEventListener("click", function(){
    if (cityQuestions8.style.display === "block") {
        cityQuestions8.style.display = "none";
        cityQuestions9.style.display = "block";   
    }
    
    });
//9
frame9a[0].addEventListener("click", function(){
    if (cityQuestions9.style.display === "block") {
        cityQuestions9.style.display = "none";
        cityQuestions10.style.display = "block";   
    }
});

frame9b[0].addEventListener("click", function(){
    if (cityQuestions9.style.display === "block") {
        cityQuestions9.style.display = "none";
        cityQuestions10.style.display = "block";   
    }
    
    });



// test with else if

    //     frame1a[0].addEventListener("click", function(){
    //     if (cityQuestions.style.display === "block") {
    //         cityQuestions.style.display = "none";
    //         cityQuestions2.style.display = "block";   
    //     } else if (cityQuestions2.style.display === "block") {
    //         cityQuestions2.style.display = "none";
    //         cityQuestions3.style.display = "block";   
    //     } else if (cityQuestions3.style.display === "block") {
    //         cityQuestions3.style.display = "none";
    //         cityQuestions4.style.display = "block";   
    //     } else if (cityQuestions4.style.display === "block") {
    //         cityQuestions4.style.display = "none";
    //         cityQuestions5.style.display = "block";   
    //     } else if (cityQuestions5.style.display === "block") {
    //     cityQuestions5.style.display = "none";
    //     cityQuestions6.style.display = "block";   
    //     } else if (cityQuestions6.style.display === "block") {
    //         cityQuestions6.style.display = "none";
    //         cityQuestions7.style.display = "block";   
    //     } else if (cityQuestions7.style.display === "block") {
    //         cityQuestions7.style.display = "none";
    //         cityQuestions8.style.display = "block";   
    //     } else if (cityQuestions8.style.display === "block") {
    //         cityQuestions8.style.display = "none";
    //         cityQuestions9.style.display = "block";   
    //     } else if (cityQuestions9.style.display === "block") {
    //         cityQuestions9.style.display = "none";
    //         cityQuestions10.style.display = "block";   
    //     } 

    // });
    
    // frame1b[0].addEventListener("click", function(){
    //     if (cityQuestions.style.display === "block") {
    //         cityQuestions.style.display = "none";
    //         cityQuestions2.style.display = "block";   
    //     } else if (cityQuestions2.style.display === "block") {
    //         cityQuestions2.style.display = "none";
    //         cityQuestions3.style.display = "block";   
    //     } else if (cityQuestions3.style.display === "block") {
    //         cityQuestions3.style.display = "none";
    //         cityQuestions4.style.display = "block";   
    //     } else if (cityQuestions4.style.display === "block") {
    //         cityQuestions4.style.display = "none";
    //         cityQuestions5.style.display = "block";   
    //     } else if (cityQuestions5.style.display === "block") {
    //     cityQuestions5.style.display = "none";
    //     cityQuestions6.style.display = "block";   
    //     } else if (cityQuestions6.style.display === "block") {
    //         cityQuestions6.style.display = "none";
    //         cityQuestions7.style.display = "block";   
    //     } else if (cityQuestions7.style.display === "block") {
    //         cityQuestions7.style.display = "none";
    //         cityQuestions8.style.display = "block";   
    //     } else if (cityQuestions8.style.display === "block") {
    //         cityQuestions8.style.display = "none";
    //         cityQuestions9.style.display = "block";   
    //     } else if (cityQuestions9.style.display === "block") {
    //         cityQuestions9.style.display = "none";
    //         cityQuestions10.style.display = "block";   
    //     } 
        
    //     });




 