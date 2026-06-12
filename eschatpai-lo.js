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
    .espai-proactive-bubble {
      position: fixed !important;
      bottom: 95px !important;
      right: 90px !important;
      background: white !important;
      color: #333 !important;
      padding: 14px 16px !important;
      border-radius: 12px !important;
      font-size: 14px !important;
      font-weight: 500 !important;
      box-shadow: 0 4px 16px rgba(0,0,0,0.15) !important;
      cursor: pointer !important;
      z-index: 999998 !important;
      max-width: 220px !important;
      border: 1px solid #e0e0e0 !important;
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
    }
    .espai-proactive-bubble:hover {
      background: #f5f5f5 !important;
      box-shadow: 0 6px 20px rgba(0,0,0,0.2) !important;
    }
  `;
  document.head.appendChild(style);
  
  // Mensaje proactivo - aparecer después de 4 segundos
  setTimeout(function() {
    const proactiveMsg = document.createElement('div');
    proactiveMsg.className = 'espai-proactive-bubble';
    proactiveMsg.textContent = '👋 Tens alguna pregunta?';
    
    proactiveMsg.onclick = function() {
      const chatButton = document.querySelector('[class*="bpLauncher"]');
      if (chatButton) {
        chatButton.click();
      }
      proactiveMsg.style.display = 'none';
    };
    
    document.body.appendChild(proactiveMsg);
    
    // Desaparecer después de 10 segundos
    setTimeout(function() {
      proactiveMsg.style.display = 'none';
    }, 10000);
  }, 4000);
  
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
})();
