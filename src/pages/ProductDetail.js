import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../service/productService";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartAction";
import { toast } from "react-toastify";
function ProductDetail() {
  let { name } = useParams();
  const[product,setProduct]=useState({});

  const dispatch=useDispatch();

  useEffect(()=>{
    let productService=new ProductService();
    productService.getByProductName(name).then(result=>setProduct(result.data.data))
  },[])

  const navigate=useNavigate()

  const BackHome=()=>{
    navigate("/")
  }

  const AddToCart=(product)=>{
     dispatch(addToCart(product))
     toast.success(`${product.productName} sepete eklendi`)
  }
  return (
    <div className="App">
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='/images/avatar/large/steve.jpg'
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.quantityPerUnit}</Card.Meta>
            <Card.Description>
              <strong>{product.unitPrice} TL</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button onClick={()=>AddToCart(product)} basic color='green'>
                Sepete Ekle
              </Button>
              <Button onClick={()=>BackHome()} basic color='red'>
                Geri Dön
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>

    </div>
  );
}
export default ProductDetail;