let layout = document.querySelector('.layout');
let btn = document.querySelector('.btn-change-view');

btn.addEventListener('click', e => {
  e.preventDefault();

  layout.classList.toggle('col-view');
  layout.classList.toggle('list-view');
});