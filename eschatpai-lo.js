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
      position: fixed;
      bottom: 95px;
      right: 90px;
      background: #fff;
      color: #333;
      padding: 14px 16px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
      cursor: pointer;
      z-index: 999998;
      animation: slideIn 0.4s ease-out;
      max-width: 220px;
      border: 1px solid #e0e0e0;
    }
    .espai-proactive-bubble::after {
      content: '';
      position: absolute;
      bottom: -8px;
      right: 15px;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 0 solid transparent;
      border-top: 8px solid #fff;
      filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));
    }
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .espai-proactive-bubble:hover {
      background: #f5f5f5;
      box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);
  
  // Mensaje proactivo
  setTimeout(function() {
    const proactiveMsg = document.createElement('div');
    proactiveMsg.className = 'espai-proactive-bubble';
    proactiveMsg.innerHTML = '👋 Tens alguna pregunta?';
    
    proactiveMsg.onclick = function() {
      const chatButton = document.querySelector('[class*="bpLauncher"]');
      if (chatButton) {
        chatButton.click();
        proactiveMsg.remove();
      }
    };
    
    document.body.appendChild(proactiveMsg);
    
    // Desaparecer después de 10 segundos
    setTimeout(function() {
      proactiveMsg.style.opacity = '0';
      proactiveMsg.style.transition = 'opacity 0.3s ease-out';
      setTimeout(function() {
        proactiveMsg.remove();
      }, 300);
    }, 10000);
  }, 3000);
  
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
