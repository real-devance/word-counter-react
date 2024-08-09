import React from 'react';
import styles from './Logo.module.scss';

// Logo component that displays the "Word Counter" text
// This component is a pure (dumb) component with no props.
// React.memo is used to prevent unnecessary re-renders since it always renders the same output.

function Logo() {
  return (
    <div className={styles.logo}>
      <p>Word</p>
      <p>Counter</p>
    </div>
  );
}

export default React.memo(Logo); // Memoize the component to optimize performance
