function caesarEncode(text) {
  let characters = [];

  for (let i = 0; i < text.length; i++) {
    characters.push(text.charCodeAt(i));
  }
  let output = characters.map((c) => {
    if (checkRange(c)) {
      c = c + 1;
      if (!checkRange(c)) c = c - 25;
      return c;
    }
    return c;
  });
  return String.fromCharCode(...output);
}

function checkRange(char) {
  return (char >= 65 && char <= 90) || (char >= 97 && char <= 122);
}

module.exports = caesarEncode;
