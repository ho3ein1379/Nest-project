export const timerHelper = (end: string | undefined) => {
        const endDate = new Date(end).getTime();
        const currentDate = new Date().getTime();

        const timeRemaining = endDate - currentDate;

        const timeobj = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (timeRemaining > 0) {
            timeobj.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            timeobj.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            timeobj.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            timeobj.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        }
        return timeobj;
}