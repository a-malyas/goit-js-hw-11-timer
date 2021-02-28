timerRef = document.querySelector('#timer-1');

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.daysRef = document.querySelector('[data-value="days"]');
        this.hoursRef = document.querySelector('[data-value="hours"]');
        this.minsRef = document.querySelector('[data-value="mins"]');
        this.secsRef = document.querySelector('[data-value="secs"]');
    }

    start() {
        
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);
        }, 1000);
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        this.daysRef.textContent = days;
        this.hoursRef.textContent = hours;
        this.minsRef.textContent = mins;
        this.secsRef.textContent = secs;
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
};
const timer = new CountdownTimer({
    selector: timerRef,
    targetDate: new Date('Sep 01, 2023')
});

timer.start();

