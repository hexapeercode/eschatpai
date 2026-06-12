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
  
  // Z-index para chat
  const style = document.createElement('style');
  style.textContent = `
    [id*="webchat"], [class*="bpChat"], [class*="bpLauncher"] {
      z-index: 999999 !important;
    }
  `;
  document.head.appendChild(style);
  
  // MENSAJE SIMPLE - PRUEBA
  setTimeout(function() {
    const msg = document.createElement('div');
    msg.style.cssText = `
      position: fixed;
      bottom: 150px;
      right: 50px;
      background: red;
      color: white;
      padding: 20px;
      border-radius: 8px;
      z-index: 99999;
      cursor: pointer;
      font-size: 16px;
    `;
    msg.textContent = 'PRUEBA: Tens alguna pregunta?';
    msg.onclick = () => msg.remove();
    
    document.body.appendChild(msg);
    console.log('Mensaje añadido al DOM');
  }, 2000);
  
  // Ocultar footer
  setTimeout(function() {
    setInterval(function() {
      const root = Array.from(document.querySelectorAll('div')).find(el => {
        try {
          return el.shadowRoot && el.shadowRoot.querySelector('.bpComposerFooter');
        } catch(e) {
          return false;
        }
      });
      
      if (root && root.shadowRoot) {
        const footer = root.shadowRoot.querySelector('.bpComposerFooter');
        if (footer) footer.innerHTML = '';
        root.style.zIndex = '999999';
      }
    }, 300);
  }, 3000);
})();
