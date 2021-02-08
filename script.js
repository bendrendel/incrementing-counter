const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';
    const target = Number(counter.getAttribute('data-target'));
    const increment = Math.round(target / 200);

    const updateCounter = () => {
        const c = Number(counter.innerText);

        if (c < target - increment) {
            counter.innerText = `${c + increment}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})