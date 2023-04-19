function handleGetFormData() {
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;
  
  return {
    name,
    city,
    email,
    zipCode,
    status
  };
}

function isNumber(string) {
  return !isNaN(string);
}

function checkboxIsChecked() {
  return document.getElementById('status').checked;
}

function validateFormData(formData) {
  if (
    formData &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked()
  ) {
    return true;
  } else {
    return false;
  }
}

function submit(event) {
 
  const formData = handleGetFormData();
  
  if (!validateFormData(formData)) {
    document.getElementById('warning').innerHTML = 'Periksa form anda sekali lagi';
  } else {
    document.getElementById('warning').innerHTML = '';
    // Do something with the form data
  }
}

document.getElementById('submit-form').addEventListener('click', submit);

//inisiialisasi scrollreveal
const sr = ScrollReveal({
  distance: '65px',
  duration: 1500,
  delay: 250,
  reset: true,
});

// scroll buat heronya ini
sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 500, origin: 'right' });

// ini buat yg about
sr.reveal('.tentang-text', { delay: 400, origin: 'top' });
sr.reveal('.tentang-img', { delay: 400, origin: 'left' });
sr.reveal('.education-container', { delay: 100, origin: 'top' });

// buat skills
sr.reveal('.main-text', { delay: 400, origin: 'top' });
sr.reveal('.skills-content', { delay: 400, origin: 'bottom' });

// portofolio
sr.reveal('.main-text', { delay: 200, origin: 'top' });
sr.reveal('.portfolio-container', { delay: 300, origin: 'bottom' });

// kontak 
sr.reveal('.contact-text', { delay: 200, origin: 'left' });
sr.reveal('.contact-form', { delay: 200, origin: 'right' });

// Animasi nav 
const nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
  nav.classList.toggle('sticky', window.scrollY > 500);
});


