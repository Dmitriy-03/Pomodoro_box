export function getNumberWeek(date: Date) {
  var date = new Date(date.getTime());

  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  var week1 = new Date(date.getFullYear(), 0, 4);
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
}
//  if (diff >=7 && diff < 14) {
//       stateX.twoWeeksAgo = stateX.lastWeek.map((day) => day);
//       stateX.lastWeek = stateX.currentWeek.map((day) => day);
//       stateX.currentWeek = initialState.currentWeek.map((day) => day);
//     }
//     if (diff >=14 && diff < 21) {
//       stateX.twoWeeksAgo = stateX.currentWeek.map((day) => day);
//       stateX.twoWeeksAgo = stateX.twoWeeksAgo.map((day) => day);
//       stateX.currentWeek = initialState.currentWeek.map((day) => day);
//     }
