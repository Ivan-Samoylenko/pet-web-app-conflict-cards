// підключення основного файлу стилів
import "./styles/main.scss";

import desktopRules from "./js/game-rules/desktop-game-rules.json";

const myDiv = document.createElement("div");
myDiv.classList.add("modal");

function makeRulesInfo() {
  return `<p>${desktopRules["paragraph-one"]}</p>
  <p>${desktopRules["divider-one"]}</p>
  <p>${desktopRules["paragraph-two"]}</p>
  <p>${desktopRules["paragraph-three"]}</p>
  <p>${desktopRules["divider-two"]}</p>
  <p>${desktopRules["paragraph-four"]}</p>`;
}

myDiv.innerHTML = makeRulesInfo();
