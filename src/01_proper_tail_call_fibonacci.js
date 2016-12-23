function fibonacci (x, y, limit, index) {
  if (arguments.length === 1) {
    if (x) {
      return fibonacci(0, 1, x, 1)
    }
    return 0
  } else {
    if (index < limit) {
      return fibonacci(y, (x + y), limit, ++index)
    }
    return y
  }
}

export { fibonacci }
