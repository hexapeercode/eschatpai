(function() {
  // Cargar Botpress
  const script1 = document.createElement('script');
  script1.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
  document.head.appendChild(script1);
  
  // Esperar a que inject.js cargue
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
        if (footer) {
          footer.innerHTML = '';
        }
        root.style.zIndex = '999999';
      }
    }, 300);
  }, 3000);
  
  // Mensaje proactivo VISIBLE
  setTimeout(function() {
    const msg = document.createElement('div');
    msg.innerHTML = '👋 Tens alguna pregunta?';
    msg.style.position = 'fixed';
    msg.style.top = '50px';
    msg.style.right = '50px';
    msg.style.background = '#FFD700';
    msg.style.color = '#000';
    msg.style.padding = '16px 20px';
    msg.style.borderRadius = '10px';
    msg.style.zIndex = '999999';
    msg.style.cursor = 'pointer';
    msg.style.fontSize = '16px';
    msg.style.fontWeight = 'bold';
    msg.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
    msg.style.border = '2px solid #333';
    
    msg.onclick = () => msg.remove();
    
    document.body.appendChild(msg);
  }, 3000);
})();
