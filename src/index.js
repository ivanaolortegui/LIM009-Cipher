/* Acá va tu código */
const inputName = document.getElementById('input-name');
const inputSurname = document.getElementById('input-surname');
const offset = document.getElementById('offset');
const outputName = document.getElementById('output-name');
const btnEncode = document.getElementById('btn-encode');


const encode = (inputN, inputS, offset) => {
  
  let output = '';
  for (let i = 0; i < inputN.length; i++) {
    const codeUni = inputN.charCodeAt(i);
    const formula = String.fromCharCode((codeUni - 65 + offset) % 26 + 65);
    output += formula;
  }
  outputName.innerHTML = output /// para pintar lo que me retorna la función 
};

btnEncode.addEventListener('click', () => {
  const input1 = inputName.value;
  const offset1 = offset.value;
  encode(input1, inputSurname, offset1)
})
