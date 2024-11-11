import { useEffect, useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import fetchCall from "./fetch";

function App() {
  //  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetchCall();
      setData(res);
      console.log(res);
    };
    getData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
