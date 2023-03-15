let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseListRecursion(list) {
  if (list.next) {
    printReverseListRecursion(list.next);
  }

  console.log('Recursion value: ' + list.value);
}

function printReverseListCycle(list) {
  let arr = [];
  let newList = list;

  while (newList) {
    arr.push(newList.value);
    newList = newList.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log('Cycle value: ' + arr[i]);
  }
}

printReverseListRecursion(list);
printReverseListCycle(list);