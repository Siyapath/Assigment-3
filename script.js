document.getElementById("quad-form").addEventListener('submit', (event) => {
    event.preventDefault();
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        document.getElementById("result").value = "No Roots";
    } else if (discriminant > 0) {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        const rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").value = `x1=${rootOne}, x2=${rootTwo}`;
    } else {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").value = `x=${rootOne}`;
    }
})


function heronsFormula(a, b, c) {
    const s = (a + b + c) / 2;  
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  
  document.getElementById('heron-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const area = heronsFormula(a, b, c);
    document.getElementById('heron-result').value = `Area: ${area.toFixed(2)} square units`;
  });