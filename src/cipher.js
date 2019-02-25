window.cipher = {
  encode: (inputName,inputSurname,offset) => {
    let output = '';
    let output2 = '';
    for (let i = 0; i < inputName.length; i++) {
      const codeAscci = inputName.charCodeAt(i);
      if(codeAscci >=65 && codeAscci<=90) {
        const formula = String.fromCharCode((codeAscci - 65 + offset) % 26 + 65);
        output += formula;
      } else if(codeAscci>=97&&codeAscci<=122){
        const formula = String.fromCharCode((codeAscci - 97 + offset) % 26 + 97);
        output += formula;
      } else if(codeAscci >= 33 && codeAscci<= 64) {
        const formula = String.fromCharCode((codeAscci-33 + offset)%31 + 33);
        output +=formula;
      } else {
        output +=String.fromCharCode(codeAscci);
      }
     
    }
     return output;
    for (let i = 0; i < inputSurname.length; i++) {
      const codeAscci = inputSurname.charCodeAt(i);
      if(codeAscci>=65 && codeAscci<=90) {
        const formula = String.fromCharCode((codeAscci - 65 + offset) % 26 + 65);
        output2 += formula;
      } else if(codeAscci>=97&&codeAscci<=122){
        const formula = String.fromCharCode((codeAscci - 97 + offset) % 26 + 97);
        output2 += formula;
      } else if(codeAscci >= 33 && codeAscci<= 64) {
        const formula = String.fromCharCode((codeAscci-33 + offset)%31 + 33);
        output2 +=formula;
      } else {
        output2 +=String.fromCharCode(codeAscci);
      }
    }
    return output2;


  },
  decode: (inputName,inputSurname,offset) => {
    let output= '';
    for (let i = 0; i < inputName.length; i++) {
    const codeAscci = inputName.charCodeAt(i);
      const formula = String.fromCharCode((codeAscci - 65 - offset %26) % 26 + 65);
      output += formula; 
    }
    return output;
  }
};
