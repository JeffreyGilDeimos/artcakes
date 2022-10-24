import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

import * as actionReceipt from "../../redux/actions/actionReceipt";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import ReceiptModal from '../ReceiptModal';

const RecentOrders = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [receipt, setReceipt] = useState(null);
    const [receiptUrl, setReceiptUrl] = useState(null);

    const { getReceiptData, getReceiptUrl } = bindActionCreators(
        actionReceipt,
        useDispatch()
      );
    const closeModal = (e) => {
        setShowModal(false);
        setReceipt(null);
        setReceiptUrl(null);
    };
    const handleClick = (paymentId) => {
        setShowModal(true);
        console.log(paymentId);
        getReceiptData(paymentId).then((response) => setReceipt(response.payload.data));
        getReceiptUrl(paymentId).then((response) => setReceiptUrl(response.payload.receiptUrl));
    }

  return (
    <>
        <h3 className="mb-2">Recent orders</h3>
        {
            props.paymentList.map(payment => (
                <>
                    <div
                        key={payment.paymentId}
                        className="order-data mt-2 mb-2"
                        onClick={() => handleClick(payment.paymentId)}
                    >
                        {new Date(payment.createdDate).toDateString()}
                        {' '}
                        {new Date(payment.createdDate).toLocaleTimeString()}
                        <FontAwesomeIcon className="ms-2 cursor-pointer" icon={faArrowAltCircleRight} />
                    </div>
                </>
            ))
        }
        <ReceiptModal
            receipt={receipt}
            showModal={showModal}
            closeModal={closeModal}
            receiptUrl={receiptUrl}
        />
    </>
  )
}

export default RecentOrders