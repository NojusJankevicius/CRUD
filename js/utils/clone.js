const clone = (original) => {
    if (typeof original !== 'object') return original;
  
    const copy = original instanceof Array ? [] : {};
    for (const key in original) {
      copy[key] = clone(original[key])
    }
    return copy;
}