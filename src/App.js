import React, { useState } from "react";
import axios from "axios";
import { PageLoader } from "./components/PageLoader";
import { BiLike } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { ModalComponent } from "./components/ModalComponent";
function App() {
  const [result, setResult] = useState([]);
  const [showPageLoader, setShowPageLoader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalValue,setModalValue] = useState({});

  const changePhoto = (val) => {
    setShowPageLoader(true);
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${val}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`
      )
      .then((response) => {
        setShowPageLoader(false);
        setResult(response.data.results);
      });
  };

  const handleOpenImagePopUp = (value) => {
    setIsModalOpen(true);
    setModalValue(value);
  };
  const handleCloseModal = ()=>{
    setIsModalOpen(false);
  }
  return (
    <>
      <ModalComponent isModalOpen={isModalOpen} modalValue={modalValue} handleCloseModal={handleCloseModal} />
      <div className="container text-center my-5 d-flex">
        <input
          type="text"
          className="form-control w-75"
          onChange={(e) => changePhoto(e.target.value)}
          placeholder="Search for Images..."
        />
      </div>

      <div className="container">
        <div className="row text-center text-lg-start">
          {showPageLoader ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ marginTop: "20%" }}
            >
              <PageLoader />
            </div>
          ) : (
            result.map((value, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-6" key={index}>
                  <div onClick={() => handleOpenImagePopUp(value)}>
                    <img
                      className="img-fluid img-thumbnail d-block mb-4 h-100"
                      src={value.urls.small}
                      alt={`${index}`}
                      style={{cursor:'pointer'}}
                    />
                  </div>
                  <div
                    className="d-flex justify-content-between px-4"
                    style={{ marginTop: -20 }}
                  >
                    <div>
                      <BsFillPersonFill color="gray" />
                      <p style={{ color: "gray", fontSize: 9 }}>
                        {value.user.name}
                      </p>
                    </div>
                    <div>
                      <BiLike color="gray" />
                      <p style={{ color: "gray", fontSize: 9 }}>
                        {value.likes}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default App;
