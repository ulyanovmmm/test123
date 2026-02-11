const scene = document.getElementById('scene');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  const isOpen = scene.classList.toggle('open');
  toggleBtn.textContent = isOpen ? 'Закрыть конверт' : 'Открыть конверт';
});
