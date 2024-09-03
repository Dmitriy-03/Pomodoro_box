export function getTimeFromMs(
  timeInMs: number,
  abbreviated: boolean = false
): string {
  const hours = Math.floor(timeInMs / 3600);
  const minutes = Math.round((timeInMs - hours * 3600) / 60);
  let result;
  if (timeInMs < 60) {
    return (result = abbreviated ? `${timeInMs}с` : `${timeInMs} секунд`);
    // return result;
  } else if (timeInMs < 3600) {
    return (result = abbreviated
      ? `${timeInMs / 60}м`
      : `${timeInMs / 60} мин`);
  } else if (timeInMs >= 3600) {
    return (result = abbreviated
      ? `${hours}ч ${minutes}м`
      : `${hours} часов ${minutes} минут`);
  } else {
    return `${timeInMs}с`;
  }
}
