const convertFormValuesToNumbers = values => {
    const keys = Object.keys(values);
    keys.forEach(key => (values[key] = Number(values[key])));
    return values;
  };

export default convertFormValuesToNumbers