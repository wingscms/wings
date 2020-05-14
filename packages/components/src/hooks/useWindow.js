import { useEffect } from 'react';

export default cb => useEffect(() => (typeof window === 'undefined' ? null : cb(window)), []);
