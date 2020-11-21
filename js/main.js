let audio = document.querySelectorAll('.audio');
let covers = document.querySelectorAll('.covers');

function hideAll () {
  audio.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();


covers.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();
    switch(e.target.getAttribute('id')) {
      case 'goddess':
      document.querySelector('#beg')
      .style.display = 'block';
      break;

      case 'III':
      document.querySelector('#fall')
      .style.display = 'block';
      break;

      case 'alter':
      document.querySelector('#feed')
      .style.display = 'block';
      break;

      case 'give':
      document.querySelector('#alone')
      .style.display = 'block';


    }
    let players = document.querySelectorAll('audio');
    players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });


  }

});
