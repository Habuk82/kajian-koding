/**
 * KAJIAN SANTREN KODING — JAVASCRIPT
 * Interaktivitas, Auto Highlight Hari Ini, & Helper
 */

document.addEventListener('DOMContentLoaded', () => {
  highlightCurrentDay();
});

function highlightCurrentDay() {
  const days = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const todayName = days[new Date().getDay()];
  
  const cards = document.querySelectorAll('.event-card');
  cards.forEach(card => {
    const dayPill = card.querySelector('.day-pill');
    if (dayPill && dayPill.textContent.toLowerCase().includes(todayName.toLowerCase())) {
      dayPill.classList.add('active-day');
      dayPill.innerHTML = `<i class="bi bi-star-fill text-warning"></i> Hari Ini: ${todayName}`;
      card.style.borderColor = '#16a34a';
      card.style.boxShadow = '0 10px 25px -5px rgba(22, 163, 74, 0.2)';
    }
  });
}
