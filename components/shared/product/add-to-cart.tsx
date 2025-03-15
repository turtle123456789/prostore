'use client';
import { Button } from '@/components/ui/button';

import { Plus, Minus } from 'lucide-react';
import { Cart, CartItem } from '@/types';
// import { useToast } from '@/hooks/use-toast';
// import { ToastAction } from '@/components/ui/toast';

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
  // const { toast } = useToast();
  // const handleAddToCart = async () => {
  //   startTransition(async () => {
  //     const res = await addItemToCart(item);

  //     if (!res.success) {
  //       toast({
  //         variant: 'destructive',
  //         description: res.message,
  //       });
  //       return;
  //     }

  //     // Handle success add to cart
  //     toast({
  //       description: res.message,
  //       action: (
  //         <ToastAction
  //           className='bg-primary text-white hover:bg-gray-800'
  //           altText='Go To Cart'
  //           onClick={() => router.push('/cart')}
  //         >
  //           Go To Cart
  //         </ToastAction>
  //       ),
  //     });
  //   });
  // };

  // Handle remove from cart
  // const handleRemoveFromCart = async () => {
  //   startTransition(async () => {
  //     const res = await removeItemFromCart(item.productId);

  //     // toast({
  //     //   variant: res.success ? 'default' : 'destructive',
  //     //   description: res.message,
  //     // });

  //     return;
  //   });
  // };

  // Check if item is in cart
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button type='button' variant='outline' >
      <Minus className='w-4 h-4' />
      </Button>
      <span className='px-2'>{existItem.qty}</span>
      <Button type='button' variant='outline'>
      <Plus className='w-4 h-4' />
      </Button>
    </div>
  ) : (
    <Button className='w-full' type='button'>
       <Plus className='w-4 h-4' />
      Add To Cart
    </Button>
  );
};

export default AddToCart;
