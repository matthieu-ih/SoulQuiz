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

