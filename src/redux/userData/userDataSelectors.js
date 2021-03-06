import { convertDate } from "../../utils/helpers/convertDate";

export const daySummary = (state) => state.userData.daySummary;
export const todaySummaries = (state) =>
  state.userData.summaries.find((day) => day.date === convertDate(new Date()));
export const notAllowedProducts = (state) =>
  state.userData.unauthData.notAllowedProducts;
export const ownNotAllowedProducts = (state) =>
  state.userData.notAllowedProducts;
export const getUserData = (state) => state.userData.daySummary;
export const isModalOpen = (state) => state.userData.isModalOpen;
export const calRate = (state) => state.userData.unauthData.dailyRate;
export const getEatenProducts = (state) => state.userData.eatenProducts;
export const getDayId = (state) => state.userData.dayId;
export const getRootClass = (state) => state.userData.rootClass;
export const getFirstEntry = (state) => state.userData.firstEntry;
export const getIsDaySummaryExist = (state) =>
  Boolean(state.userData.daySummary._id);
export const getCurrentDate = (state) => state.userData.currentDate;
export const getPickedDate = (state) => state.userData.pickedDate;
