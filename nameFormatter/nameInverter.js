const nameInverter = function (name) {
  if (name === undefined) {
    return "throw 'Error'";
  }

  if (name === '') {
    return '';
  }
  name = name.trim();

  if (name === "Dr.") {
    return "";
  }

  const splittedValues = name.split(" ");

  if (splittedValues.length > 1 && !name.includes('Dr.')) {
    return splittedValues.reverse().join(", ")
  } else if (splittedValues.length > 1 && name.includes('Dr.')) {
    const honorific = splittedValues.shift();
    return honorific + ' ' + splittedValues.reverse().join(", ")
  }
  return name;
}

module.exports = nameInverter;