import separateUnit from './separateUnit';

export default (base, scaleRatio, steps) => {
  const [size, unit = ''] = separateUnit(base);
  let newSize = Number(size);
  for (let step = 0; step < steps; step++) {
    newSize = newSize * scaleRatio;
  }
  const result = newSize.toFixed(2);
  return result > base ? result + unit : base + unit;
};
