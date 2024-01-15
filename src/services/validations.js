const isValid = (gamerTag) => {
    const validLength = gamerTag.length >= 8;
    const specialCharacter = /[&$!è§à_]/.test(gamerTag);
    const number = /[0-9]/.test(gamerTag);
    return validLength  && specialCharacter && number;
};

exports.isValid = isValid;