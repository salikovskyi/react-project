import moment from "moment";

export function convertDate(date) {
  return moment(date).format("YYYY-MM-DD");
}
