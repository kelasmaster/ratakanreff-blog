// script.js

document.addEventListener('DOMContentLoaded', () => {
  const userEmailInput = document.getElementById('user-email');
  const generateLinksButton = document.getElementById('generate-links');
  const articleContainer = document.getElementById('article-container');

  // Sample articles data
  const articles = [
    { title: 'How to Create Your Own Soap Recipes', description: 'Discover the secrets of crafting unique soap recipes...', productUrl: 'https://ratakan.com/product/resep-sabun-lengkap-955' },
    { title: 'Mastering Digital Marketing', description: 'Learn how to grow your business online with proven strategies...', productUrl: 'https://ratakan.com/product/digital-marketing-101' },
    { title: 'The Art of Photography', description: 'Explore techniques to capture stunning photos...', productUrl: 'https://ratakan.com/product/photography-course' },
    { title: 'Cooking Like a Pro', description: 'Step-by-step guide to becoming a master chef...', productUrl: 'https://ratakan.com/product/cooking-class' },
    { title: 'Gardening for Beginners', description: 'Start your own garden with these easy tips...', productUrl: 'https://ratakan.com/product/gardening-guide' },
    { title: 'Advanced Yoga Techniques', description: 'Deepen your practice with advanced yoga poses...', productUrl: 'https://ratakan.com/product/yoga-course' },
    { title: 'Writing Your First Novel', description: 'Turn your ideas into a bestselling book...', productUrl: 'https://ratakan.com/product/writing-course' },
  ];

  // Function to render all articles
  function renderArticles() {
    // Clear previous articles
    articleContainer.innerHTML = '';

    // Render all articles
    articles.forEach(article => {
      const articleElement = document.createElement('article');
      articleElement.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <a href="#" class="product-link" data-product-url="${article.productUrl}">Get the Product</a>
      `;
      articleContainer.appendChild(articleElement);
    });

    // Attach referral link handlers
    attachReferralLinkHandlers();
  }

  // Attach referral link handlers to dynamically generated links
  function attachReferralLinkHandlers() {
    const productLinks = document.querySelectorAll('.product-link');
    productLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const userEmail = userEmailInput.value.trim();
        if (!userEmail) {
          alert('Please enter your email address.');
          return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userEmail)) {
          alert('Please enter a valid email address.');
          return;
        }
        const productUrl = link.getAttribute('data-product-url');
        const referralUrl = `${productUrl}?aff=${encodeURIComponent(userEmail)}`;
        window.open(referralUrl, '_blank');
      });
    });
  }

  // Generate referral links button
  generateLinksButton.addEventListener('click', () => {
    const userEmail = userEmailInput.value.trim();
    if (!userEmail) {
      alert('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Your referral links have been updated!');
  });

  // Initial render
  renderArticles();
});
