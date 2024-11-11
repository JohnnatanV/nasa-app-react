/* eslint-disable react/prop-types */
const SideBar = (props) => {
  const { handleToggleModal, data } = props;

  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">Description</p>
          <p className="explanation">{data?.explanation}</p>
          <span className="dateText">{data?.date}</span>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
