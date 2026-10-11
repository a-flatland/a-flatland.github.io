'use client';

import { useState } from 'react';

export default function HypeButton() {
  const [hyped, setHyped] = useState(false);

  return (
    <div className="hype-button-block">
      <button type="button" onClick={() => setHyped(true)}>hype button</button>
      <p aria-live="polite" className={hyped ? 'is-visible' : ''}>
        {hyped ? 'lets goo!!!!' : 'ready when you are'}
      </p>
    </div>
  );
}
