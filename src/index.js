/* Acá va tu código */

// Los ids de los formularios se guardan en constantes para luego ser manipulados. 
const inputName = document.getElementById('input-name');
const inputSurname = document.getElementById('input-surname');
const offset = document.getElementById('offset');
const outputName = document.getElementById('output-name');
const outputSuername = document.getElementById('output-surname');
const btnEncode = document.getElementById('btn-encode');
const inputNameEncode = document.getElementById('input-name-encode');
const inputSurnameEncode = document.getElementById('input-surname-encode');
const offsetEncode = document.getElementById('offset-encode');
const outputNameDecode = document.getElementById('output-name-decode');
const outputSurnameDecode =document.getElementById('output-surname-decode')
const btnDecode = document.getElementById('btn-decode');
const inputNumberDecode = document.getElementById('input-number-decode');
const inputCodeDecode = document.getElementById('input-code-decode');
const offsetCarDecode = document.getElementById('offset-card-decode'); 
const outputNumberDecode = document.getElementById('output-number-decode');
const outputCodeDecode = document.getElementById('output-code-decode')
const btnDecodeCard =document.getElementById('btn-decode-card');
const inputNumberEncode = document.getElementById('input-number-encode');
const inputCodeEncode = document.getElementById('input-code-encode');
const offsetCardEncode = document.getElementById('offset-card-encode'); 
const outputNumberEncode = document.getElementById('output-number-encode');
const outputCodeEncode = document.getElementById('output-code-encode')
const btnEncodeCard =document.getElementById('btn-encode-card');


if(btnEncode){
const functionEncode = (inputN, inputS, offset) => {
  let output = window.cipher.encode(inputN, offset);
  let output2 = window.cipher.encode(inputS, offset);
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
} else if (btnDecode) {
const functionDecode = (inputN, inputS, offset) => {
  let output = window.cipher.decode(inputN,offset);
  let output2 = window.cipher.decode(inputS,offset);
  outputNameDecode.innerHTML = output
  outputSurnameDecode.innerHTML = output2
};
 
  btnDecode.addEventListener('click', () => {
    let inputNameValue = inputNameEncode.value;
    let inputSurnameValue = inputSurnameEncode.value
    let offsetValue = parseInt(offsetEncode.value);
    functionDecode(inputNameValue, inputSurnameValue, offsetValue)
  })
} else if (btnDecodeCard) {
  const functionDecodeCard = (inputNumber,inputCode,offset) =>{ 
    let output = window.cipher.decode(inputNumber,offset);
    let output2 = window.cipher.decode(inputCode,offset);
    outputNumberDecode.innerHTML = output;
    outputCodeDecode.innerHTML = output2;
  };

  btnDecodeCard.addEventListener('click',()=>{
    let inputNumberValue = inputNumberDecode.value;
    let inputCodeValue = inputCodeDecode.value;
    let offsetValue = offsetCarDecode.value;
    functionDecodeCard(inputNumberValue,inputCodeValue,offsetValue)
  })
} else {
  const functionEncodeCard = (inputNumber,inputCode,offset) =>{ 
    let output = window.cipher.encode(inputNumber,offset);
    let output2 = window.cipher.encode(inputCode,offset);
    outputNumberEncode.innerHTML = output;
    outputCodeEncode.innerHTML = output2;
  };

  btnEncodeCard.addEventListener('click',()=>{
    let inputNumberValue = inputNumberEncode.value;
    let inputCodeValue = inputCodeEncode.value;
    let offsetValue = offsetCardEncode.value;
    functionEncodeCard(inputNumberValue,inputCodeValue,offsetValue)
  })
}


 



