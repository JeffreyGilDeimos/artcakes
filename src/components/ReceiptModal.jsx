import React, {useSelector} from 'react'
import utils from "../utilities/utils";
import { Modal } from "react-bootstrap";


// import * as actionReceipt from "../../redux/actions/actionReceipt";

const ReceiptModal = (props) => {
    const mapTotal = () =>
    props.receipt && props.receipt.length > 0 && props.receipt.reduce((accumulator, item) => {
        return accumulator + item.price.unit_amount * item.quantity;
    }, 0);
  return (
    <div>
    <Modal
        show={props.showModal}
        className="h-100 d-flex justify-content-center align-items-center"
        id="cakeModal1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div className="modal-dialog modal-dialog-centered m-4 rounded-3">
        <div className="modal-content">
            <div className="modal-body mx-3 text-left">
            {
                props.receipt && props.receipt.length > 0 && props.receipt?.map((data) => (
                    <>
                    <b>{data.description}</b>
                    
                    <div>
                        Unit price:
                            {utils.toPhp.format(
                            data.price.unit_amount
                        )}
                    </div>
                    <div>Quantity: {data.quantity}</div>
                    <br />
                    </>
                ))
            }
            <div><b>Total:</b> {utils.toPhp.format(mapTotal())}</div>
            </div>
            <div className="modal-footer border-0">
            <div className="cursor-pointer">View receipt</div>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() => props.closeModal()}
            >
                Close
            </button>
            </div>
        </div>
        </div>
    </Modal>
</div>
  )
}

export default ReceiptModal