let letsGoButton = document.querySelector("div #lets-go-box");

let findMyQuizMatesButton = document.querySelector("div #lets-go-box");

let findQuizMateButton = document.querySelector("div #find-my-quiz-mates-box");

let evilIntro = document.getElementById("evil-intro");

let evilOutro = document.getElementById("evil-outro");

let evilQuestionsElement = document.getElementById("evil-questions1");

let inputName = document.querySelector("#nameInput");

//
const users = [];

// class user

class User {
  constructor(userName, quizName) {
    this.userName = userName;
    this.quizName = quizName;
    this.evilQuizResult = [];
  }

  setUserName() {
    do {
      this.userName = prompt("Please enter your name");
    } while (this.userName === "");
  }
}

function showElement(el) {
  el.style.display = "block";
}

function hideElement(el) {
  el.style.display = "none";
}


function getAllLocalStoreUsers() {
  // retourne tout le tableau JS d'user
 
 for (const key in localStorage){
  return `${key} : ${object[key]}`
 }

}

function getLocalStoredUser(name) {
  // retourne un user trouvé dans localstored users by name

  for (const key in localStorage){
    if(localStorage[Username] === name)
    return localStorage[Username]
   }

}

function saveUsersInLocalStore(users) {
  // saveur un array users (arg) dans le store
  localStorage.setItem(users, JSON.stringify(users.name));
}

function saveUserInLocalStore(user) {
  // save un user dans le store (push dans le tableau déjà sauvé)
  // leve une erreur si le tablau users n'existe pas dans le store


}



letsGoButton.addEventListener("click", function () {
  showElement(evilQuestionsElement);
  hideElement(evilIntro);
  const newUser = new User();
  newUser.setUserName();
  users.push(newUser);
  console.log(users);
});


///// 

// coding is art
// coding is fun
let localStoreKey = "players";
/**
 *
 * @param {Array} players
 * @description takes an array of users and store in localStorage
 * @returns {undefined}
 * @throws {Error} if users is not array
 */
function setPlayers(players) {
  if (!Array.isArray(players)) throw new Error("Un Array dis donc !!!");
  localStorage.setItem(localStoreKey, JSON.stringify(players));
}
/**
 * @description check if user local exists
 * @return {Boolean} true if store is set, false otherwise
 */
function playerStoreExists() {
  const storedValue = localStorage.getItem(localStoreKey);
  return storedValue !== null;
}
/**
 * @description add one player object in the appropriated key in localStorage
 * @todo avoid duplicated player names
 * @param {Object} player
 * @throws {TypeError} triggered if the localStoreKey hasn't been registered yet
 */
function setPlayer(player) {
  const prevPlayers = getPlayers();
  prevPlayers.push(player);
  setPlayers(prevPlayers);
}
function getPlayers() {
  return JSON.parse(localStorage.getItem(localStoreKey));
}
/**
 *
 * @param {String} name the username to return
 * @param {Array<Object>} players all players stored locally
 * @throws {TypeError} trigger if name is not a string
 * @returns {Object|null} null if no user found, the player object otherwise
 */
function getUserByName(name, players) {
  if (typeof name !== "string") throw new Error("name must be of type string");
  const foundPlayer = players.filter((player) => {
    return player.name === name;
  });
  if (foundPlayer.length === 1) {
    return foundPlayer[0];
  } else {
    return null;
  }
}
try {
  setPlayers([]);
  if (playerStoreExists()) {
    setPlayer({ name: "gui", score: 1 });
    setPlayer({ name: "foo", score: 1000 });
    setPlayer({ name: "matt", score: 100 });
    const res = getUserByName("foo", getPlayers());
    console.log(res.score);
  }
} catch (err) {
  console.warn(err);
}