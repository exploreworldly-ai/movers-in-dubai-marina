(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.querySelector('#quote-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const fields = [
        ['Full Name', data.get('fullName')],
        ['Phone Number', data.get('phone')],
        ['Email Address', data.get('email') || 'Not provided'],
        ['Current Location', data.get('currentLocation')],
        ['Destination Location', data.get('destination')],
        ['Property Type', data.get('propertyType')],
        ['Preferred Moving Date', data.get('movingDate') || 'Not specified'],
        ['Additional Requirements', data.get('requirements') || 'None provided']
      ];

      const body = fields.map(([label, value]) => `${label}: ${value}`).join('\n');
      const subject = encodeURIComponent('Dubai Marina Moving Quote Enquiry');
      const encodedBody = encodeURIComponent(body);
      window.location.href = `mailto:Expertmoverpackerss@gmail.com?subject=${subject}&body=${encodedBody}`;
    });
  }
})();