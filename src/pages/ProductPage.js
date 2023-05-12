import { useParams } from "react-router-dom"
const ProductuDetailPage=()=>{
const param= useParams();
    return <>
        <h2>product details</h2>
        <p>{param.id}</p>
    </>

}

export default ProductuDetailPage