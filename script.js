// Define variables
const stateList = document.querySelector(".state-list");

const statDescription1 = document.querySelectorAll(".stat-description")[0];
const statDescription2 = document.querySelectorAll(".stat-description")[1];
const statDescription3 = document.querySelectorAll(".stat-description")[2];

let statesVisitedCount = document.getElementById("stat-1");
let percentStatesVisitedCount = document.getElementById("stat-2");
let statesLeftToVisitCount = document.getElementById("stat-3");

statesVisitedCount.innerHTML = 0;
percentStatesVisitedCount.innerHTML = 0 + "%";
statesLeftToVisitCount.innerHTML = 50;

// State Data
const stateData = [
  { value: "AL", name: "Alabama" },
  { value: "AK", name: "Alaska" },
  { value: "AZ", name: "Arizona" },
  { value: "AR", name: "Arkansas" },
  { value: "CA", name: "California" },
  { value: "CO", name: "Colorado" },
  { value: "CT", name: "Connecticut" },
  { value: "DE", name: "Delaware" },
  { value: "DC", name: "District of Columbia" },
  { value: "FL", name: "Florida" },
  { value: "GA", name: "Georgia" },
  { value: "HI", name: "Hawaii" },
  { value: "ID", name: "Idaho" },
  { value: "IL", name: "Illinois" },
  { value: "IN", name: "Indiana" },
  { value: "IA", name: "Iowa" },
  { value: "KS", name: "Kansas" },
  { value: "KY", name: "Kentucky" },
  { value: "LA", name: "Louisiana" },
  { value: "ME", name: "Maine" },
  { value: "MD", name: "Maryland" },
  { value: "MA", name: "Massachusetts" },
  { value: "MI", name: "Michigan" },
  { value: "MN", name: "Minnesota" },
  { value: "MS", name: "Mississippi" },
  { value: "MO", name: "Missouri" },
  { value: "MT", name: "Montana" },
  { value: "NE", name: "Nebraska" },
  { value: "NV", name: "Nevada" },
  { value: "NH", name: "New Hampshire" },
  { value: "NJ", name: "New Jersey" },
  { value: "NM", name: "New Mexico" },
  { value: "NY", name: "New York" },
  { value: "NC", name: "North Carolina" },
  { value: "ND", name: "North Dakota" },
  { value: "OH", name: "Ohio" },
  { value: "OK", name: "Oklahoma" },
  { value: "OR", name: "Oregon" },
  { value: "PA", name: "Pennsylvania" },
  { value: "RI", name: "Rhode Island" },
  { value: "SC", name: "South Carolina" },
  { value: "SD", name: "South Dakota" },
  { value: "TN", name: "Tennessee" },
  { value: "TX", name: "Texas" },
  { value: "UT", name: "Utah" },
  { value: "VT", name: "Vermont" },
  { value: "VA", name: "Virginia" },
  { value: "WA", name: "Washington" },
  { value: "WV", name: "West Virginia" },
  { value: "WI", name: "Wisconsin" },
  { value: "WY", name: "Wyoming" },
];

//Function: Update Stat Numbers
const updateStatNumbers = () => {
  selectedCount = document.querySelectorAll(".selected").length;

  statesVisitedCount.innerHTML = selectedCount;

  let percent = (selectedCount / 50) * 100;
  let roundPercent = Math.round(percent);
  percentStatesVisitedCount.innerHTML = roundPercent + "%";

  statesLeftToVisitCount.innerHTML = 50 - selectedCount;
};

//Function: Update Stat Descriptions
const updateStatDescription = () => {
  let updatedStateText;

  if (selectedCount === 1) {
    updatedStateText = "state visited";
  } else {
    updatedStateText = "states visited";
  }
  statDescription1.innerHTML = updatedStateText;

  if (selectedCount === 49) {
    updatedStateText = "state left to visit";
  } else {
    updatedStateText = "states left to visit";
  }
  statDescription3.innerHTML = updatedStateText;
};

// Function: Fill corresponding state image
const stateListStateFill = () => {
  stateNamesDiv.forEach((state, index) => {
    stateNamesDiv[index].setAttribute("value", `${stateData[index].value}`);
    let fillState = document.getElementById(`${state.getAttribute("value")}`);

    if (stateNamesDiv[index].classList.contains("selected") === true) {
      fillState.style.fill = "rgb(46, 184, 194)";
      fillState.style.transition = "fill 400ms ease";
      state.style.color = "white";
    } else if (stateNamesDiv[index].classList.contains("selected") === false) {
      fillState.style.fill = "#f9f9f9";
      state.style.color = "rgb(45, 45, 45)";
    }
  });
};

//Function: Show Finish Modal
const showFinishModal = () => {
  let modal = document.getElementById("finishModal");
  let span = document.getElementsByClassName("close")[0];

  if (selectedCount === 50) {
    modal.style.display = "flex";
  }

  span.onclick = function () {
    modal.style.display = "none";
  };
};

//State List
stateData.forEach((state) => {
  //Generate HTML
  const stateName = document.createElement("div");
  stateName.innerHTML = state.name;
  stateName.classList = "stateName";
  stateList.appendChild(stateName);

  //STATE LIST CLICK EVENT
  stateName.addEventListener("click", function () {
    stateName.classList.toggle("selected");
    dcDiv.classList.remove("selected");
    let selectedCount = document.querySelectorAll(".selected").length;

    updateStatNumbers();
    updateStatDescription();
    stateListStateFill();
    showFinishModal();
    dcButton();
    dcEvents();
  });
});

//DC BUTTON SEPARATE CLICK EVENT
const dcDiv = document.querySelectorAll(".stateName")[8];
dcDiv.addEventListener("click", function () {
  dcDiv.classList.toggle("selected-dc");
  dcButton();
  dcEvents();
});

