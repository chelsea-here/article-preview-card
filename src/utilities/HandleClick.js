const sharePopup = document.getElementById("sharePopup");
const shareButton = document.getElementById("shareButton");

export default function HandleClick() {
  shareButton.style.backgroundColor = "var(--color-gray-medium)";
  shareButton.style.backgroundColor = "var(--color-white)";
  sharePopup.classList.toggle("hidden");
}
