import React from "react";
import { Button, Modal } from "react-bootstrap";
import {} from "./styles.css";
import { FaFilter } from "react-icons/fa";

/* Modal bootstrap */
function MyVerticallyCenteredModal(props) {
  return (
    <Modal className="modalborda" {...props} size="lg" centered>
      <Modal.Header className="modalbackground" closeButton>
        <Modal.Title className="modaltitle" id="contained-modal-title-vcenter">
          Em Criação!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalcenter">
        <p>
          Estamos trabalhando em novas funcionalidades para você! Por favor,
          volte mais tarde.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ButtonFilter() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button
        type="button"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        <FaFilter></FaFilter>
        <span className="textfilter">Filtrar</span>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default ButtonFilter;
