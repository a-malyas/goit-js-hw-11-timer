timerRef = document.querySelector('#timer-1');

class CountdownTimer {
    constructor({ selector, targetDate, onTick }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.onTick = onTick;
    }

    start() {
        
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);

            this.onTick(time);
        }, 1000);
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
            
        return { days, hours, mins, secs };
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
};
const timer = new CountdownTimer({
    selector: 'timer',
    targetDate: new Date('Sep 01, 2023'),
    onTick: updateTimer
});
    
timer.start();

function updateTimer({ days, hours, mins, secs }) {
    timerRef.textContent = `${days}:${hours}:${mins}:${secs}`;
}
