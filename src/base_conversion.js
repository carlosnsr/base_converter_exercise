function base_converter(value, source, target) {
  // First convert the value into decimal,
  // Then convert the decimal into the target alphabet
  return to_any(to_decimal(value, source), target)

  // Converts the value string to a decimal number and returns that number.
  // NOTE: the length of the source alphabet is the base power of that alphabet
  function to_decimal(value, source) {
    const base = source.length
    return value.split("").reduce(
      (acc, ele) => acc * base + source.indexOf(ele),
      0
    )
  }

  // Given a decimal sum, converts that into another number of any alphabet
  function to_any(sum, target) {
    const base = target.length
    if (sum < base)
      return target[sum]

    let answer = ""
    for (let digit = 0; sum > 0; sum = (sum - digit)/base) {
      digit = sum % base
      answer = target[digit] + answer
    }
    return answer
  }
}

module.exports = base_converter
