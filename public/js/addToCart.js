const postsOfCard = document.querySelector('.postsOfCard');
if (postsOfCard) {
  postsOfCard.addEventListener('click', async (event) => {
    const divOfPostToAdd = event.target.closest('[data-id]');
    const idOfPostToAdd = divOfPostToAdd.dataset.id;
    const response = await fetch(`/card/${idOfPostToAdd}/addToCart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log('asdfghjnm');
    }
  });
}
