import React from 'react';

function Modal(props) {
    return (
        <section className='modal'>
            <article className='modal-content'>
                <button className='modal-close' onClick={props.onClose}>X</button>
                {props.children}
            </article>
        </section>
    )
}

export default Modal;