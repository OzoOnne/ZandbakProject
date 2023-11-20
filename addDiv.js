var divCounter = 0;
var divCounter2 = 0;
var divObject = {};

function createPreMadeDiv(width, height, aspectRatio) {
    var preMadeDiv = document.createElement("div");
    preMadeDiv.style.width = width;
    preMadeDiv.style.height = height;
    preMadeDiv.setAttribute("data-aspect-ratio", aspectRatio);
    divObject[divCounter2] = preMadeDiv;
    divCounter2++;

    return preMadeDiv;
}



createPreMadeDiv("50px", "50px",  "1/1");

createPreMadeDiv("60px", "40px",  "3/2");



var draggableContainer = document.getElementById("draggable-container");

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownOptions");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

function addDiv(divIndex) {
    if (divIndex in divObject) {
        var selectedDiv = divObject[divIndex].cloneNode(true);
        var divId = "resizableDiv" + divCounter;

        selectedDiv.className= "draggable";
        selectedDiv.id = divId;
        selectedDiv.draggable = true;
        selectedDiv.setAttribute("oncontextmenu", "startResize(event, '" + divId + "')");
        selectedDiv.setAttribute("ondragstart", "drag_start(event)");

        var deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.innerHTML = "✖";
        deleteButton.onclick = function () {
            deleteDiv(selectedDiv);
        };

        selectedDiv.appendChild(deleteButton);

        divCounter++;
        draggableContainer.appendChild(selectedDiv);

        document.getElementById("dropdownOptions").style.display = "none";
    } else {
        console.error("Invalid divIndex");
    }
}