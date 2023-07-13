export function formatDate(date: Date) {

    const _hour = date.getHours();
    const hour = (_hour < 10 ? "0" : "") + _hour;

    const _min  = date.getMinutes();
    const min = (_min < 10 ? "0" : "") + _min;

    const _sec  = date.getSeconds();
    const sec = (_sec < 10 ? "0" : "") + _sec;

    const year = date.getFullYear();

    const _month = date.getMonth() + 1;
    const month = (_month < 10 ? "0" : "") + _month;

    const _day  = date.getDate();
    const day = (_day < 10 ? "0" : "") + _day;

    return year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec;

}