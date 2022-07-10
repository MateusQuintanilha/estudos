(() => {
    const clockContainer = document.getElementById('clock-circle');
    const clock = document.createElement('div');
    clock.setAttribute('class', 'clock-circle-intern grid');

    const createTrace = (tag) => {
        for(let i = 1; i <= 60; i++) {
            tag.innerHTML += `
                <span class="border-row br-${i}" style="--i:${i}">
                    <span class="ponto"></span>
                </span>
            `;
        }
        createClockHand(tag);
    }

    const createClockHand = (tag) => {
        tag.innerHTML += `
            <div class="clock-rounder"></div>
            <div id="clock_hour" class="clock-hour"></div>
            <div id="clock_minutes" class="clock-minutes"></div>
            <div id="clock_seconds" class="clock-seconds"></div>
            
        `;
    }

    createTrace(clock);
    clockContainer.appendChild(clock)
})();