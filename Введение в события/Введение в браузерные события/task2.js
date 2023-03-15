const btn = document.createElement('button');
btn.textContent = 'Button';

btn.addEventListener('click', function () {
  this.style.display = 'none';
});
