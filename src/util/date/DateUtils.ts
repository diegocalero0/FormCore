import moment from "moment";

export const DateUtils = {
    getCurrentISODateString(): string {
        return moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');
    }
}