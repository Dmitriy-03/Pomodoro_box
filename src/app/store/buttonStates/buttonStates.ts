import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IButtonStates {
  isStopButtonHovered: boolean;
  isReadyButtonHovered: boolean;
  isWeekSelectMenuClicked: boolean;
  isChangedTomatoCountByMenu: boolean;
  isChangedTomatoCountByTimer: boolean;
}

const initialState: IButtonStates = {
  isStopButtonHovered: false,
  isReadyButtonHovered: false,
  isWeekSelectMenuClicked: false,
  isChangedTomatoCountByMenu: false,
  isChangedTomatoCountByTimer: false,
};

const buttonStatesSlice = createSlice({
  name: "buttonStates",
  initialState,
  reducers: {
    changeStopBtnHoverState: {
      reducer(state, action: PayloadAction<boolean>) {
        state.isStopButtonHovered = action.payload;
      },
      prepare(btnState: boolean) {
        return {
          payload: btnState,
        };
      },
    },
    changeReadyBtnHoverState: {
      reducer(state, action: PayloadAction<boolean>) {
        state.isStopButtonHovered = action.payload;
      },
      prepare(btnState: boolean) {
        return {
          payload: btnState,
        };
      },
    },
    changeWeekSelectMenuClickedState: {
      reducer(state, action: PayloadAction<boolean>) {
        state.isWeekSelectMenuClicked = action.payload;
      },
      prepare(btnState: boolean) {
        return {
          payload: btnState,
        };
      },
    },
    changeChangedByMenuState: {
      reducer(state, action: PayloadAction<boolean>) {
        state.isChangedTomatoCountByMenu = action.payload;
      },
      prepare(btnState: boolean) {
        return {
          payload: btnState,
        };
      },
    },
    changeChangedByTimerState: {
      reducer(state, action: PayloadAction<boolean>) {
        state.isChangedTomatoCountByTimer = action.payload;
      },
      prepare(btnState: boolean) {
        return {
          payload: btnState,
        };
      },
    },
  },
});

export const {
  changeStopBtnHoverState,
  changeReadyBtnHoverState,
  changeChangedByMenuState,
  changeChangedByTimerState,
  changeWeekSelectMenuClickedState,
} = buttonStatesSlice.actions;

export default buttonStatesSlice.reducer;
