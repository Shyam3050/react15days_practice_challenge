import { useParams } from "react-router-dom";
const ProductDetail = () => {
    const params = useParams();
     return <h2>
        product Detail
        
       <p> {params.productId}</p>
     </h2>
};
export default ProductDetail;