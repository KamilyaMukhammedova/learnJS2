const btn = document.getElementsByTagName('button');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  text.style.display = 'none';
});