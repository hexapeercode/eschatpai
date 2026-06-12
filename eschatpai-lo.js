(function() {
  // Cargar Botpress (código existente)
  const script1 = document.createElement('script');
  script1.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
  script1.onload = function() {
    setTimeout(function() {
      const script2 = document.createElement('script');
      script2.src = 'https://files.bpcontent.cloud/2026/05/19/17/20260519173633-PCRHW6DM.js';
      document.head.appendChild(script2);
    }, 500);
  };
  document.head.appendChild(script1);
  
  // Estilos
  const style = document.createElement('style');
  style.textContent = `
    [id*="webchat"], [class*="bpChat"], [class*="bpLauncher"] {
      z-index: 999999 !important;
    }
    .espai-proactive-msg {
      position: fixed;
      bottom: 100px;
      right: 20px;
      background: #1a1a1a;
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      font-size: 14px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      cursor: pointer;
      z-index: 999998;
      animation: slideIn 0.3s ease-out;
      max-width: 250px;
    }
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .espai-proactive-msg:hover {
      background: #333;
    }
  `;
  document.head.appendChild(style);
  
  // Crear mensaje proactivo
  setTimeout(function() {
    const proactiveMsg = document.createElement('div');
    proactiveMsg.className = 'espai-proactive-msg';
    proactiveMsg.innerHTML = '👋 ¡Hola! ¿Necesitas ayuda?';
    
    proactiveMsg.onclick = function() {
      // Buscar y clickear la bolita del chat
      const chatButton = document.querySelector('[class*="bpLauncher"]');
      if (chatButton) {
        chatButton.click();
        proactiveMsg.remove();
      }
    };
    
    document.body.appendChild(proactiveMsg);
    
    // Desaparecer después de 8 segundos
    setTimeout(function() {
      proactiveMsg.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(function() {
        proactiveMsg.remove();
      }, 300);
    }, 8000);
  }, 3000);
  
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
    }
    
    document.querySelectorAll('[class*="bp"]').forEach(el => {
      el.style.zIndex = '999999';
    });
  }
  
  setTimeout(function() {
    setInterval(hideBootpressFooter, 300);
  }, 3000);
})();
