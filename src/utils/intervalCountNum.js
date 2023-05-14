export const counter = {
  startCount(item, max = 0, event) {
    if (event.button !== 0) {
      this.stopInterval();
      return;
    }

    this.interval = setInterval(() => {
      if ((item.value < max || max === 0) && event.button === 0) {
        item.value++;
      } else {
        this.stopInterval();
      }
    }, 50);
  },
  stopInterval() {
    clearInterval(this.interval);
    this.interval = null;
  },
  startDecrement(item, min = 0, event) {
    if (event.button !== 0) {
      this.stopInterval();
      return;
    }

    this.interval = setInterval(() => {
      if (item.value > min && event.button === 0) {
        item.value--;
      } else {
        this.stopInterval();
      }
    }, 50);
  },
};
