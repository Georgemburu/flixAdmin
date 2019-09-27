import React from 'react'

import './movieOrder.css'

import Modal from '../../components/containers/modal'

class MovieOrder extends React.Component {
    render(){

        let { SHOW, CLOSEMODAL_FUNC_PROP } = this.props;

        return (
            <Modal TITLE="Movie Order Details"  SHOW={SHOW} CLOSEMODAL_FUNC_PROP={CLOSEMODAL_FUNC_PROP}>
                <div className="movie_order_head_details">
                    <div className="movie_order_head_user_details_div">
                         <p><span>From:</span> Timaya Freddy</p>
                         <p><span>Tel:</span> 072134344</p>
                         <p><span>Location:</span> Kahigo</p>

                    </div>
                    <div className="movie_order_head_total_display_div">
                        <p><span>Total:</span> 100</p>
                    </div>
                </div>
                <div className="movies_ordered_list_area">
                    <div className="movies_ordered_list_area_title">Order list</div>
                    <div className="movies_ordered_list_div">
                        <p><span>1.</span> The Beauty and the beast</p>
                        <p><span>2.</span> The Avangers</p>

                    </div>
                </div>
                <div className="movie_ordered_action_btns_area">
                    <button>Processing</button>
                    <button>On The Way</button>
                    <button>Delivered</button>
                </div>
            </Modal>
        )
    }
}


export default MovieOrder;