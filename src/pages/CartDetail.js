import { useSelector } from 'react-redux';
import { Label, Table } from 'semantic-ui-react'
function CartDetail() {
  const { cartItems } = useSelector(state => state.cart)
  return (
    <div className="App">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Ürün Açıklaması</Table.HeaderCell>
            <Table.HeaderCell>Ürün Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Ürün Adeti</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
         {cartItems.map(cartItem=>(
          <Table.Row>
            <Table.Cell>{cartItem.product.productName}</Table.Cell>
            <Table.Cell>{cartItem.product.quantityPerUnit}</Table.Cell>
            <Table.Cell>{cartItem.product.unitPrice}</Table.Cell>
            <Table.Cell>{cartItem.quantity}</Table.Cell>
          </Table.Row>
         ))}
          
        </Table.Body>
      </Table>
    </div>
  );
}
export default CartDetail;