/* Acá va tu código */
// Creo cnstantes para capturar al elemento por su ID de las páginas que quiero que se muestren y oculten.
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
const outputSurnameDecode = document.getElementById('output-surname-decode')
const btnDecode = document.getElementById('btn-decode');
// Creo cnstantes para capturar al elemento por su ID del formulario para cifrar tarjetas.
const inputNumberDecode = document.getElementById('input-number-decode');
const inputCodeDecode = document.getElementById('input-code-decode');
const offsetCarDecode = document.getElementById('offset-card-decode');
const outputNumberDecode = document.getElementById('output-number-decode');
const outputCodeDecode = document.getElementById('output-code-decode')
const btnDecodeCard = document.getElementById('btn-decode-card');

const inputNumberEncode = document.getElementById('input-number-encode');
const inputCodeEncode = document.getElementById('input-code-encode');
const offsetCardEncode = document.getElementById('offset-card-encode');
const outputNumberEncode = document.getElementById('output-number-encode');
const outputCodeEncode = document.getElementById('output-code-encode')
const btnEncodeCard = document.getElementById('btn-encode-card');


pageEncodeName.style.display = 'none';
pageEncodeCard.style.display = 'none';
pageDecodeName.style.display = 'none';
pageDecodeCard.style.display = 'none';

encodeName.addEventListener('click', () => {
  homepage.style.display = 'none';
  pageEncodeName.style.display = 'block';
  pageEncodeCard.style.display = 'none';
  pageDecodeName.style.display = 'none';
  pageDecodeCard.style.display = 'none';
})

encodeCard.addEventListener('click', () => {
  homepage.style.display = 'none';
  pageEncodeName.style.display = 'none';
  pageEncodeCard.style.display = 'block';
  pageDecodeName.style.display = 'none';
  pageDecodeCard.style.display = 'none';
})

decodeName.addEventListener('click', () => {
  homepage.style.display = 'none';
  pageEncodeName.style.display = 'none';
  pageEncodeCard.style.display = 'none';
  pageDecodeName.style.display = 'block';
  pageDecodeCard.style.display = 'none';
})

decodeCard.addEventListener('click', () => {
  homepage.style.display = 'none';
  pageEncodeName.style.display = 'none';
  pageEncodeCard.style.display = 'none';
  pageDecodeName.style.display = 'none';
  pageDecodeCard.style.display = 'block';
})


const functionEncode = (inputN, inputS, offset) => {
  let output = '';
  let output2 = '';
  //Agregue condicionales para offset negativos
  if (offset < 0) {
    let negativeOffset = offset * -1;
    output = window.cipher.decode(inputN, negativeOffset);
    output2 = window.cipher.decode(inputS, negativeOffset);
  } else {
    output = window.cipher.encode(inputN, offset);
    output2 = window.cipher.encode(inputS, offset);
  }
  outputName.innerHTML = output
  outputSuername.innerHTML = output2 /* Aqui estoy asignado el valor que me 
  retorna la función del respectivo objeto con su propiedad que estoy llamando;
  para pintarlo en la variable que representa el id. */

};

btnEncode.addEventListener('click', () => {
  let inputNameValue = inputName.value;
  let offsetValue = parseInt(offset.value);
  let inputSurnameValue = inputSurname.value;
  functionEncode(inputNameValue, inputSurnameValue, offsetValue)
})

const functionDecode = (inputN, inputS, offset) => {
  let output = '';
  let output2 = '';
  if (offset < 0) {
    let negativeOffset = offset * -1;
    output = window.cipher.encode(inputN, negativeOffset);
    output2 = window.cipher.encode(inputS, negativeOffset);
  } else {
    output = window.cipher.decode(inputN, offset);
    output2 = window.cipher.decode(inputS, offset);
  }
  outputNameDecode.innerHTML = output
  outputSurnameDecode.innerHTML = output2
};

btnDecode.addEventListener('click', () => {
  let inputNameValue = inputNameEncode.value;
  let inputSurnameValue = inputSurnameEncode.value
  let offsetValue = parseInt(offsetEncode.value);
  functionDecode(inputNameValue, inputSurnameValue, offsetValue)
})

const functionDecodeCard = (inputNumber, inputCode, offset) => {
  let output = '';
  let output2 = '';
  if (offset < 0) {
    let negativeOffset = offset * -1;
    output = window.cipher.decode(inputNumber, negativeOffset);
    output2 = window.cipher.decode(inputCode, negativeOffset);
  } else {
    output = window.cipher.decode(inputNumber, offset);
    output2 = window.cipher.decode(inputCode, offset);
  }
  outputNumberDecode.innerHTML = output;
  outputCodeDecode.innerHTML = output2;
};

btnDecodeCard.addEventListener('click', () => {
  let inputNumberValue = inputNumberDecode.value;
  let inputCodeValue = inputCodeDecode.value;
  let offsetValue = parseInt(offsetCarDecode.value);
  functionDecodeCard(inputNumberValue, inputCodeValue, offsetValue)
})

const functionEncodeCard = (inputNumber, inputCode, offset) => {
  let output = '';
  let output2 = '';
  if (offset < 0) {
    let negativeOffset = offset * -1;
    output = window.cipher.decode(inputNumber, negativeOffset);
    output2 = window.cipher.decode(inputCode, negativeOffset);
  } else {
    output = window.cipher.encode(inputNumber, offset);
    output2 = window.cipher.encode(inputCode, offset);
  }
  outputNumberEncode.innerHTML = output;
  outputCodeEncode.innerHTML = output2;
};

btnEncodeCard.addEventListener('click', () => {
  let inputNumberValue = inputNumberEncode.value;
  let inputCodeValue = inputCodeEncode.value;
  let offsetValue = parseInt(offsetCardEncode.value);
  functionEncodeCard(inputNumberValue, inputCodeValue, offsetValue)
})







