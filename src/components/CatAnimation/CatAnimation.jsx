import './CatAnimation.css';

const CatAnimation = () => {
  return (
    <div className="cat-walk-container">
        <img
        src={require("../../assets/cat.gif")}
        alt="cat"
        className="cat-animation"
        />
    </div>
  );
}

export default CatAnimation;