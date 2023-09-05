export default function sortBySalary(arr) {
  const sortedArr = arr.sort((a, b) => (a.salary === b.salary ? a.id - b.id : a.salary - b.salary));
  return sortedArr;
}

