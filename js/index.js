let serial = 0;

// triangle
document.getElementById("triangle-calc").addEventListener("click", function () {
  const name = document.getElementById("t-name").innerText;
  const value1 = document.getElementById("triangle-b").value;
  const value2 = document.getElementById("triangle-h").value;

  if (
    value1 == "" ||
    value2 == "" ||
    value1 <= 0 ||
    value2 <= 0 ||
    isNaN(value1) ||
    isNaN(value2)
  ) {
    alert(
      "please fill both input fields with number and the numbers can't be negative or zero"
    );
  } else {
    serial += 1;
    const area = 0.5 * areaCalculator(value1, value2);
    const finalArea = parseFloat(area.toFixed(2));
    displayData(name, finalArea);
  }
  document.getElementById("triangle-b").value = "";
  document.getElementById("triangle-h").value = "";
});

// rectangle
document
  .getElementById("rectangle-calc")
  .addEventListener("click", function () {
    const name = document.getElementById("r-name").innerText;
    const value1 = document.getElementById("rectangle-w").value;
    const value2 = document.getElementById("rectangle-l").value;

    if (
      value1 == "" ||
      value2 == "" ||
      value1 <= 0 ||
      value2 <= 0 ||
      isNaN(value1) ||
      isNaN(value2)
    ) {
      alert(
        "please fill both input fields with number and the numbers can't be negative or zero"
      );
    } else {
      serial += 1;
      const area = areaCalculator(value1, value2);
      const finalArea = parseFloat(area.toFixed(2));
      displayData(name, finalArea);
    }
    document.getElementById("rectangle-w").value = "";
    document.getElementById("rectangle-l").value = "";
  });

//   Parallelogram
document
  .getElementById("parallelogram-calc")
  .addEventListener("click", function () {
    const name = document.getElementById("p-name").innerText;
    const value1 = document.getElementById("para-base").value;
    const value2 = document.getElementById("para-height").value;
    if (
      value1 == "" ||
      value2 == "" ||
      value1 <= 0 ||
      value2 <= 0 ||
      isNaN(value1) ||
      isNaN(value2)
    ) {
      alert(
        "please fill both input fields with number and the numbers can't be negative or zero"
      );
    } else {
      serial += 1;
      const area = areaCalculator(value1, value2);
      const finalArea = parseFloat(area.toFixed(2));
      displayData(name, finalArea);
    }
    document.getElementById("para-base").value = "";
    document.getElementById("para-height").value = "";
  });

//   rhombus
document.getElementById("rhombus-calc").addEventListener("click", function () {
  const name = document.getElementById("rhombus-name").innerText;
  const value1 = document.getElementById("diagonal-1").value;
  const value2 = document.getElementById("diagonal-2").value;

  if (
    value1 == "" ||
    value2 == "" ||
    value1 <= 0 ||
    value2 <= 0 ||
    isNaN(value1) ||
    isNaN(value2)
  ) {
    alert(
      "please fill both input fields with number and the numbers can't be negative or zero"
    );
  } else {
    serial += 1;
    const area = 0.5 * areaCalculator(value1, value2);
    const finalArea = parseFloat(area.toFixed(2));
    displayData(name, finalArea);
  }
  document.getElementById("diagonal-1").value = "";
  document.getElementById("diagonal-2").value = "";
});

// Pentagon
document.getElementById("pentagon-calc").addEventListener("click", function () {
  const name = document.getElementById("pentagon-name").innerText;
  const value1 = document.getElementById("p-value").value;
  const value2 = document.getElementById("b-value").value;

  if (
    value1 == "" ||
    value2 == "" ||
    value1 <= 0 ||
    value2 <= 0 ||
    isNaN(value1) ||
    isNaN(value2)
  ) {
    alert(
      "please fill both input fields with number and the numbers can't be negative or zero"
    );
  } else {
    serial += 1;
    const area = 0.5 * areaCalculator(value1, value2);
    const finalArea = parseFloat(area.toFixed(2));
    displayData(name, finalArea);
  }
  document.getElementById("p-value").value = "";
  document.getElementById("b-value").value = "";
});

// Ellipse
document.getElementById("ellipse-calc").addEventListener("click", function () {
  const name = document.getElementById("ellipse-name").innerText;
  const value1 = document.getElementById("area-v").value;
  const value2 = document.getElementById("base-v").value;

  if (
    value1 == "" ||
    value2 == "" ||
    value1 <= 0 ||
    value2 <= 0 ||
    isNaN(value1) ||
    isNaN(value2)
  ) {
    alert(
      "please fill both input fields with number and the numbers can't be negative or zero"
    );
  } else {
    serial += 1;
    const area = 3.14 * areaCalculator(value1, value2);
    const finalArea = parseFloat(area.toFixed(2));
    displayData(name, finalArea);
  }
  document.getElementById("area-v").value = "";
  document.getElementById("base-v").value = "";
});

// random color change on hover
magicBackground("random");
magicBackground("random-2");
magicBackground("random-3");
magicBackground("random-4");
magicBackground("random-5");
magicBackground("random-6");
