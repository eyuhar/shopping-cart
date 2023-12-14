import { Link } from 'react-router-dom';

function Header({ cart }) {
  return (
    <>
      <div className='flex sticky top-0 gap-5 al justify-between items-center p-4 bg-white'>
        <h1 className='text-black font-bold text-2xl whitespace-nowrap cursor-default'>
          Shopping Cart
        </h1>
        <input
          id='search-bar'
          type='text'
          placeholder='Search'
          className='hidden rounded-md p-1 sm:inline-block outline-none border-2 border-slate-600'
        />
        <nav>
          <ul className='flex gap-3 text-white'>
            <li className='text-black hover:underline cursor-default'>
              <Link to={'home'}>Home</Link>
            </li>
            <li className='text-black hover:underline cursor-default'>
              <Link to='shop'>Shop</Link>
            </li>
            <li className='flex cursor-default'>
              <Link to={'cart'}>
                <svg className='w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                  <title>cart-outline</title>
                  <path d='M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z' />
                </svg>
              </Link>
              <div className='text-red-600 font-medium text-xs'>{cart.length}</div>
            </li>
          </ul>
        </nav>
      </div>
      <hr className='border-1 border-slate-400 w-11/12 self-center mb-5' />
    </>
  );
}

export default Header;
