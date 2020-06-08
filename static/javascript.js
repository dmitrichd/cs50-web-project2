document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach( button => {
      button.onclick = () => {
      document.querySelector('#hello').style.color = button.dataset.color;
    };
  });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('select').onchange = function () {
      document.querySelector('#hello').style.color = this.value;
    };
});

if (!localStorage.getItem('notelist'))
  localStorage.setItem('notelist', '');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#note_list').innerHTML =  localStorage.notelist;
  document.querySelector('#submit').disabled = true;
  document.querySelector('#add_note_input').onkeyup = () => {
    if (document.querySelector('#add_note_input').value.length > 0)
      document.querySelector('#submit').disabled = false;
    else
      document.querySelector('#submit').disabled = true;
     document.querySelector('#add_note_form').onsubmit = () => {
        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#add_note_input').value;
        document.querySelector('#note_list').append(li);

        localStorage.notelist = document.querySelector('#note_list').innerHTML;
        document.querySelector('#add_note_input').value = '';
        return false;
      };
    };
  });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#ajax').onclick = () => {
    const request = new XMLHttpRequest;
    request.open('POST', '/json');
    
    request.onload = () => {
    const data = JSON.parse(request.responseText);
    document.querySelector('#ajaxdata').innerHTML = data.title + ', ' + data.author + ', ' + data.year;
    };

    request.send('');
    return false;
  };

});
