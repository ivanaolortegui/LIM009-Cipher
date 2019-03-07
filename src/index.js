/* Acá va tu código */
// Creo constantes para capturar al elemento por su ID de las páginas que quiero que se muestren y oculten.
const encodeName = document.getElementById('encode-name');
const encodeCard = document.getElementById('encode-card');
const decodeName = document.getElementById('decode-name');
const decodeCard = document.getElementById('decode-card');
const homepage = document.getElementById('homepage');
const pageEncodeName = document.getElementById('page-encode-name');
const pageEncodeCard = document.getElementById('page-encode-card');
const pageDecodeName = document.getElementById('page-decode-name');
const pageDecodeCard = document.getElementById('page-decode-card');
// Creo cnstantes para capturar al elemento por su ID del formulario para cifrar nombres.
const inputName = document.getElementById('input-name');
const inputSurname = document.getElementById('input-surname');
const offset = document.getElementById('offset');
const outputName = document.getElementById('output-name');
const outputSuername = document.getElementById('output-surname');
const btnEncode = document.getElementById('btn-encode');

// Creo cnstantes para capturar al elemento por su ID del formulario para descifrar nombres.
const inputNameEncode = document.getElementById('input-name-encode');
const inputSurnameEncode = document.getElementById('input-surname-encode');
const offsetEncode = document.getElementById('offset-encode');
const outputNameDecode = document.getElementById('output-name-decode');
const outputSurnameDecode = document.getElementById('output-surname-decode');
const btnDecode = document.getElementById('btn-decode');
// Creo cnstantes para capturar al elemento por su ID del formulario para cifrar tarjetas.
const inputNumberDecode = document.getElementById('input-number-decode');
const inputCodeDecode = document.getElementById('input-code-decode');
const offsetCarDecode = document.getElementById('offset-card-decode');
const outputNumberDecode = document.getElementById('output-number-decode');
const outputCodeDecode = document.getElementById('output-code-decode');
const btnDecodeCard = document.getElementById('btn-decode-card');

const inputNumberEncode = document.getElementById('input-number-encode');
const inputCodeEncode = document.getElementById('input-code-encode');
const offsetCardEncode = document.getElementById('offset-card-encode');
const outputNumberEncode = document.getElementById('output-number-encode');
const outputCodeEncode = document.getElementById('output-code-encode');
const btnEncodeCard = document.getElementById('btn-encode-card');

// Aqui registro un evento que dice : Oye encodeName Escuchame cuando  haga click y ejecutame lo que hay dentro  

encodeName.addEventListener('click', () => {
  [homepage, pageEncodeCard, pageDecodeName, pageDecodeCard].forEach(ele => ele.classList.add('hidden'));
  [homepage, pageEncodeCard, pageDecodeName, pageDecodeCard].forEach(ele => ele.classList.remove('show'));
  pageEncodeName.classList.add('show');
  pageEncodeName.classList.remove('hidden');
});

/* Cree un array con las variables que necesito ocultar y para ello use un 
forEach para recorrer cada una de las variables y agregales la clase hidden. */

encodeCard.addEventListener('click', () => {
  [homepage, pageEncodeName, pageDecodeName, pageDecodeCard].forEach(ele => ele.classList.add('hidden'));
  [homepage, pageEncodeName, pageDecodeName, pageDecodeCard].forEach(ele => ele.classList.remove('show'));
  pageEncodeCard.classList.add('show');
  pageEncodeCard.classList.remove('hidden');
});

decodeName.addEventListener('click', () => {
  [homepage, pageEncodeName, pageEncodeCard, pageDecodeCard].forEach(ele => ele.classList.add('hidden'));
  [homepage, pageEncodeName, pageEncodeCard, pageDecodeCard].forEach(ele => ele.classList.remove('show'));
  pageDecodeName.classList.add('show');
  pageDecodeName.classList.remove('hidden');
});

