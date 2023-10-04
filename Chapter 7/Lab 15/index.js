function parseScores(scoresString) {
   return scoresString.split(' ');
}

function buildDistributionArray(scoresArray) {
   // Your code here
   let grades = [0, 0, 0, 0, 0];

   for (let score of scoresArray) {
       switch (true) {
           case (score >= 90):
               grades[0]++;
               break;
           case (score >= 80):
               grades[1]++;
               break;
           case (score >= 70):
               grades[2]++;
               break;
           case (score >= 60):
               grades[3]++;
               break;
           case (score > 0):
               grades[4]++;
               break;
       }
   }

   return grades;
}
function setTableContent(userInput) {
   let arr = buildDistributionArray(parseScores(userInput));

    let dataRow = document.getElementById('firstRow');
    let countRow = document.getElementById('thirdRow');

    let hasScores = false;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            hasScores = true;
            break;
        }
    }

    if (hasScores) {
        for (let i=0; i < arr.length; i++) {
            // If any row element isn't created        
            let data = document.createElement('td');
            let div = document.createElement('div');
    
            div.classList.add('bar' + i);
            div.style.height = arr[i] * 10 + 'px';
            
            data.appendChild(div);
            dataRow.appendChild(data);
    
            let countData = document.createElement('td');
            countData.appendChild(document.createTextNode(arr[i]));
    
            countRow.appendChild(countData);
        }
    }
    else {
        // changing td -> tr breaks it from 9/10 to 3/10 like ????
        let newElement = document.createElement('td');
        newElement.appendChild(document.createTextNode('No graph to display'));

        table.appendChild(newElement)
    }
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");