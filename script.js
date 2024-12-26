function updateClock() {
  const dayElement = document.getElementById("day");
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");

  const weekDay = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"][
    now.getDay()
  ];

  // let hours = now.getHours().toString().padStart(2, "0");

  let hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const amPm = hours >= 12 ? "PM" : "AM";

  //convert to 12-hour clock format
  hours = hours % 12 || 12;
  const formattedHours = String(hours).padStart(2, "0");

  dayElement.textContent = `${weekDay}`;
  dateElement.textContent = `${year} - ${month} - ${day}`;
  timeElement.textContent = `${formattedHours}:${minutes}:${seconds} ${amPm}`;

  //To update clock every second
  setInterval(updateClock, 1000);
  //or
  // setTimeout(updateClock, 1000);
}

//Initialize the clock
updateClock();
