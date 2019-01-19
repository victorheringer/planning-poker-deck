import React from 'react';
import './index.css';

const ConfirmBox = ({
  show, 
  onConfirm, 
  onCancel, 
  title, 
  message,
  text
}) => {

  const visibility = show ? 'visible' : 'hidden';
  console.log(text);

  return( 
    <div className={"confirmBox " + visibility}>
      <div className="box">
        <div className="text">
          <h3 className="title">{title}</h3>
          <p className="description">{message}</p>
        </div>
        <div className="actions">
          <div>
            <button className="cancel" onClick={onCancel}>
              { text.confirmBox.btn.cancel }
            </button>
          </div>
          <div>
            <button className="confirm" onClick={onConfirm}>
              { text.confirmBox.btn.confirm }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBox;