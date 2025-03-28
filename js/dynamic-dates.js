document.addEventListener("DOMContentLoaded", function() {
    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const today = new Date();

    const event1Date = new Date(today);
    event1Date.setDate(today.getDate() + 14);
    document.getElementById("event-date-1").querySelector("span").textContent = formatDate(event1Date);

    const event2Date = new Date(today);
    event2Date.setDate(today.getDate() + 8);
    document.getElementById("event-date-2").querySelector("span").textContent = formatDate(event2Date);

    const event3Date = new Date(today);
    event3Date.setDate(today.getDate() + 7);
    document.getElementById("event-date-3").querySelector("span").textContent = formatDate(event3Date);

    const event4Date = new Date(today);
    event4Date.setDate(today.getDate() + 15);
    document.getElementById("event-date-4").querySelector("span").textContent = formatDate(event4Date);
});
