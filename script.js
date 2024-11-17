// Select the glow trail element
const trail = document.getElementById('trail');

// Mousemove event listener
document.addEventListener('mousemove', (e) => {
  // Adjust the trail to align precisely with the hotspot
  const cursorOffsetX = 0; // Offset for the cursor's hotspot (horizontal)
  const cursorOffsetY = 0; // Offset for the cursor's hotspot (vertical)

  // Update trail position
  trail.style.left = `${e.clientX + cursorOffsetX}px`;
  trail.style.top = `${e.clientY + cursorOffsetY}px`;
});
