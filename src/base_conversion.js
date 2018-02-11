function base_converter(value, source, target) {
  return to_any(to_decimal(value, source), target)

  function to_decimal(value, source) {
    const base = source.length
    return value.split("").reduce(
      (acc, ele) => acc * base + source.indexOf(ele),
      0
    )
  }

  function to_any(sum, target) {
    const base = target.length
    let answer = ""
    for (let digit = 0; sum > 0; sum = (sum - digit)/base) {
      digit = sum % base
      answer = target[digit] + answer
    }
    return answer ? answer : target[sum]
  }
}

module.exports = base_converter