//Function: DC button appearance
const dcButton = () => {
  dcDiv.addEventListener("mouseover", () => {
    if (dcDiv.classList.contains("selected-dc") === true) {
      dcDiv.style.color = "white";
      dcDiv.style.backgroundColor = "rgb(46, 184, 194)";
    } else {
      dcDiv.style.color = "rgb(45, 45, 45)";
      dcDiv.style.backgroundColor = "#dedede";
    }
  });

  dcDiv.addEventListener("mouseout", () => {
    if (dcDiv.classList.contains("selected-dc") === true) {
      dcDiv.style.color = "white";
      dcDiv.style.backgroundColor = "rgb(46, 184, 194)";
    } else {
      dcDiv.style.color = "rgb(45, 45, 45)";
      dcDiv.style.backgroundColor = "white";
    }
  });

  dcDiv.addEventListener("mousedown", () => {
    if (dcDiv.classList.contains("selected-dc") === true) {
      dcDiv.style.color = "rgb(45, 45, 45)";
      dcDiv.style.backgroundColor = "white";
    } else {
      dcDiv.style.color = "white";
      dcDiv.style.backgroundColor = "rgb(46, 184, 194)";
    }
  });
};

//Function: DC Toggle text
const dcEvents = () => {
  let modalText = document.getElementById("congrats");

  if (dcDiv.classList.contains("selected-dc") === true) {
    statDescription1.innerHTML += " and D.C.";
    let stat3 = statDescription3.innerHTML.split(" and D.C.").shift();
    statDescription3.innerHTML = stat3;
    modalText.innerHTML =
      "Congratulations, you have visited all 50 states and D.C.";
    dcDiv.style.color = "white";
    dcDiv.style.backgroundColor = "rgb(46, 184, 194)";
  } else if (dcDiv.classList.contains("selected-dc") === false) {
    let stat1 = statDescription1.innerHTML.split(" and D.C.").shift();
    statDescription1.innerHTML = stat1;
    statDescription3.innerHTML += " and D.C.";
    modalText.innerHTML = "Congratulations, you have visited all 50 states.";
    dcDiv.style.color = "rgb(45, 45, 45)";
    dcDiv.style.backgroundColor = "white";
  }
};

let stateNamesDiv = document.querySelectorAll(".stateName");

//Hover over
stateNamesDiv.forEach((state, index) => {
  stateNamesDiv[index].setAttribute("value", `${stateData[index].value}`);
  let fillState = document.getElementById(`${state.getAttribute("value")}`);

  //Hover over list and it's been clicked/unclicked
  state.addEventListener("mouseover", () => {
    if (stateNamesDiv[index].classList.contains("selected") === true) {
      fillState.style.fill = "rgb(46, 184, 194)";
    } else {
      fillState.style.fill = "#dedede";
      fillState.style.transition = "fill 400ms ease";
      state.style.color = "rgb(45, 45, 45)";
      state.style.backgroundColor = "#dedede";
    }
  });

  state.addEventListener("mouseout", () => {
    if (stateNamesDiv[index].classList.contains("selected") === true) {
      fillState.style.fill = "rgb(46, 184, 194)";
    } else {
      fillState.style.fill = "#f9f9f9";
      state.style.color = "rgb(45, 45, 45)";
      state.style.backgroundColor = "white";
    }
  });

  //Click down on list
  state.addEventListener("mousedown", () => {
    if (stateNamesDiv[index].classList.contains("selected") === false) {
      fillState.style.fill = "rgb(46, 184, 194)";
      state.style.backgroundColor = "rgb(46, 184, 194)";
      state.style.color = "white";
    } else {
      fillState.style.fill = "#f9f9f9";
      state.style.backgroundColor = "white";
      state.style.color = "rgb(45, 45, 45)";
    }
  });

  //Hover over map
  fillState.addEventListener("mouseover", () => {
    fillState.style.cursor = "pointer";
    if (stateNamesDiv[index].classList.contains("selected") === true) {
      fillState.style.fill = "rgb(46, 184, 194)";
      state.style.backgroundColor = "rgb(46, 184, 194)";
    } else {
      fillState.style.fill = "#dedede";
      fillState.style.transition = "fill 400ms ease";
      state.style.backgroundColor = "#dedede";
    }
  });

  fillState.addEventListener("mouseout", () => {
    if (stateNamesDiv[index].classList.contains("selected") === true) {
      fillState.style.fill = "rgb(46, 184, 194)";
    } else {
      fillState.style.fill = "#f9f9f9";
      state.style.backgroundColor = "";
    }
  });

  //Click down on map
  fillState.addEventListener("mousedown", () => {
    if (stateNamesDiv[index].classList.contains("selected") === false) {
      fillState.style.fill = "rgb(46, 184, 194)";
      state.style.backgroundColor = "rgb(46, 184, 194)";
      state.style.color = "white";
    } else {
      fillState.style.fill = "#f9f9f9";
      state.style.backgroundColor = "white";
      state.style.color = "rgb(45, 45, 45)";
    }
  });

  //MAP CLICK EVENT
  fillState.addEventListener("click", () => {
    state.classList.toggle("selected");

    if (stateNamesDiv[index].classList.contains("selected") === false) {
      fillState.style.fill = "#f9f9f9";
      state.style.color = "rgb(45, 45, 45)";
    } else {
      fillState.style.fill = "rgb(46, 184, 194)";
      state.style.color = "white";
    }

    selectedCount = document.querySelectorAll(".selected").length;

    updateStatNumbers();
    updateStatDescription();
    showFinishModal();
    dcButton();
    dcEvents();
  });
});
