/* Acá va tu código */
const inputName = document.getElementById('input-name');
const inputSurname = document.getElementById('input-surname');
const offset = document.getElementById('offset');
const outputName = document.getElementById('output-name');
const btnEncode = document.getElementById('btn-encode');


const functionEncode = (inputN, inputS, offset) => {
  let output = window.cipher.encode(inputN,inputS,offset);
  outputName.innerHTML = output /// para pintar lo que me retorna la función 
};

btnEncode.addEventListener('click', () => {
  let input1 = inputName.value;
  let offset1 = offset.value;
  functionEncode(input1, inputSurname, offset1)
})
