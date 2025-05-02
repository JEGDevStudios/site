'use client';

import { useEffect } from 'react';

function BootstrapClient() {
  useEffect(() => {
    require('../bootstrap/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}

export default BootstrapClient;
