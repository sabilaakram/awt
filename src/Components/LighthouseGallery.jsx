import React from "react";
import { Modal } from "react-bootstrap";
import { getStrapiURL } from "../lib/utils";

const LighthouseGallery = ({ show, onHide, item }) => {
  const baseurl = getStrapiURL();
  if (!item) return null;

  return (
    <Modal
      centered
      show={show}
      onHide={onHide}
      backdropClassName="custom-backdrop"
    >
      {/* <Modal.Header className="border-0" closeButton /> */}
      <Modal.Body>
        <img
          src={baseurl + item.url}
          alt=""
          width={item.width}
          className="w-100 h-100"
          height={item.height}
        />
      </Modal.Body>
    </Modal>
  );
};

export default LighthouseGallery;
