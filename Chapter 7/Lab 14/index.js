function parseScores(scoresString) {
  return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
  let distributionArray = [0, 0, 0, 0, 0];

  for (let score of scoresArray) {
    let numericScore = parseInt(score);
    if (numericScore >= 90) {
      distributionArray[0]++;
    } else if (numericScore >= 80) {
      distributionArray[1]++;
    } else if (numericScore >= 70) {
      distributionArray[2]++;
    } else if (numericScore >= 60) {
      distributionArray[3]++;
    } else {
      distributionArray[4]++;
    }
  }

  return distributionArray;
}

function setTableContent(userInput) {
  let table = document.getElementById("distributionTable");
  let scoresArray = parseScores(userInput);
  let distributionArray = buildDistributionArray(scoresArray);

  table.innerHTML = "";
  function setTableContent(userInput) {
    let table = document.getElementById("distributionTable");
    let scoresArray = parseScores(userInput);
    let distributionArray = buildDistributionArray(scoresArray);

    table.innerHTML = "";

    if (userInput.trim() === "") {
      let firstRow = document.createElement("tr");
      let td = document.createElement("td");
      td.colSpan = "5";
      td.textContent = "No graph to display";
      firstRow.appendChild(td);
      table.appendChild(firstRow);
    } else {
      let firstRow = document.createElement("tr");

      for (let j = 0; j < distributionArray.length; j++) {
        let gradeCount = distributionArray[j];
        let div = document.createElement("div");
        div.className = "bar" + j;
        div.style.height = gradeCount * 10 + "px";
        let td = document.createElement("td");
        td.appendChild(div);
        firstRow.appendChild(td);
      }

      let secondRow = document.createElement("tr");
      let gradeLabels = ["A", "B", "C", "D", "F"];
      for (let label of gradeLabels) {
        let td = document.createElement("td");
        td.textContent = label;
        secondRow.appendChild(td);
      }

      let thirdRow = document.createElement("tr");
      for (let gradeCount of distributionArray) {
        let td = document.createElement("td");
        td.textContent = gradeCount;
        thirdRow.appendChild(td);
      }

      table.appendChild(firstRow);
      table.appendChild(secondRow);
      table.appendChild(thirdRow);
    }
  }

  if (userInput.trim() === "") {
    let firstRow = document.createElement("tr");
    let td = document.createElement("td");
    td.colSpan = "5";
    td.textContent = "No graph to display";
    firstRow.appendChild(td);
    table.appendChild(firstRow);
  } else {
    let firstRow = document.createElement("tr");

    for (let j = 0; j < distributionArray.length; j++) {
      let gradeCount = distributionArray[j];
      let div = document.createElement("div");
      div.className = "bar" + j;
      div.style.height = gradeCount * 10 + "px";
      let td = document.createElement("td");
      td.appendChild(div);
      firstRow.appendChild(td);
    }

    let secondRow = document.createElement("tr");
    let gradeLabels = ["A", "B", "C", "D", "F"];
    for (let label of gradeLabels) {
      let td = document.createElement("td");
      td.textContent = label;
      secondRow.appendChild(td);
    }

    let thirdRow = document.createElement("tr");
    for (let gradeCount of distributionArray) {
      let td = document.createElement("td");
      td.textContent = gradeCount;
      thirdRow.appendChild(td);
    }

    table.appendChild(firstRow);
    table.appendChild(secondRow);
    table.appendChild(thirdRow);
  }
}

function bodyLoaded() {
  // The argument passed to writeTableContent can be changed for
  // testing purposes
  setTableContent("");
}
