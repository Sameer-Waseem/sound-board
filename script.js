const sounds = ["Over", "Sweep", "Punch", "Game", "Forest", "Alarm"];

sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.classList.add("button");

  button.innerText = sound;

  button.addEventListener("click", () => {
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(button);
});
