window.cipher = {
  encode: (input, offset) => {
    let output = '';
    for (let i = 0; i < input.length; i++) {
      const codeAscci = input.charCodeAt(i);
      if(codeAscci >=65 && codeAscci<=90) {
        const formula = String.fromCharCode((codeAscci - 65 + offset) % 26 + 65);
        output += formula;
      } else if(codeAscci>=97&&codeAscci<=122) {
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
  },
  decode: (input,offset) => {
    let output= '';
    for (let i = 0; i < input.length; i++) {
      const codeAscci = input.charCodeAt(i);
      if(codeAscci >= 65 && codeAscci <= 90 ) {
        const formula = (codeAscci - 65 - offset % 26)  % 26 + 65;
        let newLetter = String.fromCharCode(formula < 65 ? formula + 26 : formula);
        output += newLetter;
      } else if (codeAscci >= 97 && codeAscci <= 122) {
        const formula = (codeAscci - 97 - offset % 26) % 26 + 97;
        let newLetter = String.fromCharCode(formula < 97 ? formula + 26 : formula);
        output += newLetter;
      } else if (codeAscci >= 33 && codeAscci <= 64){
        const formula = (codeAscci - 33 - offset % 31)% 31 + 33;
        let newLetter = String.fromCharCode(formula < 33 ? formula + 31 : formula);
        output += newLetter;
      }else {
        output +=String.fromCharCode(codeAscci);
      }
    }
    return output;
  }
};

