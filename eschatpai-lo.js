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
  
  // Estilos - CRÍTICO para que se vea
  const style = document.createElement('style');
  style.textContent = `
    [id*="webchat"], [class*="bpChat"], [class*="bpLauncher"] {
      z-index: 999999 !important;
    }
    body .espai-chat-message {
      position: fixed !important;
      bottom: 120px !important;
      right: 120px !important;
      background: white !important;
      color: #333 !important;
      padding: 12px 14px !important;
      border-radius: 10px !important;
      font-size: 13px !important;
      box-shadow: 0 2px 8px rgba(0,0,0,0.12) !important;
      cursor: pointer !important;
      z-index: 9999 !important;
      border: 1px solid #ddd !important;
      white-space: nowrap !important;
      user-select: none !important;
    }
  `;
  document.head.appendChild(style);
  
  // Crear mensaje
  setTimeout(function() {
    const msg = document.createElement('div');
    msg.className = 'espai-chat-message';
    msg.textContent = '👋 Tens alguna pregunta?';
    
    msg.onclick = function() {
      document.querySelector('[id="fab-root"]')?.parentElement?.click();
      msg.remove();
    };
    
    document.body.appendChild(msg);
    
    setTimeout(() => msg.remove(), 10000);
  }, 3000);
  
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
