export function getBarBackground(i: number | null) {
  const activeBg = "rgba(220, 62, 34, 1)";
  const initialArray = [
    "rgba(234, 137, 121, 1)",
    "rgba(234, 137, 121, 1)",
    "rgba(234, 137, 121, 1)",
    "rgba(234, 137, 121, 1)",
    "rgba(234, 137, 121, 1)",
    "rgba(234, 137, 121, 1)",
    "rgba(234, 137, 121, 1)",
  ];
  if (i === null) return initialArray;
  initialArray[i] = activeBg;
  return initialArray;
}
