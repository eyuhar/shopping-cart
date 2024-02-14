import { useOutletContext, Link } from 'react-router-dom';

function Cart({ cart, setCart }) {
  const products = useOutletContext();

  function sumTotal() {
    let total = 0;
    cart.forEach((product) => {
      total += products[product.id - 1].price * product.quantity;
    });
    return Math.round(total * 100) / 100;
  }

  function changeQuantity(id, type) {
    const index = cart.findIndex((product) => product.id === id);
    const updatedOrder =
      type === 'increase'
        ? { ...cart[index], quantity: cart[index].quantity + 1 }
        : { ...cart[index], quantity: cart[index].quantity === 0 ? 0 : cart[index].quantity - 1 };
    const newCart = [...cart.slice(0, index), updatedOrder, ...cart.slice(index + 1)];
    setCart(newCart);
  }

  return cart.length !== 0 ? (
    <div className='flex flex-col items-center p-5'>
      <h2 className='text-black font-medium text-lg pb-10 '>YOUR CART</h2>
      <table className='table-fixed min-w-[360px] max-w-5xl text-gray-600'>
        <thead>
          <tr className=''>
            <th className='w-1/2 pb-8  font-medium'>ITEM</th>
            <th className='pb-8  font-medium'>PRICE</th>
            <th className='pb-8  font-medium'>QUANTITY</th>
            <th className='pb-8  font-medium'>TOTAL</th>
          </tr>
        </thead>
        <tbody className='font-normal'>
          {cart.map((product) => (
            <tr key={product.id}>
              <td className='flex gap-4 items-center pb-5 pr-1'>
                <img
                  src={products[product.id - 1].image}
                  alt={products[product.id - 1].title}
                  className='w-10'
                />
                <Link to={'/shop/product/' + product.id}>
                  <p className='hover:underline'>{products[product.id - 1].title}</p>
                </Link>
              </td>
              <td className='text-center pb-5 pr-1'>{products[product.id - 1].price}&#8364;</td>
              <td className='pb-5 pr-1'>
                <div className='flex flex-col sm:flex-row items-center justify-center self-center gap-1'>
                  <div
                    className='border-black border-[1px] rounded-md w-6 text-center font-medium hover:bg-black hover:text-white cursor-pointer'
                    onClick={() => changeQuantity(product.id, 'decrease')}
                  >
                    -
                  </div>
                  <input
                    className='border-[1px] border-black rounded-md w-8 text-center cursor-default'
                    type='text'
                    name='quantity-input'
                    id={`quantity-${product.id}`}
                    inputMode='numeric'
                    value={product.quantity}
                    readOnly
                  />
                  <div
                    className='border-black border-[1px] rounded-md w-6 text-center font-medium hover:bg-black hover:text-white cursor-pointer'
                    onClick={() => changeQuantity(product.id, 'increase')}
                  >
                    +
                  </div>
                </div>
              </td>
              <td className='text-center pb-5'>
                {product.quantity * products[product.id - 1].price}&#8364;
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className='w-full max-w-5xl border-1 border-gray-600 mb-10' />
      <div className='w-full max-w-5xl flex items-center justify-end gap-2'>
        <p className='font-normal text-sm'>SUM TOTAL:</p>
        <p className='font-medium text-lg'>{sumTotal()} &#8364;</p>
      </div>
      <div className='w-full max-w-5xl flex items-center justify-end gap-2'>
        <button
          className='p-2 mt-2 font-medium border-2 self-center border-black rounded-md hover:bg-black hover:text-white'
          onClick={() => alert('Thank you for your purchase!')}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  ) : (
    <p className='text-center mt-auto mb-auto'>No Items in your Cart!</p>
  );
}

export default Cart;
