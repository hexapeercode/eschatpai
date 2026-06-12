(function() {
  var script1 = document.createElement('script');
  script1.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
  document.head.appendChild(script1);
  
  setTimeout(function() {
    var script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2026/05/19/17/20260519173633-PCRHW6DM.js';
    document.head.appendChild(script2);
  }, 500);
  
  var style = document.createElement('style');
  style.textContent = '[id*="webchat"], [class*="bpChat"], [class*="bpLauncher"] { z-index: 999999 !important; } @keyframes espaiPop { 0% { transform: scale(0); opacity: 0; } 50% { transform: scale(1.1); } 100% { transform: scale(1); opacity: 1; } }';
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
  msg.innerHTML = '👋 <b>Hola! Tens alguna consulta jur\u00EDdica?</b>';
  msg.style.position = 'fixed';
  msg.style.bottom = '100px';
  msg.style.right = '24px';
  msg.style.background = '#111110';
  msg.style.color = 'white';
  msg.style.padding = '12px 16px';
  msg.style.borderRadius = '10px';
  msg.style.zIndex = '9998';
  msg.style.fontSize = '15px';
  msg.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
  msg.style.border = 'none';
  msg.style.pointerEvents = 'none';
  msg.style.animation = 'espaiPop 0.4s ease-out';
  document.body.appendChild(msg);
  
  setInterval(function() {
    var root = Array.from(document.querySelectorAll('div')).find(function(el) {
      try { return el.shadowRoot && el.shadowRoot.querySelector('[data-name="webchat"]'); }
      catch(e) { return false; }
    });
    if (root && root.shadowRoot) {
      var webchat = root.shadowRoot.querySelector('[data-name="webchat"]');
      if (webchat && !webchat.className.includes('bpClose')) {
        msg.remove();
      }
    }
  }, 500);
}, 3000);
