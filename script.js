window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {

    response.json().then( function(json) {
        console.log(json);
        const div = document.getElementById("container")
        let lowestToHighest = json.sort( function(a, b){
            return b.hoursInSpace - a.hoursInSpace
        });
        console.log(lowestToHighest);
        for(let i = 0; i < json.length; i++){
            if(lowestToHighest[i].active == true){
                div.innerHTML += 
                `<div class="astronaut">
                <div class="bio">
                   <h3>${lowestToHighest[i].firstName} ${lowestToHighest[i].lastName}</h3>
                   <ul>
                      <li>Hours in space: ${lowestToHighest[i].hoursInSpace}</li>    
                      <li class="true">Active: ${lowestToHighest[i].active}</li>
                      <li>Skills: ${lowestToHighest[i].skills}</li>
                   </ul>
                </div>
                <img class="avatar" src=${lowestToHighest[i].picture}>
             </div>`

                
              } else{
                div.innerHTML += 
                `<div class="astronaut">
                <div class="bio">
                   <h3>${lowestToHighest[i].firstName} ${lowestToHighest[i].lastName}</h3>
                   <ul>
                      <li>Hours in space: ${lowestToHighest[i].hoursInSpace}</li>    
                      <li>Active: ${lowestToHighest[i].active}</li>
                      <li>Skills: ${lowestToHighest[i].skills}</li>
                   </ul>
                </div>
                <img class="avatar" src=${lowestToHighest[i].picture}>
             </div>`
              }     

        }
        div.innerHTML +=
        // let numOfAstronauts = json.length
        `<div>There are ${json.length} astronauts.</div>`
         });

    });
 });
//  `<li class="true">Active: ${lowestToHighest[i].active}</li>`
// `<div class="astronaut">
// <div class="bio">
//    <h3>${lowestToHighest[i].firstName} ${lowestToHighest[i].lastName}</h3>
//    <ul>
//       <li>Hours in space: ${lowestToHighest[i].hoursInSpace}</li>`

//       `<li>Active: ${lowestToHighest[i].active}</li>
//       <li>Skills: ${lowestToHighest[i].skills}</li>
//    </ul>
// </div>
// <img class="avatar" src=${lowestToHighest[i].picture}>
// </div>`
