function Footer() {
  return (
    <div className='text-white bg-black p-5 font-extralight cursor-default mt-auto'>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className="max-w-md">
          <h1 className='mb-5 text-xl'>
            <b>SHOPPING CART</b>
          </h1>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis magni ut sit, veniam
            magnam nesciunt corporis neque aliquam earum facere repudiandae itaque exercitationem
            accusamus provident nemo quasi! Modi, amet iste.
          </p>
        </div>
        <div className='flex gap-10'>
          <ul className="text-sm">
            <li className='text-xl mb-5'>
              <b>SHOP</b>
            </li>
            <li className='hover:underline'>Clothing</li>
            <li className='hover:underline'>Juwelry</li>
            <li className='hover:underline'>Tech</li>
            <li className='hover:underline'>Men</li>
            <li className='hover:underline'>Women</li>
          </ul>
          <ul className="text-sm">
            <li className='text-xl mb-5'>
              <b>USEFUL LINKS</b>
            </li>
            <li className='hover:underline'>Home</li>
            <li className='hover:underline'>Shop</li>
            <li className='hover:underline'>Cart</li>
            <li className='hover:underline'>Repository</li>
          </ul>
          <ul className="text-sm">
            <li className="text-xl mb-5">
              <b>HELP</b>
            </li>
            <li className="hover:underline">Shipping & Returns</li>
            <li className="hover:underline">Repairs</li>
            <li className="hover:underline">Warranty</li>
            <li className="hover:underline">FAQ</li>
            <li className="hover:underline">Contact Us</li>
          </ul>
        </div>
      </div>
      <hr className='mb-2 mt-6 border-1 border-gray-500' />
      <div className='flex flex-col items-center text-sm'>
        <p>&copy; 2023 Eyuhar Inc. All Rights Reserved.</p>
        <p>Project made by eyuhar.</p>
      </div>
    </div>
  );
}

export default Footer;
