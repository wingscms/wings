export default (base, scaleRatio, steps) => {
  let size = base;
  for (let step = 0; step < steps; step++) {
    size = size * scaleRatio;
  }
  const result = size.toFixed(2);
  return result > base ? result : base;
};
