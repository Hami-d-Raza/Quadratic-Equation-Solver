function moveToNextInput(currentInput, nextInputId) {
    const nextInput = document.getElementById(nextInputId);
    if (nextInput) {
      nextInput.focus();
    }
  }
  
  document.getElementById("coeff-a").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      moveToNextInput(this, "coeff-b");
    }
  });
  
  document.getElementById("coeff-b").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      moveToNextInput(this, "coeff-c");
    }
  });
  
  document.getElementById("coeff-c").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      function moveToNextInput(currentInput, nextInputId) {
        const nextInput = document.getElementById(nextInputId);
        if (nextInput) {
          nextInput.focus();
        }
      }
  
      document.getElementById("coeff-a").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          moveToNextInput(this, "coeff-b");
        }
      });
  
      document.getElementById("coeff-b").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          moveToNextInput(this, "coeff-c");
        }
      });
  
      document.getElementById("coeff-c").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("solve-button").click();
        }
      });
  
      function solveQuadratic() {
        const a = parseFloat(document.getElementById("coeff-a").value);
        const b = parseFloat(document.getElementById("coeff-b").value);
        const c = parseFloat(document.getElementById("coeff-c").value);
  
        const d = b ** 2 - 4 * a * c;
  
        function round(value, decimals) {
          return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
        }
  
        if (d >= 0) {
          const sqrtD = Math.sqrt(d);
          const sol1_real = (-b + sqrtD) / (2 * a);
          const sol2_real = (-b - sqrtD) / (2 * a);
  
          const sol1_rounded = { real: round(sol1_real, 2), imag: 0 };
          const sol2_rounded = { real: round(sol2_real, 2), imag: 0 };
  
          const resultElement = document.getElementById("result");
          resultElement.innerHTML = `The solutions are ${sol1_rounded.real} and ${sol2_rounded.real}`;
        } else {
          const sqrtD = Math.sqrt(-d);
          const sol1_real = -b / (2 * a);
          const sol1_imag = sqrtD / (2 * a);
          const sol2_real = -b / (2 * a);
          const sol2_imag = -sqrtD / (2 * a);
  
          const sol1_rounded_real = round(sol1_real, 2);
          const sol1_rounded_imag = round(sol1_imag, 2);
          const sol2_rounded_real = round(sol2_real, 2);
          const sol2_rounded_imag = round(sol2_imag, 2);
  
          const resultElement = document.getElementById("result");
          resultElement.innerHTML = `The solutions are ${sol1_rounded_real} + ${sol1_rounded_imag}i and ${sol2_rounded_real} + ${sol2_rounded_imag}i`;
        }
      }
  
      function toggleTheme() {
        const body = document.body;
        body.classList.toggle('dark-theme');
      }
  
      document.getElementById("solve-button").click();
    }
  });
  
  function solveQuadratic() {
    const a = parseFloat(document.getElementById("coeff-a").value);
    const b = parseFloat(document.getElementById("coeff-b").value);
    const c = parseFloat(document.getElementById("coeff-c").value);
  
    const d = b ** 2 - 4 * a * c;
  
    function round(value, decimals) {
      return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }
  
    const sqrtD = Math.sqrt(Math.abs(d));
    const sol1_real = (-b + sqrtD) / (2 * a);
    const sol1_imag = d < 0 ? sqrtD / (2 * a) : 0;
    const sol2_real = (-b - sqrtD) / (2 * a);
    const sol2_imag = d < 0 ? -sqrtD / (2 * a) : 0;
  
    const sol1 = { real: sol1_real, imag: sol1_imag };
    const sol2 = { real: sol2_real, imag: sol2_imag };
  
    const sol1_rounded = { real: round(sol1.real, 2), imag: round(sol1.imag, 2) };
    const sol2_rounded = { real: round(sol2.real, 2), imag: round(sol2.imag, 2) };
  
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `The solutions are ${sol1_rounded.real} + ${sol1_rounded.imag}i and ${sol2_rounded.real} + ${sol2_rounded.imag}i`;
  }
  
  function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
  }
  