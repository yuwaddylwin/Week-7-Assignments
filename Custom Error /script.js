// Custom Error class - playing game underage
class GameError extends Error {
    constructor(message) {
      super(message);
      this.name = 'GameError'; 
    }
  }
  try {
    let playerAge = 10;
  
    if (playerAge < 13) {
      throw new GameError("Oops, you're too young to play this game!");
    }
  } catch (error) {
    console.log(error.name);    //GameError
    console.log(error.message); //Oops, you're too young to play this game!
  }
  