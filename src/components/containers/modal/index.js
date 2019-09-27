import React from 'react'

import './modal.css'


function Modal(props){
    let { TITLE, SHOW, CLOSEMODAL_FUNC_PROP }  = props;
    let MODAL_REF = React.createRef();

    function handleModalClose_Click(){
        // console.log(MODAL_REF.current.classList.add('hide'))
        CLOSEMODAL_FUNC_PROP()
    }
    function handleModalClassNames($show){
        if($show===true){
            return 'Modal'
        }else {
            // return 'Modal'
            return 'Modal hide'
        }
    }
    return (
        <div className={handleModalClassNames(SHOW)} ref={MODAL_REF}>
            <div className="modal_contents">
                <div className="modal_header">
                    <p className="modal_title">
                        { TITLE }
                    </p>
                    <p className="modal_close_btn">
                        <img src="close.jpeg" className="modal_close_img canClick hoverFade" onClick={()=>handleModalClose_Click()} alt="close"/>
                    </p>
                </div>
             {props.children}
            </div>
        </div>
    )
}

export default Modal;