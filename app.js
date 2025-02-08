function generateTable() {
    var tableNumber = document.getElementById("tableNumber").value;
    var output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous output

    for (var i = 1; i <= 25; i++) {
      output.innerHTML += tableNumber + ' x ' + i + ' = ' + (tableNumber * i) + "<br><br>";
    }
  }