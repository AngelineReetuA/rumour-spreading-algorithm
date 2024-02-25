const firstOgArray = document.getElementById("ogArray");
var table = document.getElementById("roundTable");

let nodeList = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
firstOgArray.innerHTML = nodeList;

// A function to get a random number within a limit
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// To keep track of rounds
let rounds = 0;

// To pass the rumour from spreader to spreadee
function passRumour(nodeList) {
  // To check if the goal is achieved
  if (!nodeList.includes(0)) {
    console.log("Rumour passed successfully to all nodes :)");
    return;
  }

  // Starting of a round
  nodeList.forEach((element) => {
    // Traversing through each element in the array
    if (element == 1) {
      let random = getRandomNumber(0, 9);
      // When the element is 1, it will perform the choosing of a random element and changing it into 1
      console.log("Spreader Element chosen!");
      if (nodeList[random] == 1) {
        // Non spreadee - Chose an element which is already 1
        console.log("Random index", random);
        console.log("Bad Event");
      } else if (nodeList[random] == 0) {
        // Spreadee chosen! - Chose a 0 and changing it into 2
        nodeList.splice(random, 1, 2);
        console.log("Random index", random);
        console.log("Good Event!", nodeList);
      } else {
        console.log("Crash node chosen ", nodeList[random]);
      }
    }
  });

  rounds++;
  var newRow = table.insertRow(table.rows.length);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = rounds;
  console.log("END OF ROUND ", rounds);
  
  // Changing 2s to 1s (basically spreaders to spreadees for the next round)
  for (i = 1; i < nodeList.length; i++) {
    if (nodeList[i] == 2) {
      nodeList.splice(i, 1, 1);
    }
  }
  console.log("NODELIST", nodeList);
  cell2.innerHTML = nodeList;

  // CRASH NODES REPRESENTED BY "C"
  // ONE THIRD OF THE NODES CRASH AFTER THE FIRST ROUND
  if (rounds == 1) {
    nodeList.splice(0, 3, "C", "C", "C");
    console.log("Array after crash nodes", nodeList);
  }
  passRumour(nodeList);
}

// Calling the function for the first time
passRumour(nodeList);
