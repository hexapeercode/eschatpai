(function() {
  console.log('=== INICIO BOTPRESS ===');
  
  // Cargar Botpress
  const script1 = document.createElement('script');
  script1.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
  document.head.appendChild(script1);
  console.log('Script 1 cargado');
  
  // Esperar a que inject.js cargue, luego cargar config
  setTimeout(function() {
    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2026/05/19/17/20260519173633-PCRHW6DM.js';
    document.head.appendChild(script2);
    console.log('Script 2 cargado');
  }, 500);
  
  // Estilos
  const style = document.createElement('style');
  style.textContent = `
    [id*="webchat"], [class*="bpChat"], [class*="bpLauncher"] {
      z-index: 999999 !important;
    }
  `;
  document.head.appendChild(style);
  console.log('Estilos añadidos');
  
  // Ocultar footer (después de 3 segundos)
  setTimeout(function() {
    console.log('Iniciando ocultación de footer');
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
          console.log('Footer ocultado');
        }
        root.style.zIndex = '999999';
      }
    }, 300);
  }, 3000);
})();

// MENSAJE PROACTIVO - Hamburguesa
setTimeout(function() {
  console.log('=== CREANDO MENSAJE ===');
  
  const msg = document.createElement('div');
  msg.innerHTML = '👋 Tens alguna pregunta?';
  msg.style.position = 'fixed';
  msg.style.bottom = '120px';
  msg.style.left = '30px';
  msg.style.background = 'white';
  msg.style.color = '#333';
  msg.style.padding = '14px 16px';
  msg.style.borderRadius = '10px';
  msg.style.zIndex = '999990';
  msg.style.cursor = 'pointer';
  msg.style.fontSize = '14px';
  msg.style.fontWeight = '500';
  msg.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
  msg.style.border = '1px solid #ddd';
  msg.style.display = 'block';
  msg.style.visibility = 'visible';
  msg.style.opacity = '1';
  
  msg.onclick = () => {
    console.log('Mensaje clickeado');
    msg.remove();
  };
  
  document.body.appendChild(msg);
  console.log('Mensaje añadido al DOM:', msg);
}, 3000);
