const isValid = (gamerTag) => {
    const validLength = gamerTag.length >= 8;
    const specialCharacter = /[&$!è§à_]/.test(gamerTag);
    return validLength  && specialCharacter; 
};

exports.isValid = isValid;