/* eslint-disable react/prop-types */
const Main = (props) => {
  const { data } = props;
  return (
    <div className="imgContainer">
      <img src={data?.hdurl} alt="nasa-picture" className="bgImage" />
    </div>
  );
};

export default Main;
