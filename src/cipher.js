window.cipher = {
  encode: (inputName,inputSurname,offset) => {
    let output = '';
    for (let i = 0; i < inputName.length; i++) {
      const codeUni = inputName.charCodeAt(i);
      if(codeUni>=65 && codeUni<=90) {
        const formula = String.fromCharCode((codeUni - 65 + offset) % 26 + 65);
        output += formula;
      } else if(codeUni>=97&&codeUni<=122){
        const formula = String.fromCharCode((codeUni - 97 + offset) % 26 + 97);
        output += formula;
      } else if(codeUni >= 33 && codeUni<= 64) {
        const formula = String.fromCharCode((codeUni-33 + offset)%31 + 33);
        output +=formula;
      } else {
        output +=String.fromCharCode(codeUni);
      }
    }
    return output;
  },
  decode: (inputName,inputSurname,offset) => {
    let output= '';
    for (let i = 0; i < inputName.length; i++) {
    const codeUni = inputName.charCodeAt(i);
      const formula = String.fromCharCode((codeUni - 65 - offset) % 26 + 65);
      output += formula; 
    }
    return output;
  }
};
