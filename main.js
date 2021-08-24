var button1 = document.getElementById("first-dot"),
button2 = document.getElementById("second-dot"),
button3 = document.getElementById("third-dot"),
container2 = document.getElementById("container-007"),
container1 = document.getElementById("container-07"),
container3 = document.getElementById("container-70");

button2.addEventListener('click', ()=> {
    container2.id = "container-07";
    container1.id = "container-007";
    container3.id = "container-70";
});

button1.addEventListener('click', ()=> {
    container1.id = "container-07";
    container2.id = "container-70";
    container3.id = "container-007";
});

button3.addEventListener('click', ()=> {
    container1.id = "container-007";
    container2.id = "container-70";
    container3.id = "container-07";
});