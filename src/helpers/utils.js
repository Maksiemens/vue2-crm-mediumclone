export const rangeList = (start, end) => {
  return [...Array(end).keys()].map((item) => ({
    id: item + start,
    label: item + start,
  }));
};
