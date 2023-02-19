// data display on DOM
function displayData(tname, area) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${serial}</td>
      <td>${tname}</td>
      <td>${area + " cm²"}</td>
      <td><button class="py-2 px-2 bg-[#1090D8] rounded-lg text-white">${"Covert to m²"}</button></td>
      `;
  container.appendChild(tr);
}

// Multiplication
function areaCalculator(value1, value2) {
  return value1 * value2;
}

// random color generation
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}

function magicBackground(id) {
  document.getElementById(id).addEventListener("mouseover", function () {
    const backGround = document.getElementById(id);
    backGround.style.backgroundColor = randomColor();
  });
  document.getElementById(id).addEventListener("mouseout", function () {
    const backGround = document.getElementById(id);
    backGround.style.backgroundColor = "#ffffff";
  });
}
