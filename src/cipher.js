window.cipher = {
  encode: (input, offset) => {
    let output = '';
    for (let i = 0; i < input.length; i++) {
      const codeAscci = input.charCodeAt(i);
      if(codeAscci >=65 && codeAscci<=90) {
        let sumOffset = offset % 26 ===0 ? offset + 5 : offset;
        const formula = String.fromCharCode((codeAscci - 65 + sumOffset )% 26 + 65);
        output += formula;
      } else if(codeAscci>=97&&codeAscci<=122) {
        let sumOffset = offset % 26 ===0 ? offset + 5 : offset;
        const formula = String.fromCharCode((codeAscci - 97 + sumOffset) % 26 + 97);
        output += formula;
      } else if(codeAscci >= 48 && codeAscci <= 57) {
        let sumOffset =offset % 10 ===0 ? offset + 5 : offset;
        const formula = String.fromCharCode((codeAscci- 48 + sumOffset) % 10 + 48);
        output +=formula;
      } else {
        output +=String.fromCharCode(codeAscci);
      }
    }
     return output;
  },
  decode: (input,offset) => {
    let output= '';
    for (let i = 0; i < input.length; i++) {
      const codeAscci = input.charCodeAt(i);
      if(codeAscci >= 65 && codeAscci <= 90 ) {
        let sumOffset = offset % 26 ===0 ? offset + 5 : offset;
        const formula = (codeAscci - 65 - sumOffset % 26)  % 26 + 65;
        let newLetter = String.fromCharCode(formula < 65 ? formula + 26 : formula);
        output += newLetter;
      } else if (codeAscci >= 97 && codeAscci <= 122) {
        let sumOffset = offset % 26 ===0 ? offset + 5 : offset;
        const formula = (codeAscci - 97 - sumOffset % 26) % 26 + 97;
        let newLetter = String.fromCharCode(formula < 97 ? formula + 26 : formula);
        output += newLetter;
      } else if (codeAscci >= 48 && codeAscci <= 57){
        let sumOffset =offset % 10 ===0 ? offset + 5 : offset;
        const formula = (codeAscci - 48 - sumOffset % 10)% 10 + 48;
        let newLetter = String.fromCharCode(formula < 48 ? formula + 10 : formula);
        output += newLetter;
      }else {
        output +=String.fromCharCode(codeAscci);
      }
    }
    return output;
  }
};

