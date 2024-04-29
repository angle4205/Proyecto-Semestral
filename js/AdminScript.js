function copyRowToInputs(row) {
  var cells = row.getElementsByTagName("td");
  document.getElementById("productNameInput").value = cells[2].textContent;
  document.getElementById("productPriceInput").value = cells[3].textContent;
  document.getElementById("productColorInput").value = cells[4].textContent;
  document.getElementById("imageURLSpan").textContent = cells[1].textContent;
}

function validateProductName() {
  var input = document.getElementById("productNameInput");
  var name = input.value.trim();
  var errorMessage = document.getElementById("errorMessageName");

  if (name === "") {
    errorMessage.innerText = "El campo no puede estar vacío";
    errorMessage.classList.add("errores");
    errorMessage.style.display = "block";
    return false;
  } else if (name.length > 25) {
    errorMessage.innerText = "El nombre no puede tener más de 25 caracteres";
    errorMessage.classList.add("errores");
    errorMessage.style.display = "block";
    return false;
  } else {
    errorMessage.innerText = "";
    errorMessage.classList.remove("errores");
    errorMessage.style.display = "none";
    return true;
  }
}

function validateProductPrice() {
  var input = document.getElementById('productPriceInput');
  var price = input.value.trim();
  var errorMessage = document.getElementById('errorMessagePrice');

  if (price === "") {
    errorMessage.innerText = "El campo no puede estar vacío";
    errorMessage.classList.add('errores');
    errorMessage.style.display = 'block';
    return false;
  } else if (!/^\d+$/.test(price)) {
    errorMessage.innerText = "El precio debe ser un número entero";
    errorMessage.classList.add('errores');
    errorMessage.style.display = 'block';
    return false;
  } else {
    errorMessage.innerText = "";
    errorMessage.classList.remove('errores');
    errorMessage.style.display = 'none';
    return true;
  }
}


function validateProductColor() {
  var input = document.getElementById('productColorInput');
  var color = input.value.trim();
  var errorMessage = document.getElementById('errorMessageColor');

  if (color === "") {
    errorMessage.innerText = "El campo no puede estar vacío";
    errorMessage.classList.add('errores');
    errorMessage.style.display = 'block';
    return false;
  } else if (color.length > 25) {
    errorMessage.innerText = "El color no puede tener más de 25 caracteres";
    errorMessage.classList.add('errores');
    errorMessage.style.display = 'block';
    return false;
  } else {
    errorMessage.innerText = "";
    errorMessage.classList.remove('errores');
    errorMessage.style.display = 'none';
    return true;
  }
}


function addProduct() {
  var name = document.getElementById('productNameInput').value;
  var price = document.getElementById('productPriceInput').value;
  var color = document.getElementById('productColorInput').value;
  var validado = true;

  if (!validateProductName()) {
    validado = false;
  }

  if (!validateProductPrice()) {
    validado = false;
  }

  if (!validateProductColor()) {
    validado = false;
  }

  if (validado) {
    // WIP  
  } else {
    //
  }
}


function editProductName() {
  const n = document.getElementById("productNameInput").value;
  if (validateProductName()) {
    //WIP
  } else {
  }
}

function editProductPrice() {
  var price = document.getElementById("productPriceInput").value;
  if (validateProductPrice()) {
    // WIP
  }
}

function editProductColor() {
  var color = document.getElementById("productColorInput").value;
  if (validateProductColor()) {
    // WIP
  }
}
