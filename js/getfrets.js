document.addEventListener('DOMContentLoaded', function () {
  // Assuming you have a common ancestor for all musical staff containers
  const musicContainer = document.querySelector('.musical-staff');

  if (musicContainer) {
    musicContainer.addEventListener('click', function (event) {
      // Check if the clicked element has the "staff-line" class
      if (event.target.classList.contains('staff-line')) {
        // Get the ID of the clicked staff line
        const clickedStaffLineId = event.target.id;
        console.log(`Staff line with ID ${clickedStaffLineId} was clicked.`);

        // Calculate the position of the click relative to the clicked staff line
        const clickX = event.clientX - event.target.getBoundingClientRect().left;

        // Get all the .fret elements
        const frets = document.querySelectorAll('.fret');

        // Initialize variables to store the closest and second closest span elements
        let closestSpan = null;
        let secondClosestSpan = null;

        // Initialize variables to store the minimum and second minimum distances
        let minDistance = Infinity;
        let secondMinDistance = Infinity;

        // Iterate through all the .fret elements
        frets.forEach(function (fret) {
          // Calculate the position of the span element within the .fret element
          const spanX = fret.getBoundingClientRect().left - event.target.getBoundingClientRect().left;

          // Calculate the distance between the click point and the span element
          const distance = Math.abs(spanX - clickX);

          // Check if this span is closer than the current closest span
          if (distance < minDistance) {
            secondClosestSpan = closestSpan;
            secondMinDistance = minDistance;
            closestSpan = fret.querySelector('span');
            minDistance = distance;
          } else if (distance < secondMinDistance) {
            secondClosestSpan = fret.querySelector('span');
            secondMinDistance = distance;
          }
        });

        // Output the closest and second closest span values
        const closestValue = closestSpan.textContent;
        const secondClosestValue = secondClosestSpan.textContent;

        console.log(`Closest: ${closestValue}, Second Closest: ${secondClosestValue}`);
      }
    });
  }
});


