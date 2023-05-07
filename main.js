const form = document.querySelector('form');
const ul = document.querySelector('section ul');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const inputName = document.querySelector('input[name="name"]');
  const inputArtist = document.querySelector('input[name="artist"]');
  
  const li = document.createElement('li');
  
  const h3 = document.createElement('h3');
  h3.textContent = inputName.value;
  
  const p = document.createElement('p');
  p.textContent = inputArtist.value;
  
  const audio = document.createElement('audio');
  audio.controls = true;
  audio.src = 'caminho_para_a_musica.mp3';
  
  li.appendChild(h3);
  li.appendChild(p);
  li.appendChild(audio);
  
  ul.appendChild(li);
  
  inputName.value = '';
  inputArtist.value = '';
});
const lis = document.querySelectorAll('section li');

lis.forEach(function(li) {
  const audio = li.querySelector('audio');
  
  li.addEventListener('click', function() {
    audio.play();
  });
});
const deleteButtons = document.querySelectorAll('section li button');

deleteButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const li = this.parentElement;
    li.remove();
  });
});