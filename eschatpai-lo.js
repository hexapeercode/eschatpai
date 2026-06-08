(function() {
  // Cargar primero el inject.js y esperar
  const script1 = document.createElement('script');
  script1.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
  script1.onload = function() {
    // Solo después cargar el config
    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2026/05/19/17/20260519173633-PCRHW6DM.js';
    script2.defer = true;
    document.head.appendChild(script2);
  };
  document.head.appendChild(script1);
  
  const style = document.createElement('style');
  style.textContent = `
    [id*="webchat"], [class*="bpChat"], [class*="bpLauncher"] {
      z-index: 999999 !important;
    }
  `;
  document.head.appendChild(style);
  
  // Ocultar footer
  function hideBootpressFooter() {
    const root = Array.from(document.querySelectorAll('div')).find(el => {
      try {
        return el.shadowRoot && el.shadowRoot.querySelector('.bpComposerFooter');
      } catch(e) {
        return false;
      }
    });
    
    if (root && root.shadowRoot) {
      const footer = root.shadowRoot.querySelector('.bpComposerFooter');
      if (footer) {
        footer.innerHTML = '';
      }
      root.style.zIndex = '999999';
      root.style.position = 'relative';
    }
    
    const allBpElements = document.querySelectorAll('[class*="bp"]');
    allBpElements.forEach(el => {
      el.style.zIndex = '999999';
    });
  }
  
  setTimeout(function() {
    setInterval(hideBootpressFooter, 300);
  }, 3000);
})();
