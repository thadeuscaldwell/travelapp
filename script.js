// let destination = ""
// console.log("hi")
// $("#journey").click(function () {
//    console.log(1)
//    // onclick="doThisFunction();thenDoTheOtherFunction();"
//    fetch('https://api.foursquare.com/v2/venues/search?near=atlanta&client_id=QR2DHCKWFADGCEVTE12AHCNWSP4Q2UI330HPJ2VB14X05ZC0&client_secret=W0VM2ZNYLWDACZN3QIJDQLGVO2GDBRRFHZDLCMEWE13QI2L5&v=20190319')
//    .then(function(response) {
//        // Code for handling API response
    
//        response.json().then(body => handleJson(body));
//    })
//    .catch(function(error) {
//        console.log(error)
//        // Code for handling errors
//    });
//    const destination = $("#name").val()
// function getVenue() {
//    console.log('hi');
//    console.log(firstVenue)
//            const venues = $("#listOfVenues").val()
           
// }
// function handleJson(json){
//     for(venue in json.response.venues) {
//         console.log(venue.id)
//     }
// }
// })
let destination = ""
console.log("hi")

$("#journey").click(function () {
   console.log(1)
   let inputField = $("#names").val()
   // onclick="doThisFunction();thenDoTheOtherFunction();"
   fetch(`https://api.foursquare.com/v2/venues/search?near=${inputField}&client_id=QR2DHCKWFADGCEVTE12AHCNWSP4Q2UI330HPJ2VB14X05ZC0&client_secret=W0VM2ZNYLWDACZN3QIJDQLGVO2GDBRRFHZDLCMEWE13QI2L5&v=20190319`)
   .then(function(response) {
       // Code for handling API response
    
       response.json().then(body => handleJson(body));
   })
   .catch(function(error) {
       console.log(error)
       // Code for handling errors
   });
   const destination = $("#name").val()


function getVenue() {
   console.log('hi');
   console.log(firstVenue)
           const venues = $("#listOfVenues").val()
           
}

function handleJson(json){
    for(i=0;i<json.response.venues.length;i++) {
        $("#list").append( json.response.venues[i].name + ", " )
        console.log(json.response.venues[i].name)
    }
 }
 
})


