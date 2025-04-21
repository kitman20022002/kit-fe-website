import style from './Modal.module.css';
import global from '../Global/global.module.css';
import React from 'react';

class Modal extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }

    render() {
        return (
            <div className={[style["modal-container"], style.six].join(' ')}>
                <div className={style["modal-background"]}>
                    <div className={style.modal}>
                        <h2>Thank You</h2>
                        <p>We&apos;ll be in touch shortly..</p>
                        <svg className={style["modal-svg"]} xmlns="http://www.w3.org/2000/svg" width="100%"
                             height="100%"
                             preserveAspectRatio="none">
                            <rect x="0" y="0" fill="none" width="320" height="177" rx="3" ry="3"></rect>
                        </svg>
                        <button className={[global["btn-10"], style.btn].join(' ')} onClick={this.props.closeModal}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
