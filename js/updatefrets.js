function updateFrets() {
  const numFretsInput = document.getElementById("numFrets");
  const numFrets = parseInt(numFretsInput.value);

  // Validate user input
  if (isNaN(numFrets) || numFrets < 1 || numFrets > 20) {
    alert("Please enter a number between 1 and 20.");
    return;
  }

  const fretboard = document.getElementById("fretboard");

  // Clear existing default frets
  fretboard.innerHTML = "";

  // Add the specified number of frets
  for (let i = 0; i < numFrets +1; i++) {
    const fret = document.createElement("div");
    fret.classList.add("fret");
    const span = document.createElement("span");
    span.textContent = i;
    span.classList.add("fret-number"); // Add the "fret-number" class
    fret.appendChild(span);
    fretboard.appendChild(fret);
  }
}
