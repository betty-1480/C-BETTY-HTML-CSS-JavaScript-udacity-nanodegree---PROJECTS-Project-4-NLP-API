function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}
function showResults(result) {
    // selecting the result container from DOM


    document.getElementById("results").innerHTML = 

    `
    <table> 
        <tr>
            <th>Sentiment</th>
            <th>Result</th>     
        </tr>
        <tr>
            <td>Agreement Status</td>
            <td>${result.agreement}</td>

        </tr>
        <tr>
            <td>Confidence</td>
            <td>${result.confidence}</td> 
        </tr>
        <tr>
            <td>Irony</td> 
            <td>${result.irony}</td> 
        </tr>
        <tr>
            <td>Subjectivity</td>
            <td>${result.subjectivity}</td> 
        </tr>
    </table>
    `

    
    ;

   // console.log(resultText);

  
}


export { checkForName,
    showResults }
