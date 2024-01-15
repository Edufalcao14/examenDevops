

const isValid = (gamerTag) => {
    const validLength = gamerTag.length >= 8; 

    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];
     specialCharacters.some(char => gamerTag.includes(char));

    return validLength && specialCharacters;  
};

exports.isValid = isValid;