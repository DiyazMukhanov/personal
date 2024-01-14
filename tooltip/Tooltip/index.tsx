import { useState } from 'react';

export function Tooltip({ children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseEnter = () => {
    setShowTooltip(true);
  };

  const onMouseLeave = () => {
    setShowTooltip(false);
  };
  
  return <>{children(onMouseEnter, onMouseLeave, showTooltip)}</>;
}
