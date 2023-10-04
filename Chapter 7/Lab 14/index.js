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
    // Your code here
    let gradeCode = ['A', 'B', 'C', 'D', 'F'];
    let arr = buildDistributionArray(parseScores(userInput));

    let table = document.getElementById('distributionTable');

    let barRow, labelRow, countRow;
    let hasScores = false;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            hasScores = true;
            break;
        }
    }

    if (hasScores) {
        barRow = document.createElement('tr');
        labelRow = document.createElement('tr');
        countRow = document.createElement('tr');

        table.appendChild(barRow);
        table.appendChild(labelRow);
        table.appendChild(countRow);

        for (let i=0; i < arr.length; i++) {
            // If any row element isn't created        
            let data = document.createElement('td');
            let div = document.createElement('div');
    
            div.classList.add('bar' + i);
            div.style.height = arr[i] * 10 + 'px';
            
            data.appendChild(div);
            barRow.appendChild(data);
    
            let labelData = document.createElement('td');
            labelData.appendChild(document.createTextNode(gradeCode[i]));
    
            labelRow.appendChild(labelData);
    
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

function bodyLoaded() {
    // The argument passed to writeTableContent can be changed for 
    // testing purposes
    setTableContent("");
}