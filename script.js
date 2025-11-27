// common small interactions
document.addEventListener('DOMContentLoaded', function(){
  // year in footer
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;
  const el2 = document.getElementById('year2');
  if(el2) el2.textContent = y;

  // toggle demo panel
  const btn = document.getElementById('toggleBtn');
  const panel = document.getElementById('demoPanel');
  if(btn && panel){
    btn.addEventListener('click', function(){
      if(panel.classList.contains('hidden')){
        panel.classList.remove('hidden');
        btn.textContent = 'Hide Demo';
      } else {
        panel.classList.add('hidden');
        btn.textContent = 'Show Demo';
      }
    });
  }

  // accent selector
  const accentSel = document.getElementById('accent');
  if(accentSel){
    accentSel.addEventListener('change', function(){
      const color = accentSel.value;
      document.documentElement.style.setProperty('--accent', color);
      // small flash to indicate change
      document.body.style.transition = 'background .25s';
      document.body.style.background = '#f7fbfe';
      setTimeout(()=>{document.body.style.background = ''},150);
    });
  }
});
