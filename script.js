function oblicz() {
  let d = parseFloat(document.getElementById("srednica").value);
  let h = parseFloat(document.getElementById("wysokosc").value);

  let promien = d / 2;

  // objętość walca: π * r^2 * h
  let objetosc = Math.PI * promien * promien * h;

  document.getElementById("wynik").innerText =
    "Potrzebujesz ok. " + objetosc.toFixed(0) + " cm³ podłoża";
}
