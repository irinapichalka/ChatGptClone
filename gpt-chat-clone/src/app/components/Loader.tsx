import React from 'react';
import PropTypes from 'prop-types';

/**
 * Loader component
 * @param {string} size - sm | md | lg (controls size)
 * @param {boolean} fullScreen - if true, renders full-screen overlay
 */
function Loader({ size = 'md', fullScreen = false }) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-10 h-10 border-4',
  };

  const spinner = (
    <div
      className={`animate-spin rounded-full border-t-transparent border-blue-500 ${sizeClasses[size]}`}
    />
  );

  // Full screen mode
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
        {spinner}
      </div>
    );
  }

  // Inline mode
  return (
    <div className="inline-flex items-center justify-center">{spinner}</div>
  );
}

// Props validation
Loader.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullScreen: PropTypes.bool,
};

export default Loader;
