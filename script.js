// script.js

document.addEventListener('DOMContentLoaded', () => {
  const userEmailInput = document.getElementById('user-email');
  const generateLinksButton = document.getElementById('generate-links');
  const productLinks = document.querySelectorAll('.product-link');

  generateLinksButton.addEventListener('click', () => {
    const userEmail = userEmailInput.value.trim();

    if (!userEmail) {
      alert('Tulis alamat email dengan benar. Pastikan sudah terdaftar di Ratakan.');
      return;
    }

    // Validate email format (basic validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Update all product links with the referral parameter
    productLinks.forEach(link => {
      const productUrl = link.getAttribute('data-product-url');
      const referralUrl = `${productUrl}?aff=${encodeURIComponent(userEmail)}`;
      link.href = referralUrl;
      link.textContent = 'Link Referral Anda Siap Digunakan!';
    });

    alert('Link referral Anda sudah diperbaharui!');
  });
});
