/*
stuff


*/
const getWeekDay = (currentDay) => {
  switch (currentDay) {
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tue';
    case 3:
      return 'Wed';
    case 4:
      return 'Thu';
    case 5:
      return 'Fri';
    case 6:
      return 'Sat';
    default:
  }
  return 'Err';
};

const getMonth = (currentMonth) => {
  switch (currentMonth) {
    case 0:
      return 'Jan';
    case 1:
      return 'Feb';
    case 2:
      return 'Mar';
    case 3:
      return 'Apr';
    case 4:
      return 'May';
    case 5:
      return 'Jun';
    case 6:
      return 'Jul';
    case 7:
      return 'Aug';
    case 8:
      return 'Sep';
    case 9:
      return 'Oct';
    case 10:
      return 'Nov';
    case 11:
      return 'Dec';
    default:
      return 'Err';
  }
};

const showCurrentDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');

  const currentDay = getWeekDay(today.getDay());
  const currentMonth = getMonth(today.getMonth());

  console.log(` ${currentDay} ${dd} ${currentMonth}  `);
};

showCurrentDate();
