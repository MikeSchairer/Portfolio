fetch('/content/home.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('home-title').textContent = data.title;
    document.getElementById('home-subtitle').textContent = data.subtitle;
    document.getElementById('home-description').textContent = data.description;
  });
