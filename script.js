const title = document.getElementById("title");

document.addEventListener("mousemove", (event) => {
    const { clientX: x, clientY: y } = event;
    const { innerWidth: width, innerHeight: height } = window;

    // Calculate rotation based on mouse position
    const rotateX = ((y / height) - 0.5) * 200;  // tilt by up to 10 degrees vertically
    const rotateY = ((x / width) - 0.5) * -200;  // tilt by up to 10 degrees horizontally

    // Apply the rotation and shadow effect
    title.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    title.style.textShadow = `${rotateY * 1.5}px ${rotateX * 1.5}px 10px rgba(0, 0, 0, 0.3)`;
});

document.addEventListener("mouseleave", () => {
    // Reset the effect when the mouse leaves the window
    title.style.transform = "rotateX(0deg) rotateY(0deg)";
    title.style.textShadow = "none";
});
