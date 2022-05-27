const cartMyPostsContainer = document.querySelector('.cartMyPostsContainer');
console.log(cartMyPostsContainer);
if (cartMyPostsContainer) {
  cartMyPostsContainer.addEventListener('click', async (event) => {
    event.preventDefault();
    const divWithPostToDelete = event.target.closest('[data-id]');
    const idOfPostToDelete = divWithPostToDelete.dataset.id;
    // console.log(divWithPostToDelete);
    // console.log(idOfPostToDelete);
    const response = await fetch(`/cart/delete/${idOfPostToDelete}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      window.location.href = '/';
    }
  });
}
