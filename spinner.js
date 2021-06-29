const setSpinner = (time, interval) => {
  const end = new Date().getTime() + time;
  const frames = ['\\', '|', '/', '—'];
  const spin = (interval, frames, i) => {
    if (new Date().getTime() < end) {
      setTimeout(() => {
        spin(interval, frames, (i + 1) % frames.length);
        process.stdout.write(`\r${frames[i]} `);
      }, interval);
    } else {
      setTimeout(() => process.stdout.write('\n'), interval);
    }
  };
  spin(interval, frames, 0);
};

setSpinner(+process.argv[2] || 3000, +process.argv[3] || 50);
