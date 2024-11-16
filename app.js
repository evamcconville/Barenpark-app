const log = console.log;

// const reducer = (doggyState, doggyAction) => {
//   if(doggyAction === "PRAISE") {
//     return doggyState + ", what a good boy!"
//   }
//   if(doggyAction === "GIVE TREAT")
//     return doggyState + ", here's a tasty niblet"
//  return doggyState 
// }

// let goodBoy = "Fido"
// goodBoy = reducer(goodBoy, "GIVE TREAT")
// log(goodBoy)

const dogReducer = (doggyState, doggyAction) => {
    switch(doggyAction.type){
        case "PAT":
            if (doggyState.name === "Spot" && doggyState.demenour === "neutral"){
                return {...doggyState, demenour: "happy" }
            }
            if (doggyState.name !== "Spot"){
                return doggyState
            }
        case "QUESTION ABOUT MISSING FOOD":
            return {...doggyState, demenour: "shifty" }
    }
}

let doggyState = {
    name: "Spot",
    demenour: "neutral",
    inventory: null
}

doggyState = dogReducer(doggyState, {type:"PAT"})
log(doggyState)
