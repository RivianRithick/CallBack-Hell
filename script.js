const countdown = (num, callback) => {
  if (num > 0) {
    setTimeout(() => {
      document.getElementById("text").innerText = num;
      countdown(num - 1, callback);
    }, 1000);
  } else {
    callback();
  }
};

countdown(10, () => {
  document.getElementById("text").innerText = "Happy Independence Day";
});
