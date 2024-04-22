function copyRowToInputs(row) {
  var cells = row.getElementsByTagName("td");
  document.getElementById("productNameInput").value = cells[2].textContent;
  document.getElementById("productPriceInput").value = cells[3].textContent;
  document.getElementById("productColorInput").value = cells[4].textContent;
  document.getElementById("imageURLSpan").textContent = cells[1].textContent;
}
