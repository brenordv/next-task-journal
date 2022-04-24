/**
 * Returns true if value is part of the enum e. False otherwise.
 * @param e: enum to be used in the verification
 * @param {any} value: value to be checked against the enum.
 * @returns {boolean}
 * */
export const isValidEnumValue = <T>(e: T, value: any): boolean => {
    return (<any>Object).values(e).includes(value);
}

/**
 * Returns a date object formatted as DD/MM/YYYY[ hh:mm:ss].
 *
 * @param dt: Date to be converted.
 * @param includeTime: if true, will also return time information. (default true)
 * @returns {string}
 * */
export const dateToString = (dt: Date, includeTime: boolean): string => {
    const date = new Date(dt);
    const dateStr = `${date.getDate().toString().padStart(2, "0")}/${date.getMonth().toString().padStart(2, "0")}/${date.getFullYear()}`;
    if (includeTime) {
        const time = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
        return `${dateStr} ${time}`;
    }
    return dateStr;
}