import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import Shop from '../../pages/Shop';

function ShopModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default function ShopCard(props) {

    const [show, setShow] = useState(false);



    return (
        <div className="col-md-3" onClick={() => setShow(true)} >
            <div className="card" >
                <img src={props.image} className="card-img-top" alt={props.id} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="d-flex justify-content-center">$ {props.price}</h6>
                </div>
                <button className="snipcart-add-item"
                    data-item-id={props.name}
                    data-item-price={props.price}
                    data-item-url={props.url}
                    data-item-description={props.description}
                    data-item-image={props.image} 
                    data-item-name={props.name}>
                        add to cart
                </button>

            </div>
            <ShopModal
            show={show}
            onHide={() => setShow(false)}></ShopModal>
        </div>

    )
}





// function ShopModal(props) {
//     return (
//         <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         >
//         <Modal.Header closeButton>
//             <Modal.Title id="contained-modal-title-vcenter">
//             Modal heading
//             </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <h4>Centered Modal</h4>
//             <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros.
//             </p>
//         </Modal.Body>
//         <Modal.Footer>
//             <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//         </Modal>
//     )
// }

// export default function ShopCard(props) {

//     const [show, setShow] = useState(false);



//     return (
//         <div className="col-md-3" onClick={() => setShow(true)} >
//             <div className="card" >
//                 <img src={props.image} className="card-img-top" alt={props.id} />
//                 <div className="card-body">
//                     <h5 className="card-title">{props.name}</h5>
//                     <h6 className="d-flex justify-content-center">$ {props.price}</h6>
//                 </div>
//                 <button className="snipcart-add-item"
//                     data-item-id={props.name}
//                     data-item-price={props.price}
//                     data-item-url={props.url}
//                     data-item-description={props.description}
//                     data-item-image={props.image} 
//                     data-item-name={props.name}>
//                         add to cart
//                 </button>

//             </div>
//             <ShopModal
//             show={show}
//             onHide={() => setShow(false)}></ShopModal>
//         </div>

//     )
// }