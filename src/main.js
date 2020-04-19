let avatar = document.getElementById("avatar");
let avatarGif = document.getElementById("avatar-gif");

window.onload = () => {
  avatar.classList.add("hidden");

  setTimeout(() => {
    avatarGif.classList.add("hidden");
    avatar.classList.remove("hidden");
  }, 2000);
};
