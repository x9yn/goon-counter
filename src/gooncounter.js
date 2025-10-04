let count = 0;
  const countDisplay = document.getElementById('count');
  const logBox = document.getElementById('logBox');
  const button = document.getElementById('clickButton');
  const clearButton = document.getElementById('clearButton');
  window.onload = function() {
    const savedCount = localStorage.getItem('clickCount');
    const savedLogs = localStorage.getItem('clickLogs');
    if (savedCount) {
      count = parseInt(savedCount);
      countDisplay.textContent = count;
    }
    if (savedLogs) {
      logBox.innerHTML = `<strong>goon times:</strong>` + savedLogs;
    }
  };
  button.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
    const now = new Date();
    const time = now.toLocaleTimeString();
    const entry = document.createElement('div');
    entry.classList.add('entry');
    entry.innerHTML = `<span>#${count}</span><span>${time}</span>`;
    logBox.appendChild(entry);

    localStorage.setItem('clickCount', count);
    localStorage.setItem('clickLogs', logBox.innerHTML.replace('<strong>goon times:</strong>', ''));
  });
  clearButton.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
    logBox.innerHTML = "<strong>goon times:</strong>";
    localStorage.removeItem('clickCount');
    localStorage.removeItem('clickLogs');
  });
