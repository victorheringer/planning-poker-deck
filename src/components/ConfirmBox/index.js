import React from 'react';
import './index.css';

const ConfirmBox = ({ onConfirm, onCancel, title, message}) => {
  return( 
    <div className="confirmBox">
      <div className="box">
        <div className="text">
          <h3 className="title">{title}</h3>
          <p className="description">{message}</p>
        </div>
        <div className="actions">
          <div>
            <button className="cancel" onClick={onCancel}>Cancelar</button>
          </div>
          <div>
            <button className="confirm" onClick={onConfirm}>Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBox;