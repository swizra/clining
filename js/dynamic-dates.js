document.addEventListener("DOMContentLoaded", () => {
  const dateElements = [
    "event-date-1",
    "event-date-2",
    "event-date-3",
    "event-date-4"
  ];

  function getSmartEventDate() {
    const today = new Date();
    let targetDate;

    if (today.getDate() < 15) {
      targetDate = new Date(today.getFullYear(), today.getMonth(), 15);
    } else if (today.getDate() < 28) {
      targetDate = new Date(today.getFullYear(), today.getMonth(), 28);
    } else {
      targetDate = new Date(today.getFullYear(), today.getMonth() + 1, 15);
    }
    return targetDate;
  }

  const eventDate = getSmartEventDate();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = eventDate.toLocaleDateString("en-US", options);

  dateElements.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = `<strong>Date:</strong> ${formattedDate}`;
    }
  });
});
