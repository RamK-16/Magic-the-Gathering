const cartMainForm = document.querySelector('.cartMainForm');

if (cartMainForm) {
  cartMainForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(event.target);
    // const formData = Object.fromEntries(new FormData(addPostForm));
    // const response = await fetch('/lk/addPost', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    // if (response.ok) {
    //   window.location.href = '/';
    // }
  });
}
