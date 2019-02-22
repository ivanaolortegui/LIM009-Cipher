window.cipher = {
  encode: (inputName,inputSurname,offset) => {
    let output = '';
    for (let i = 0; i < inputName.length; i++) {
      const codeUni = inputName.charCodeAt(i);
      const formula = String.fromCharCode((codeUni - 65 + offset) % 26 + 65);
      output += formula;
  }
  return output
    /* Acá va tu código */
  },
  decode: () => {
    /* Acá va tu código */
  }
};
