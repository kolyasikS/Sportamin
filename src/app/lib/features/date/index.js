export const nameDayOfWeek = (number) => {
    switch (number) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
        default:
            console.log('Some error...')
            return null;
    }
}

export const getDateDifference = (dateOne, dateSecond) => {
    if (!dateSecond) {
        dateSecond = new Date();
    }
    const differenceInMilliseconds = Math.abs(dateSecond - dateOne);
    const differenceInSeconds = differenceInMilliseconds / 1000;
    const differenceInMinutes = differenceInSeconds / 60;
    if (Math.trunc(differenceInMinutes) < 1) {
        return {
            diff: Math.trunc(differenceInSeconds),
            term: 'seconds'
        };
    }

    const differenceInHours = differenceInMinutes / 60;
    if (Math.trunc(differenceInHours) < 1) {
        return {
            diff: Math.trunc(differenceInMinutes),
            term: 'minutes'
        };
    }

    const differenceInDays = differenceInHours / 24;
    if (Math.trunc(differenceInDays) < 1) {
        return {
            diff: Math.trunc(differenceInHours),
            term: 'hours'
        };
    }

    const differenceInMonths = differenceInDays / (365 / 12);
    if (Math.trunc(differenceInMonths) < 1) {
        return {
            diff: Math.trunc(differenceInDays),
            term: 'days'
        };
    }

    const differenceInYears = differenceInMonths / 12;

    if (Math.trunc(differenceInYears) < 1) {
        return {
            diff: Math.trunc(differenceInMonths),
            term: 'months'
        };
    }
}
export const getCurrentTimeFromStamp = (timestamp) => {
    let date = new Date(timestamp);
/*    let currentTime = {
        year: date.getFullYear(),
        month: date.getMonth(),
        days: date.getDate(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };*/
    return date;
}
