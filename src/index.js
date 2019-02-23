/* Acá va tu código */
const inputName = document.getElementById('input-name');
const inputSurname = document.getElementById('input-surname');
const offset = document.getElementById('offset');
const outputName = document.getElementById('output-name');

const btnEncode = document.getElementById('btn-encode');
const inputNameEncode = document.getElementById('input-name-encode');
const inputSurnameEncode = document.getElementById('input-surname-encode');
const offsetEncode = document.getElementById('offset-encode');
const outputNameDecode = document.getElementById('output-name-decode');
const btnDecode = document.getElementById('btn-decode');

const functionEncode = (inputN, inputS, offset) => {
  let output = window.cipher.encode(inputN,inputS,offset);
  outputName.innerHTML = output /// para pintar lo que me retorna la función 
};
const functionDecode = (inputN, inputS, offset) => {
  let output = window.cipher.decode(inputN,inputS,offset);
  outputNameDecode.innerHTML = output
};

btnDecode.addEventListener('click', () => {
  let input1 = inputNameEncode.value;
  let offset1 = offsetEncode.value;
  functionDecode(input1, inputSurnameEncode, offset1)
})

 btnEncode.addEventListener('click', () => {
  let input1 = inputName.value;
  let offset1 = offset.value;
  functionEncode(input1, inputSurname, offset1)
}) 




