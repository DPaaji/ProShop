import { Container, Card, Row, Col } from "react-bootstrap";

import products from "../../products";
import ProductCard from "../ProductCard/ProductCard.component";

const Home = () => {
    return (  
    <>
    <Container>
        <h1 className="py-3">Latest Products</h1>
        <Row xs={2} md={4} lg={4} xl={4}>
        {
            products.map((product) => {
                return(
                    <Col key={product._id}  className="p-3">
                    <ProductCard product={product}/>
                    </Col>
                )
            })
        }
     </Row>
    </Container>

    </>    
    );
};
 
export default Home;