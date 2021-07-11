function playdice() {
  //Defines the game name that HTML references.
  console.log("Dice Game Initiated"); //Outputs "Dice Game Initiated" in the console of the HTML. Used to verify if the .js is operable.
  var wins; //Defines variable "wins", the number of times you've won.
  var losses; //Defines variable "losses". the number of times you've lost.
  var die1; //Defines variable "die1", the first die.
  var die2; //Defines variable "die2", the second die.
  wins = 0; //sets win count at start of game to 0.
  losses = 0; //sets lose count at start of game to 0.
  die1 = Math.ceil(Math.random() * 6); //Makes the output of the first die a random number from 1 through 6, including 1 and 6.
  die2 = Math.ceil(Math.random() * 6); //Makes the output of the second die a random number from 1 through 6, including 1 and 6.
  document.getElementById("die1status").innerHTML = die1; //Replaces the "die1status" HTML text with the result of the first die.
  document.getElementById("die2status").innerHTML = die2; //Replaces the "die2status" HTML text with the result of the second die.
  var dicesum = die1 + die2; //Defines the variable "dicesum" as the sum of die1 and die2.
  document.getElementById("dicesum").innerHTML = dicesum; //Replaces the "dicesum" HTML text with the resulting sum of both the first and second die.
  if (dicesum == 7 || dicesum == 11) {
    //Translation: If dicesum is equal to 7 or equal to 11...
    document.getElementById("diceresult").innerHTML = "You Lose!"; //Replaces the "diceresult" HTML text with "You Lose!" if the dice sum is equal to 7 or equal to 11.
    losses++; //This is for the losses count. When you lose, it adds 1 to the total number of losses.
  } else if (die1 == die2 && die1 % 2 == 0) {
    //Translation: Otherwise, if die1 is equal to die2 and they are even numbers... (if die1 is divisible by 2)
    document.getElementById("diceresult").innerHTML = "Doubles - You Win!"; //Replaces the "diceresult" HTML text with "Doubles - You Win!" if the dice are equal to eachother and are divisible by 2.
    wins++; //This is for the wins count. When you win, it adds 1 to the total number of wins.
  } else {
    //Translation: Otherwise... (do this if everything else has been exhausted)
    document.getElementById("diceresult").innerHTML = "Push - No Win Or Lose."; //Replaces the "diceresult" HTML text with "Push - No Win Or Lose." if the dice don't equal each other (evenly) and are not equal to 7 or 11.
  }
  //Below code for win/lose counter.
  document.getElementById("winstatus").innerHTML = wins; //Replaces the "winstatus" HTML text with the current number of wins.
  document.getElementById("losestatus").innerHTML = losses; //Replaces the "losestatus" HTML text with the current number of losses.
}
