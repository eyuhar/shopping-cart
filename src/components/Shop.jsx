import { useOutletContext, Link } from 'react-router-dom';

export function starRating(rating) {
  const stars = Math.round(rating);
  let result = [];

  for (let i = 0; i < stars; i++) {
    result.push(
      <svg
        key={i}
        className='w-5'
        fill='#fbbf24'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <title>star</title>
        <path d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z' />
      </svg>,
    );
  }
  return result;
}

function Shop({ cart }) {
  const products = useOutletContext();

  return (
    <ul className='flex flex-wrap justify-center gap-10 p-5'>
      {products.map((product) => {
        return (
          <li
            key={product.id}
            className='w-60 h-auto flex flex-col gap-3 justify-between p-2 cursor-default hover:border-2 hover:border-gray-300 hover:p-1.5'
          >
            <img src={product.image} alt={product.title} className='w-52 mt-auto mb-auto p-4' />
            <div className='h-44 flex flex-col gap-2'>
              <hr className='border-1 border-gray-600 ' />
              <Link to={'product/' + product.id}>
                <h2 className='hover:underline'>{product.title}</h2>
              </Link>
              <div className='flex gap-1 mt-auto'>
                <div className='flex'>{starRating(product.rating.rate)}</div>
                <b>{product.rating.rate}</b>
                <p className='font-extralight'>&#040;{product.rating.count}&#041;</p>
              </div>
              <p className='font-medium pt-3 text-xl'>{product.price}&#8364;</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Shop;
