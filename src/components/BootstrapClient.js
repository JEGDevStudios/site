'use client';

import { useEffect } from 'react';

function BootstrapClient() {
  useEffect(() => {
    // Importa el bundle JS de Bootstrap que incluye Popper
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null; // Este componente no necesita renderizar nada visualmente
}

export default BootstrapClient;