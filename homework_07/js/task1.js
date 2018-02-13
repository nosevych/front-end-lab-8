let build = "";
let blockP = "[~]";
let gapBlock = "   ";
let emptyGap = "";
let floors = Number(prompt("Enter a number between 1 and 20"));
console.log(floors);
if ((floors >= 1 && floors <= 20) && ((floors % 1) == 0)) {
  for (let i = 1; i < floors; i++) {
    emptyGap += gapBlock;
  }
  for (let i = 0; i < floors; i++) {
    build += emptyGap;
    build += blockP + "\n";
    blockP += "[~][~]";
    emptyGap = emptyGap.slice(0, -3);
  }
  console.log(build);
} else {
  console.error("Incorrect data entered!!!");
}