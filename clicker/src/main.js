const myButton = document.getElementById("myButton");

myButton.addEventListener("mousedown", function (event) {
  console.log("****    mousedown fired");
  const isCtrlPressed = event.ctrlKey; // control brings up the context menu
  const isShiftPressed = event.shiftKey;
  const isAltPressed = event.altKey;
  const isMetaPressed = event.metaKey;

  console.log("Control key pressed:", isCtrlPressed);
  console.log("Shift key pressed:", isShiftPressed);
  console.log("Alt key pressed:", isAltPressed);
  console.log("Meta key pressed:", isMetaPressed);

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
