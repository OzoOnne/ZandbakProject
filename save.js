function save_func() {
    var divs = document.getElementsByClassName("draggable").length;
    var data = [];
    var bodyBackgroundColor = document.body.style.backgroundColor;

    for (let i = 0; i < divs; i++) {
        var divElement = document.getElementsByClassName("draggable").item(i);
        var divRect = divElement.getBoundingClientRect();
        var svgContent = divElement.innerHTML;

        var divData = {
            id: divElement.id,
            class: "draggable",
            aspectRatio: divElement.getAttribute("data-aspect-ratio"),
            draggable: "true",
            oncontextmenu: divElement.getAttribute("oncontextmenu"), // Add the oncontextmenu attribute
            ondragstart: divElement.getAttribute("ondragstart") || "drag_start(event)",

            rect: {
                top: divRect.top,
                left: divRect.left,
                width: divRect.width,
                height: divRect.height
            },
            button: {
                class: "delete-button",
                onclick: "deleteDiv(this.parentElement)",
                innerText: "✖"
            },

            svgContent: svgContent,
            bodyBackgroundColor: bodyBackgroundColor
        };

        data.push(divData);
    }

    var data_string = JSON.stringify(data);

    var file = new Blob([data_string], { type: 'application/json' });
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "save.json";
    anchor.click();
}

function load_func() {
    var fileInput = document.getElementById("load");
    var file = fileInput.files[0];

    if (!file) {
        console.error("No file selected.");
        return;
    }

    var reader = new FileReader();
    var draggableContainer = document.getElementById("draggable-container");

    reader.onloadend = function () {
        var load = JSON.parse(reader.result);

        load.forEach(function (divData) {
            var newDiv = document.createElement("div");
            newDiv.id = divData.id;
            newDiv.className = divData.class;
            newDiv.setAttribute("data-aspect-ratio", divData.aspectRatio);
            newDiv.setAttribute("draggable",divData.draggable);
            newDiv.setAttribute("oncontextmenu", divData.oncontextmenu);
            newDiv.setAttribute("ondragstart", divData.ondragstart);
            newDiv.style.position = "absolute";
            newDiv.style.left = divData.rect.left + "px";
            newDiv.style.top = divData.rect.top + "px";
            newDiv.style.width = divData.rect.width + "px";
            newDiv.style.height = divData.rect.height + "px";
            newDiv.innerHTML = divData.svgContent;

            var deleteButton = document.createElement("button");
            deleteButton.className = divData.button.class;
            deleteButton.onclick = function () {
                deleteDiv(newDiv);
            };
            deleteButton.innerText = divData.button.innerText;
            newDiv.appendChild(deleteButton);

            draggableContainer.appendChild(newDiv);
            divCounter += 1;
        });

        document.body.style.backgroundColor = load[0].bodyBackgroundColor;
        document.getElementById("background").style.backgroundColor = load[0].bodyBackgroundColor;
    };

    reader.readAsText(file);
}




