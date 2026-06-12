(function() {
  // Cargar Botpress
  const script1 = document.createElement('script');
  script1.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
  document.head.appendChild(script1);
  
  // Esperar a que inject.js cargue, luego cargar config
  setTimeout(function() {
    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2026/05/19/17/20260519173633-PCRHW6DM.js';
    document.head.appendChild(script2);
  }, 500);
  
  // Estilos
  const style = document.createElement('style');
  style.textContent = `
    [id*="webchat"], [class*="bpChat"], [class*="bpLauncher"] {
      z-index: 999999 !important;
    }
  `;
  document.head.appendChild(style);
  
  // Ocultar footer (después de 3 segundos)
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
        if (footer) {
          footer.innerHTML = '';
        }
        root.style.zIndex = '999999';
      }
    }, 300);
  }, 3000);
})();

// Mensaje proactivo
setTimeout(function() {
  const msg = document.createElement('div');
  msg.style.cssText = `
    position: fixed;
    bottom: 120px;
    right: 100px;
    background: white;
    color: #333;
    padding: 12px 14px;
    border-radius: 10px;
    z-index: 9999;
    cursor: pointer;
    font-size: 14px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    border: 1px solid #ddd;
  `;
  msg.textContent = '👋 Tens alguna pregunta?';
  msg.onclick = () => msg.remove();
  document.body.appendChild(msg);
}, 3000);
