const args = process.argv.slice(2)
const original = args[0]
const obfuscate = function(args) {
  let newPass = ''
  for (let i = 0; i < args.length; i++) {
    if (args[i] == 'a') {
      newPass += '4';
    } else if (args[i] === 'e') {
      newPass += '3';
    } else if (args[i] === 'o') {
      newPass += '0';
    } else if (args[i] === 'l') {
      newPass += '1';
    } else {
      newPass += args[i];
    }
  } 
  console.log(newPass)
};

obfuscate(original)