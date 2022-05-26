const addPostForm = document.querySelector('.add-post-form');

if (addPostForm) {
  addPostForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(addPostForm));
    const response = await fetch('/lk/addPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      window.location.href = '/';
    }
  });
}
