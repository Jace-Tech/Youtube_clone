import ProductCard from "./ProductCard"
import { productItems } from "./data"
import "./css/App.css"

const App = () => {

  return (
        <div className="product-wrapper">
            <h1 className="page-title">Product Items</h1>

            <div className="product-container">
                { 
                    productItems.map(item => (
                        <ProductCard {...item} key={item.id} />
                    )) 
                }
            </div>
        </div>
  )
}

export default App
