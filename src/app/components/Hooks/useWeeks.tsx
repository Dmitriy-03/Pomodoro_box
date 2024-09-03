import { useAppSelector } from "./useAppDispatch";

export function useWeeks() {
  const isCurrentWeek = useAppSelector((state) => state.weeks.currentWeek);
  const isLastWeek = useAppSelector((state) => state.weeks.lastWeek);
  const isTwoWeekAgo = useAppSelector((state) => state.weeks.twoWeeksAgo);
  return {
    isCurrentWeek,
    isLastWeek,
    isTwoWeekAgo,
  };
}
