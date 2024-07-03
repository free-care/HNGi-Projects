document.addEventListener('DOMContentLoaded', () => {
  const currentTimeElement = document.getElementById('current-time');
  const currentDayElement = document.getElementById('current-day');

  function updateTime() {
      const now = new Date();
      const utcTime = now.toUTCString().split(' ')[4];
      const day = now.toLocaleString('en-us', { weekday: 'long' });

      currentTimeElement.textContent = utcTime;
      currentDayElement.textContent = day;
  }

  setInterval(updateTime, 1000);
  updateTime();
});
