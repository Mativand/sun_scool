import React from 'react';
import s from './Modal.module.css'

const Modal = ({offVisible, textRefs, rootClasses, title}) => {

    return (
        <div className={rootClasses.join(' ')} onClick={offVisible}>
            <div className={s.modalContent}>
                <div>
                    <div className={s.title}>
                        {title}
                    </div>
                    <div>
                        {textRefs.map(text =>
                            <div key={text.id}>
                                <div className={s.text}>{text.versions.RST.text}</div>
                                <div>{text.reference.text}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;