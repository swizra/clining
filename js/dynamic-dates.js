document.addEventListener("DOMContentLoaded", function() {
    // Helper function to format the date in "Month Day, Year" format
    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    // Get today's date
    const today = new Date();

    // Event 1: Add 14 days from today
    const event1Date = new Date(today);
    event1Date.setDate(today.getDate() + 14);  // Adding 14 days
    document.getElementById("event-date-1").querySelector("strong").textContent = "Date:";
    document.getElementById("event-date-1").querySelector("span").textContent = formatDate(event1Date);

    // Event 2: Add 8 days from today
    const event2Date = new Date(today);
    event2Date.setDate(today.getDate() + 8);  // Adding 8 days
    document.getElementById("event-date-2").querySelector("strong").textContent = "Date:";
    document.getElementById("event-date-2").querySelector("span").textContent = formatDate(event2Date);

    // Event 3: Add 7 days from today
    const event3Date = new Date(today);
    event3Date.setDate(today.getDate() + 7);  // Adding 7 days
    document.getElementById("event-date-3").querySelector("strong").textContent = "Date:";
    document.getElementById("event-date-3").querySelector("span").textContent = formatDate(event3Date);

    // Event 4: Add 15 days from today
    const event4Date = new Date(today);
    event4Date.setDate(today.getDate() + 15);  // Adding 15 days
    document.getElementById("event-date-4").querySelector("strong").textContent = "Date:";
    document.getElementById("event-date-4").querySelector("span").textContent = formatDate(event4Date);
});
