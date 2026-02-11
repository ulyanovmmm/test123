function initEnvelopeToggle() {
  const scene = document.getElementById('scene');
  const toggleBtn = document.getElementById('toggleBtn');

  if (!scene || !toggleBtn) {
    console.warn('Envelope UI not found: #scene or #toggleBtn is missing.');
    return;
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = scene.classList.toggle('open');
    toggleBtn.textContent = isOpen ? 'Закрыть конверт' : 'Открыть конверт';
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEnvelopeToggle);
} else {
  initEnvelopeToggle();
}
