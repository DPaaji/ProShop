import Reviews from "../rating/Rating.component";
import {Col, Card} from "react-bootstrap"

const ProductCard = ({product}) => {
    return (  
            <>
           
                    <Card className="rounded">
                        <Card.Img variant="top" className="p-3 rounded" src={product.image} />
                        <Card.Body>
                        <Card.Title><a href="">{product.name}</a></Card.Title>
                        <Reviews key={product._id} product={product}/>
                        <Card.Text>
                          {product.rating} from {product.numReviews}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    
            </>
            );
}
 
export default ProductCard;