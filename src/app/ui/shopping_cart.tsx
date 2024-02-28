// ShoppingCartButton.tsx
import Link from 'next/link';
import React from 'react';

interface ShoppingCartButtonProps {
  itemCount: number;
}

const ShoppingCartButton: React.FC<ShoppingCartButtonProps> = ({ itemCount }) => {
  return (
    <div className='py-3 px-5 border-2 rounded-lg'>
      <Link href={'/shopping_cart'} className='flex flex-col' >
        <span className='absolute top-6 text-sm'>{itemCount > 0 ? ` ${itemCount}` : ''}</span>
        <span role="img" aria-label="Shopping Cart" className='text-2xl'>🛒</span>
        
      </Link >
    </div>

  );
};

export default ShoppingCartButton;
