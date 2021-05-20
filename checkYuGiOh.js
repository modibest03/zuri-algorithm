const checkYuGiOh = (n) => {
  if (Array.isArray(n) || typeof n === "object") {
    console.log("invalid parameter");
  }

  if (typeof n === "string") {
    num = +n;
    if (isNaN(num)) {
      console.log("invalid parameter");
    }
  }

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log("yu");
    } else if (i % 3 === 0) {
      console.log("gi");
    } else if (i % 5 === 0) {
      console.log("oh");
    } else {
      console.log(i);
    }
  }
};

checkYuGiOh(5);
