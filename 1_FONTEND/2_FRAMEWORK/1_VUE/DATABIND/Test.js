let demo = new Vue({
  data: {
    text: '',
  },
});
const p = document.getElementById('p');
const input = document.getElementById('input');
input.addEventListener('keyup', e => {
  demo.text = e.target.value;
});
demo.$watch('text', str => p.innerHTML = str);