// Write your JavaScript code here!

window.addEventListener("load", function () {
  let list = document.getElementById("faultyItems");
  list.style.visibility = "hidden";
  let form = document.querySelector("form");

  form.addEventListener("submit", function () {
    event.preventDefault();
    let pilotInput = document.querySelector('[name="pilotName"]');
    let pilot = pilotInput.value;
    let copilotInput = document.querySelector('[name="copilotName"]');
    let copilot = copilotInput.value;
    let fuelLevelInput = document.querySelector("[name='fuelLevel']");
    let fuelLevel = fuelLevelInput.value;
    let cargoMassInput = document.querySelector("[name='cargoMass']");
    let cargoMass = cargoMassInput.value;

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let selectedPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        selectedPlanet.name,
        selectedPlanet.diameter,
        selectedPlanet.star,
        selectedPlanet.distance,
        selectedPlanet.moons,
        selectedPlanet.image
      );
    });
});
