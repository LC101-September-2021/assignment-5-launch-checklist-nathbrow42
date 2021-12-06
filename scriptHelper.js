// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let launchStatus = document.getElementById("launchStatus");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStaus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("All fields are required");
  } else if (
    validateInput(pilot) !== "Not a Number" ||
    validateInput(copilot) !== "Not a Number" ||
    validateInput(fuelLevel) !== "Is a Number" ||
    validateInput(cargoLevel) !== "Is a Number"
  ) {
    alert(
      "Data is invalid. Pilot and co-pilot can only contain letters, while fuel level and cargo level can only contain numbers"
    );
  } else {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStaus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    //updating status of fuel level
    if (Number(fuelLevel) >= 10000) {
      fuelStatus.innerHTML = `Fuel level high enough for launch`;
    } else {
      fuelStatus.innerHTML = `Fuel level too low for launch`;
    }
    //updating status of cargo level
    if (Number(cargoLevel) <= 10000) {
      cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    } else {
      cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
    }
    //setting Ready Message
    if (Number(fuelLevel) >= 10000 && Number(cargoLevel) <= 10000) {
      launchStatus.innerHTML = `Shuttle is Ready for Launch`;
      launchStatus.style.color = "rgb(65, 159, 106)";
    } else {
      launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
      launchStatus.style.color = "rgb(199, 37, 78)";
    }
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
