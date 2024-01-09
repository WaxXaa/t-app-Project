import ProductCard from "./ProductCard"
import './cards.css'
const Cards = () => {
  return (
    <>
      <div className="product-card-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  )
}
export default Cards