const isValid = (gamerTag) => {
    const validLength = gamerTag.length >= 8;
    return validLength  
};

exports.isValid = isValid;