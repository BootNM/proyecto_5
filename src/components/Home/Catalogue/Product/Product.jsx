import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import ShoppingCartContext from "../../../../contexts/shopping-cart/ShoppingCartContext.jsx";

const Product = (props) => {
  const { product } = props;
  const shoppingCartCtx = useContext(ShoppingCartContext);
  const { addProduct } = shoppingCartCtx;

  return (
    <Card
      style={{
        width: "15rem",
        marginInline: ".2rem",
        opacity: .9
      }}
      key={product._id}
    >
      <Card.Img
        variant="top"
        style={{ height: "15rem", marginBottom: ".7rem" }}
        src={product.image}
      />
      <Card.Body style={{ 
        opacity: 1, 
        backgroundColor: "#101214d1" }}>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button
          variant="primary"
          className="botones"
          onClick={() => {
            addProduct(product);
          }}
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Product;
