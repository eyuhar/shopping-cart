import { useOutletContext, useParams } from 'react-router-dom';
import { starRating } from './Shop';
import { useState } from 'react';

function Product({ cart, setCart }) {
  const { id } = useParams();
  const products = useOutletContext();
  const product = products.find((product) => product.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  function addToCart() {
    if (cart.find((x) => x.id === id)) {
      const index = cart.findIndex((elem) => elem.id === id);
      const updatedOrder = { ...cart[index], quantity: cart[index].quantity + quantity };
      const newCart = [...cart.slice(0, index), updatedOrder, ...cart.slice(index + 1)];
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { id: id, quantity: quantity }]);
    }
  }

  return (
    <div className='flex flex-col sm:flex-row items-center justify-center gap-10 mt-10 mb-16 p-5'>
      <div className='p-4 min-w-max'>
        <img className='w-72' src={product.image} alt={product.title} />
      </div>
      <div className='flex flex-col max-w-lg'>
        <p className='pb-3'>
          <b className='font-medium'>Category:</b> {product.category}
        </p>
        <h2 className='font-semibold'>{product.title}</h2>
        <div className='flex gap-1'>
          <div className='flex'>{starRating(product.rating.rate)}</div>
          <b>{product.rating.rate}</b>
          <p className='font-extralight'>&#040;{product.rating.count}&#041;</p>
        </div>
        <p className='font-medium pt-3 pb-10 text-2xl'>{product.price}&#8364;</p>
        <p className='mb-24'>{product.description}</p>
        <div className='flex self-center gap-1'>
          <div
            className='border-black border-[2px] rounded-md w-6 text-center font-medium hover:bg-black hover:text-white cursor-pointer'
            onClick={() => setQuantity((prev) => prev - 1)}
          >
            -
          </div>
          <input
            className='border-[2px] border-black rounded-md w-12 text-center cursor-default'
            type='text'
            name='quantity-input'
            id='quantity-input'
            inputMode='numeric'
            value={quantity}
            readOnly
          />
          <div
            className='border-black border-[2px] rounded-md w-6 text-center font-medium hover:bg-black hover:text-white cursor-pointer'
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </div>
        </div>
        <button
          className='p-2 mt-2 font-medium border-2 self-center border-black rounded-md hover:bg-black hover:text-white'
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
