// src/components/BootstrapClient.js
'use client';

import { useEffect } from 'react';

function BootstrapClient() {
  useEffect(() => {
    // Importa dinámicamente el JS de Bootstrap solo en el cliente
    import('../bootstrap/js/bootstrap.min.js')
      .then(() => {
         const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
         tooltipTriggerList.map(function (tooltipTriggerEl) {
           return new bootstrap.Tooltip(tooltipTriggerEl);
         });
         const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
         popoverTriggerList.map(function (popoverTriggerEl) {
           return new bootstrap.Popover(popoverTriggerEl);
        });
      });
  }, []);

  return null; // Este componente no renderiza nada visualmente
}

export default BootstrapClient;
