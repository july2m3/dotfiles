const addZero = (i) => (i < 10 ? `0${i}` : i);

const getCurrentTime = () => {
  const d = new Date();
  const m = addZero(d.getMinutes());
  let h = addZero(d.getHours());
  let timeEnding = 'am';

  if (h > 12) {
    h -= 12;
    timeEnding = 'pm';
  }

  console.log(`  ${h}:${m}${timeEnding} `);
};

getCurrentTime();
