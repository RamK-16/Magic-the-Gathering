const formFind = document.querySelector('.inputserch');

if (formFind) {
  formFind.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(formFind));
    const response = await fetch('/selectCard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const result = await response.json();
      window.location.href = `/card/${result.cardId}`;
    }
  });
}
