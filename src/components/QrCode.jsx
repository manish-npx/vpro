import React, { useState } from 'react'
import QRCode from 'react-qr-code';
import { Button, Modal } from 'react-bootstrap';


const QrCode = ({ qr, setShow, user }) => {

    const handleClose = () => setShow(false);

    return (
        <React.Fragment>

            <div className="container">
                <Modal size="sm" show={qr} onHide={handleClose}>
                    <Modal.Body>
                        {user && (
                            <QRCode
                                title="User Data"
                                value={user.data}
                                size={423}
                            />
                        )}
                    </Modal.Body>
                </Modal>

            </div>

        </React.Fragment>
    )
}

export default QrCode
