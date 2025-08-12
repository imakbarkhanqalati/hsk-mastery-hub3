
import React from 'react';

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeatureModal: React.FC<FeatureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-button">&times;</button>
        <div className="modal-header">
          <h2 className="modal-title">Feature Not Available</h2>
        </div>
        <div className="modal-body">
          <p>This feature is currently under development. Please check back later!</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureModal;
