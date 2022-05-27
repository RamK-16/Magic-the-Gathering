const formReg = document.querySelector('#formReg');
const formLog = document.querySelector('#formLog');

if (formReg) {
  formReg.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(formReg));
    console.log(formData);
    const response = await fetch('/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      window.location.href = '/';
    } else {
      alert('Попробуй снова!');
      window.location.reload();
    }
  });
}

if (formLog) {
  formLog.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(formLog));
    console.log(formData);
    const response = await fetch('/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      window.location.href = '/';
    } else {
      alert('Попробуй снова!');
      window.location.reload();
    }
  });
}
