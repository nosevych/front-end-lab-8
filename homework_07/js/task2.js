if (confirm("Do you want to play a game?")) {
  let numberOfAttempts = 3;
  let attempt = 3;
  let prize = 10;
  let prizeBase = 10;
  let prizeMultiplyer = 1;
  let totalprize = 0;
  let randonNumber = 0;
  let userNumber = 0;
  let numberRange = 5;
  randonNumber = Math.floor(Math.random() * (numberRange + 1));
  for (let i = 0; i < numberOfAttempts;) {
    userNumber = prompt(
      "\nEnter a number from 0 to " + numberRange +
      "\nAttempt left: " + attempt +
      "\nTotal prize " + totalprize +
      "\nPossible prize on current attempt: " + prize + "$", "0");
    if (userNumber === null || userNumber === false) {
      if (confirm("Do you want to quit?")) {
        break;
      } else {
        continue;
      }
    }
    if (!userNumber.replace(/\s/g, "")) {
      userNumber = NaN;
    } else {
      userNumber = Number(userNumber);
    }
    if (userNumber === randonNumber) {
      i = 0;
      totalprize += prize;
      prizeMultiplyer *= 3;
      prize = prizeBase * prizeMultiplyer;
      numberRange *= 2;
      attempt = numberOfAttempts;
      if (confirm("Do you want to continue?")) {
        randonNumber = Math.floor(Math.random() * (numberRange + 1));
      } else {
        console.log("Thank you for a game. Your prize is: " + totalprize + "$");
        break;
      }
    } else {
      i++;
      attempt--;
      prize = Math.floor(prize / 2);
      if (attempt == 0) {
        console.log("Thank you for a game. Your prize is: " + totalprize + "$");
        if (confirm("Do you want to play again?")) {
          i = 0;
          attempt = 3;
          prize = 10;
          prizeMultiplyer = 1;
          totalprize = 0;
          numberRange = 5;
          randonNumber = Math.floor(Math.random() * (numberRange + 1));
        }
      }
    }
  }
} else {
  console.log("You did not become a millionaire!");
}