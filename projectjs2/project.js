const muse = document.getElementById("mouse");

mouse.addEventListener("mouseEnter", (evt) => {
    evt.target.style.color = "purple";

    setTimeout(() => {
        evt.target.style.color = "";
    }, 500);
},
    false,
);

mouse.addEventListener("mouseover", (evt) => {
    evt.target.style.color = "green";
    setTimeout(() => {
        evt.target.style.color = "";
    }, 500);
},
    false,
);


// const test = document.getElementById("test");

// test.addEventListener(
//   "mouseenter",
//   (event) => {
//     event.target.style.color = "purple";
//     setTimeout(() => {
//       event.target.style.color = "";
//     }, 500);
//   },
//   false,
// );

// test.addEventListener(
//   "mouseover",
//   (event) => {
//     event.target.style.color = "orange";
//     setTimeout(() => {
//       event.target.style.color = "";
//     }, 500);
//   },
//   false,
// );


