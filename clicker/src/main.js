const myButton = document.getElementById("myButton");

myButton.addEventListener("mousedown", function (event) {
  console.log("\n\n****mousedown fired");
  let mouseMoved = false;

  function onMouseMove() {
    document.removeEventListener("mousemove", onMouseMove);
    console.log("INST Mouse moved before mouseup");

    mouseMoved = true;
  }

  document.addEventListener("mousemove", onMouseMove);

  document.addEventListener("mouseup", function () {
    if (mouseMoved) {
      console.log("Mouse moved before mouseup");
    } else {
      console.log("Mouse did not move before mouseup");
    }
    mouseMoved = false; // Reset for the next mousedown event
  });
});

if (1) {
  myButton.addEventListener("click", function (event) {
    console.log("click fired");
  });
}
