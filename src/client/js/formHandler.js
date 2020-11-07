import { showResults } from "./nameChecker";
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //checkForName(formText)
    console.log("::: Form Submitted :::")
    
     /*api call*/
    fetch('http://localhost:8081/analyse', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ formText: formText }),
    }).then(async function(){
        console.log("Hereeeeeeeeee");
        const sentiment = await fetch("http://localhost:8081/all");
        const sentimentJson = await sentiment.json();
        Client.showResults(sentimentJson);
        console.log(`Returning the ${sentiment}`);
        console.log(sentimentJson);
    });

    
}

export { handleSubmit }
