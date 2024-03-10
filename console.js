//this is a test bro
function encodeMessage(message) {
  const key = 13; // Shift each letter by this number
  let encodedMessage = "";
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    // Check for uppercase and lowercase letters
    if (char >= 'a' && char <= 'z') {
      char = String.fromCharCode(((char.charCodeAt(0) - 'a' + key) % 26) + 'a');
    } else if (char >= 'A' && char <= 'Z') {
      char = String.fromCharCode(((char.charCodeAt(0) - 'A' + key) % 26) + 'A');
    }
    encodedMessage += char;
  }
  return encodedMessage;
}

const message = "This is a secret message!";
const encodedMessage = encodeMessage(message);

console.log("Original message:", message);
console.log("Encoded message:", encodedMessage);
//is gemini>>>GPT?
