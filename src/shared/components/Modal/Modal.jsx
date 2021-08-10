import React, {useEffect, useMemo} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import './Modal.scss';

const modalRoot = document.getElementById( 'modal-root' );

const Modal = ({ isOpen, toggleModal, children, minWidth, minHeight }) => {


    const element = useMemo(()=>document.createElement("div"),[]);

    useEffect(() => {
        document.body.appendChild(element);
        return () => {
            document.body.removeChild(element);
        };
    }, [element]);

    return (
        isOpen && createPortal(
            <div
                className='modal-overlay'
                onClick={({target}) => {target.className === 'modal-overlay' && toggleModal()}}
            >
                <div className='modal-container' style={{minWidth, minHeight}}>
                    <span className='modal-close-btn' onClick={toggleModal}>&#9587;</span>
                    {children}
                </div>
            </div>,
            element
        )
    );
};

export default Modal;

Modal.defaultProps = {
    minWidth: '35%',
    minHeight: '300px'
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    minWidth: PropTypes.string,
    minHeight: PropTypes.string
};
