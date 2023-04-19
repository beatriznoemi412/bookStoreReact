import "./ItemListContainer.css";
const ItemListContainer = ({greeting}) => {
  return (
    <div className="banner">
      <div className="bannerContainer">
        {greeting}
      </div>
    </div>
  )
}

export default ItemListContainer