decodeCard.addEventListener('click', () => {
  [homepage, pageEncodeName, pageEncodeCard, pageDecodeName].forEach(ele => ele.classList.add('hidden'));
  [homepage, pageEncodeName, pageEncodeCard, pageDecodeName].forEach(ele => ele.classList.remove('show'));
  pageDecodeCard.classList.add('show');
  pageDecodeCard.classList.remove('hidden');
});


const functionEncode = (inputN, inputS, offset) => {
  let firstOutput = '';
  let secondOutput = '';
  // Agregue condicionales para offset negativos

  if (offset < 0) {
    let negativeOffset = offset * -1;
    firstOutput = cipher.decode(inputN, negativeOffset);
    secondOutput = cipher.decode(inputS, negativeOffset);
  } else {
    firstOutput = cipher.encode(inputN, offset);
    secondOutput = cipher.encode(inputS, offset);
  }
  outputName.innerHTML = firstOutput;
  outputSuername.innerHTML = secondOutput; /* Aqui estoy asignado el valor que me 
  retorna la función del respectivo objeto con su propiedad que estoy llamando;
  para pintarlo en la variable que representa el id. */
};

btnEncode.addEventListener('click', () => {
  let inputNameValue = inputName.value;
  let offsetValue = parseInt(offset.value);
  let inputSurnameValue = inputSurname.value;
  functionEncode(inputNameValue, inputSurnameValue, offsetValue);
});

const functionDecode = (inputN, inputS, offset) => {
  let firstOutput = '';
  let secondOutput = '';
  if (offset < 0) {
    let negativeOffset = offset * -1;
    firstOutput = cipher.encode(inputN, negativeOffset);
    secondOutput = cipher.encode(inputS, negativeOffset);
  } else {
    firstOutput = cipher.decode(inputN, offset);
    secondOutput = cipher.decode(inputS, offset);
  }
  outputNameDecode.innerHTML = firstOutput;
  outputSurnameDecode.innerHTML = secondOutput;
};

btnDecode.addEventListener('click', () => {
  let inputNameValue = inputNameEncode.value;
  let inputSurnameValue = inputSurnameEncode.value;
  let offsetValue = parseInt(offsetEncode.value);
  functionDecode(inputNameValue, inputSurnameValue, offsetValue);
});

const functionDecodeCard = (inputNumber, inputCode, offset) => {
  let firstOutput = '';
  let secondOutput = '';
  if (offset < 0) {
    let negativeOffset = offset * -1;
    firstOutput = cipher.encode(inputNumber, negativeOffset);
    secondOutput = cipher.encode(inputCode, negativeOffset);
  } else {
    firstOutput = cipher.decode(inputNumber, offset);
    secondOutput = cipher.decode(inputCode, offset);
  }
  outputNumberDecode.innerHTML = firstOutput;
  outputCodeDecode.innerHTML = secondOutput;
};

btnDecodeCard.addEventListener('click', () => {
  let inputNumberValue = inputNumberDecode.value;
  let inputCodeValue = inputCodeDecode.value;
  let offsetValue = parseInt(offsetCarDecode.value);
  functionDecodeCard(inputNumberValue, inputCodeValue, offsetValue);
});

const functionEncodeCard = (inputNumber, inputCode, offset) => {
  let firstOutput = '';
  let secondOutput = '';
  if (offset < 0) {
    let negativeOffset = offset * -1;
    firstOutput = cipher.decode(inputNumber, negativeOffset);
    secondOutput = cipher.decode(inputCode, negativeOffset);
  } else {
    firstOutput = cipher.encode(inputNumber, offset);
    secondOutput = cipher.encode(inputCode, offset);
  }
  outputNumberEncode.innerHTML = firstOutput;
  outputCodeEncode.innerHTML = secondOutput;
};

btnEncodeCard.addEventListener('click', () => {
  let inputNumberValue = inputNumberEncode.value;
  let inputCodeValue = inputCodeEncode.value;
  let offsetValue = parseInt(offsetCardEncode.value);
  functionEncodeCard(inputNumberValue, inputCodeValue, offsetValue);
});