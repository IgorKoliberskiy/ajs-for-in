export default function orderByProps(obj, sorting) {
  const sortArr = [];
  const finalArr = [];

  sorting.forEach((elem) => {
    sortArr.push({ key: elem, value: obj[elem] });
  });

  for (const elem in obj) {
    if (!sorting.includes(elem)) {
      finalArr.push({ key: elem, value: obj[elem] });
    }
  }

  finalArr.sort((a, b) => ((a.key > b.key) ? 1 : -1));

  return sortArr.concat(finalArr);
}
