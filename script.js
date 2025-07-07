// This runs as soon as the page loads
console.log("JavaScript is working!");

// Let's make a button say something when clicked
document.addEventListener("DOMContentLoaded", function () {
  const testButton = document.getElementById("test-btn");

  if (testButton) {
    testButton.addEventListener("click", function () {
      alert("Button clicked! JavaScript is running.");
    });
  }
});
