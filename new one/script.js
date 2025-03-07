// Function for Heron's Formula to calculate the area of a triangle
function heronsFormula(a, b, c) {
    const s = (a + b + c) / 2;  // semi-perimeter
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  
  // Function for the Ambiguous Case of a triangle
  function ambiguousCase(angleA, sideA, sideB) {
    const h = sideB * Math.sin(angleA * Math.PI / 180);  // height
    let result = "";
  
    if (angleA < 90) {  // Acute angle
      if (sideA < h) {
        result = "No triangle";
      } else if (sideA === h) {
        result = "Right triangle";
      } else if (sideA > sideB) {
        result = "One triangle";
      } else {
        result = "Two triangles (ambiguous case)";
      }
    } else {  // Obtuse angle
      if (sideA < sideB || sideA === sideB) {
        result = "No triangle";
      } else {
        result = "One triangle";
      }
    }
    return result;
  }
  
  // Function for Newton's Method to approximate the root
  function newtonsMethod(guess) {
    let x = guess;
    for (let i = 0; i < 10; i++) {  // Iterating 10 times
      const f_x = Math.pow(x, 4) - 13 * Math.pow(x, 3) + 18 * Math.pow(x, 2) - 7 * x + 6;
      const f_prime_x = 4 * Math.pow(x, 3) - 39 * Math.pow(x, 2) + 36 * x - 7;
      x = x - f_x / f_prime_x;
    }
    return x;
  }
  
  // Function for Polynomial Function calculation
  function polynomialFunction(coefficients, exponents, xValue) {
    let results = [];
    coefficients = coefficients.split(" ").map(Number);
    exponents = exponents.split(" ").map(Number);
    
    let result1 = 0;
    let result2 = 0;
  
    for (let i = 0; i < coefficients.length; i++) {
      result1 += coefficients[i] * Math.pow(xValue, exponents[i]);
      result2 += coefficients[i] * Math.pow(xValue, exponents[i] + 1);
    }
  
    results.push(result1.toFixed(2));
    results.push(result2.toFixed(2));
  
    return results;
  }
  
  // Event listeners for the forms
  document.getElementById('heron-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const area = heronsFormula(a, b, c);
    document.getElementById('heron-result').value = `Area: ${area.toFixed(2)} square units`;
  });
  
  document.getElementById('ambiguous-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const angleA = parseFloat(document.getElementById('angleA').value);
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const result = ambiguousCase(angleA, sideA, sideB);
    document.getElementById('ambiguous-result').value = result;
  });
  
  document.getElementById('newton-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const guess = parseFloat(document.getElementById('guess').value);
    const root = newtonsMethod(guess);
    document.getElementById('newton-result').value = `Root approximation: ${root.toFixed(5)}`;
  });
  
  document.getElementById('poly-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const coefficients = document.getElementById('coefficients').value;
    const exponents = document.getElementById('exponents').value;
    const xValue = parseFloat(document.getElementById('x-value').value);
    const results = polynomialFunction(coefficients, exponents, xValue);
    document.getElementById('poly-result').value = `Result 1: ${results[0]}, Result 2: ${results[1]}`;
  });
  