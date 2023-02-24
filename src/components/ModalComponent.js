import { Modal } from "antd";

const ModalComponent = ({ isModalOpen, modalValue, handleCloseModal }) => {
  return (
    <>
      <Modal open={isModalOpen} onCancel={handleCloseModal} footer={null}>
        <img
          className="img-fluid img-thumbnail d-block mb-4 h-100"
          src={modalValue.urls && modalValue.urls.small}
          alt={`${modalValue.id}`}
          style={{ cursor: "pointer" }}
        />
        <div className="d-flex justify-content-between">
          <div>
            <p style={{color:'gray',fontSize:11}}>Height : {modalValue.height} px</p>
            <p style={{color:'gray',fontSize:11}}>Width : {modalValue.width} px</p>
          </div>
          <div>
            <p style={{color:'gray',fontSize:11}}>Created At : {new Date(modalValue.created_at).toDateString()}</p>
            <p style={{color:'gray',fontSize:11}}>Updated At : {new Date(modalValue.updated_at).toDateString()}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};
export { ModalComponent };
