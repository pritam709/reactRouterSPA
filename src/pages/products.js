import { Link } from "react-router-dom"
const ProductusPage =()=>{
return <><h1>welcome to products page</h1>
        <ul>
            <li><Link to="/products/prod1">first product</Link></li>
            <li>second product</li>
            <li>third product</li>
        </ul>
        </>
}

export default ProductusPage

//in further projects we will take this prod1 from an backend ad prod-id using string literal 
// `/products/${prod.id}` like that