function copyRowToInputs(row) {
  var cells = row.getElementsByTagName("td");
  document.getElementById("productNameInput").value = cells[2].textContent;
  document.getElementById("productPriceInput").value = cells[3].textContent;
  document.getElementById("productDescripcionInput").value = cells[4].textContent;
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


function validateProductDescription() {
  var input = document.getElementById('productDescripcionInput');
  var descripcion = input.value.trim();
  var errorMessage = document.getElementById('errorMessageDescripcion');

  if (descripcion === "") {
    errorMessage.innerText = "El campo no puede estar vacío";
    errorMessage.classList.add('errores');
    errorMessage.style.display = 'block';
    return false;
  } else if (descripcion.length > 100) {
    errorMessage.innerText = "La descripcion no puede tener más de 100 caracteres";
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
  var descripcion = document.getElementById('productDescripcionInput').value;
  var validado = true;

  if (!validateProductName()) {
    validado = false;
  }

  if (!validateProductPrice()) {
    validado = false;
  }

  if (!validateProductDescription()) {
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

function editProductDescription() {
  var descripcion = document.getElementById("productDescripcionInput").value;
  if (validateProductDescription()) {
    // WIP
  }
}
