document.addEventListener("DOMContentLoaded", function() {
    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const today = new Date();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const currentYear = today.getFullYear();

    document.getElementById("current-month-year").textContent = `${currentMonth} ${currentYear}`;

    const eventDates = [7, 14, 20, 26];

    for (let i = 0; i < eventDates.length; i++) {
        const eventDate = new Date(currentYear, today.getMonth(), eventDates[i]);
        document.getElementById(`event-date-${i + 1}`).querySelector("span").textContent = formatDate(eventDate);
    }
});
