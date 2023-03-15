function printNumbersInterval(from, to) {
  let start = from;

  const interval = setInterval(() => {
    console.log(start);

    if(start === to) {
      clearInterval(interval);
    }

    start++;
  }, 1000);

}

printNumbersInterval(2, 5);

function printNumbersTimeout(from, to) {
  let start = from;

  setTimeout(function go() {
    console.log(start);

    if (start < to) {
      setTimeout(go, 1000);
    }

    start++;
  }, 1000);
}

printNumbersTimeout(2, 5);