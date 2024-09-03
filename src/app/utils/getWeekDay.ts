export function getWeekDay(date: Date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[date.getDay()];
}
// export function getWeekDayNameByIndex(index: number) {
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   return days[index];
// }
export function getWeekDayNameByIndex(index: number) {
  let days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  return days[index];
}

export function getWeekDayIndexByName(dayName: string): number {
  let days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  for (let i = 0; i < days.length; i++) {
    if (days[i].includes(dayName)) {
      return i;
    }
  }
  return 0;
}
