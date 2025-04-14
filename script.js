document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('.open-modal');
    const modal = document.getElementById('modal');
    const closeButtons = document.querySelectorAll('#close-modal');
  
    openButtons.forEach(button => {
      button.addEventListener('click', () => {
        modal.classList.remove('hidden');
      });
    });
  
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.add('hidden');
      });
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });
  