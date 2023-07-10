const keys = document.querySelectorAll(".key");
const checkobx = document.querySelector(".checkbox__keys");
const switcher = document.querySelector(".switcher");
const keysSection = document.querySelector(".piano__keys");

const playNote = (note) => {
  const audio = new Audio(`../notes/${note}.wav`);
  audio.play();
};

const handleMouseDown = (key) => {
  playNote(key.getAttribute("data-note"));

  if (key.className.includes("black")) {
    key.classList.add("black--pressed");
    return;
  }

  key.style.background = "#ddd";
};

const handleMouseUp = (key) => {
  if (key.className.includes("black")) {
    key.classList.remove("black--pressed");
    return;
  }

  key.style.background = "white";
};

keys.forEach((key) => {
  key.addEventListener("mousedown", () => handleMouseDown(key));
  key.addEventListener("mouseup", () => handleMouseUp(key));
});

checkobx.addEventListener("change", ({ target }) => {
  if (target.checked) {
    switcher.classList.add("switcher--actve");
    keysSection.classList.remove("disabled-keys");
    return;
  }

  keysSection.classList.add("disabled-keys");
  switcher.classList.remove("switcher--actve");
});

const keydownMapper = {
  Tab: () => handleMouseDown(keys[0]),
  1: () => handleMouseDown(keys[1]),
  q: () => handleMouseDown(keys[2]),
  2: () => handleMouseDown(keys[3]),
  w: () => handleMouseDown(keys[4]),
  e: () => handleMouseDown(keys[5]),
  4: () => handleMouseDown(keys[6]),
  r: () => handleMouseDown(keys[7]),
  5: () => handleMouseDown(keys[8]),
  t: () => handleMouseDown(keys[9]),
  6: () => handleMouseDown(keys[10]),
  y: () => handleMouseDown(keys[11]),
  u: () => handleMouseDown(keys[12]),
  8: () => handleMouseDown(keys[13]),
  i: () => handleMouseDown(keys[14]),
  9: () => handleMouseDown(keys[15]),
  o: () => handleMouseDown(keys[16]),
  p: () => handleMouseDown(keys[17]),
  a: () => handleMouseDown(keys[18]),
  z: () => handleMouseDown(keys[19]),
  s: () => handleMouseDown(keys[20]),
  x: () => handleMouseDown(keys[21]),
  d: () => handleMouseDown(keys[22]),
  c: () => handleMouseDown(keys[23]),
  v: () => handleMouseDown(keys[24]),
  g: () => handleMouseDown(keys[25]),
  b: () => handleMouseDown(keys[26]),
  h: () => handleMouseDown(keys[27]),
  n: () => handleMouseDown(keys[28]),
  m: () => handleMouseDown(keys[29]),
  k: () => handleMouseDown(keys[30]),
  ",": () => handleMouseDown(keys[31]),
  l: () => handleMouseDown(keys[32]),
  ".": () => handleMouseDown(keys[33]),
  ç: () => handleMouseDown(keys[34]),
  Shift: () => handleMouseDown(keys[35]),
};

const keyupMapper = {
  Tab: () => handleMouseUp(keys[0]),
  1: () => handleMouseUp(keys[1]),
  q: () => handleMouseUp(keys[2]),
  2: () => handleMouseUp(keys[3]),
  w: () => handleMouseUp(keys[4]),
  e: () => handleMouseUp(keys[5]),
  4: () => handleMouseUp(keys[6]),
  r: () => handleMouseUp(keys[7]),
  5: () => handleMouseUp(keys[8]),
  t: () => handleMouseUp(keys[9]),
  6: () => handleMouseUp(keys[10]),
  y: () => handleMouseUp(keys[11]),
  u: () => handleMouseUp(keys[12]),
  8: () => handleMouseUp(keys[13]),
  i: () => handleMouseUp(keys[14]),
  9: () => handleMouseUp(keys[15]),
  o: () => handleMouseUp(keys[16]),
  p: () => handleMouseUp(keys[17]),
  a: () => handleMouseUp(keys[18]),
  z: () => handleMouseUp(keys[19]),
  s: () => handleMouseUp(keys[20]),
  x: () => handleMouseUp(keys[21]),
  d: () => handleMouseUp(keys[22]),
  c: () => handleMouseUp(keys[23]),
  v: () => handleMouseUp(keys[24]),
  g: () => handleMouseUp(keys[25]),
  b: () => handleMouseUp(keys[26]),
  h: () => handleMouseUp(keys[27]),
  n: () => handleMouseUp(keys[28]),
  m: () => handleMouseUp(keys[29]),
  k: () => handleMouseUp(keys[30]),
  ",": () => handleMouseUp(keys[31]),
  l: () => handleMouseUp(keys[32]),
  ".": () => handleMouseUp(keys[33]),
  ç: () => handleMouseUp(keys[34]),
  Shift: () => handleMouseUp(keys[35]),
};

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  keydownMapper[event.key]();
});

document.addEventListener("keyup", (event) => {
  keyupMapper[event.key]();
});
