const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");

//* Being called when button is clicked
//Purpose:
//Adds tasks when add item button is clicked
function addTask() {
    if (inputBox.value.trim() === "") {
        alert("Please write a task to do.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; //resets input box to empty for next entry.
}

//adds event listener to LI element
//LI Clicked -> Checked css for LI ELEMENT = ON
//SPAN clicked --> removes parents element (AKA: LI element)
//essentially deleting it.
listContainer.addEventListener(
    "click",
    function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
        }
    },
    false
);
