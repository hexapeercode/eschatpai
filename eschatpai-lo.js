(function() {
  // Cargar Botpress
  const script1 = document.createElement('script');
  script1.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
  document.head.appendChild(script1);
  
  setTimeout(function() {
    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2026/05/19/17/20260519173633-PCRHW6DM.js';
    document.head.appendChild(script2);
  }, 500);
  
  var style = document.createElement('style');
  style.textContent = '[id*="webchat"], [class*="bpChat"], [class*="bpLauncher"] { z-index: 999999 !important; }';
  document.head.appendChild(style);
  
  setTimeout(function() {
    setInterval(function() {
      var root = Array.from(document.querySelectorAll('div')).find(function(el) {
        try { return el.shadowRoot && el.shadowRoot.querySelector('.bpComposerFooter'); }
        catch(e) { return false; }
      });
      if (root && root.shadowRoot) {
        var footer = root.shadowRoot.querySelector('.bpComposerFooter');
        if (footer) { footer.innerHTML = ''; }
        root.style.zIndex = '999999';
      }
    }, 300);
  }, 3000);
})();

setTimeout(function() {
  var msg = document.createElement('div');
  msg.innerHTML = '👋 Tens alguna pregunta?';
  msg.style.position = 'fixed';
  msg.style.bottom = '90px';
  msg.style.right = '24px';
  msg.style.background = 'white';
  msg.style.color = '#333';
  msg.style.padding = '12px 16px';
  msg.style.borderRadius = '10px';
  msg.style.zIndex = '999998';
  msg.style.cursor = 'pointer';
  msg.style.fontSize = '14px';
  msg.style.fontWeight = '500';
  msg.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
  msg.style.border = '1px solid #ddd';
  msg.onclick = function() { msg.remove(); };
  document.body.appendChild(msg);
  setTimeout(function() { msg.remove(); }, 10000);
}, 3000);
