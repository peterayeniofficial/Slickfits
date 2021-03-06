import Link from 'next/link';
import NavStyles from './styles/NavStyles';

import { useUser } from './User';
import SignOut from './SignOut';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';

const totalItem = (cart = []) =>
  cart.reduce(
    (tally, cartItem) => tally + (cartItem.product ? cartItem.quantity : 0),
    0
  );

export default function Nav() {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <NavStyles>
      {/* {process.env.NEXT_PUBLIC_STRIPE_KEY} */}
      <Link href="/products">Products</Link>

      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut />
          <button type="button" onClick={openCart}>
            {' '}
            My Cart <CartCount count={totalItem(user.cart)} />
          </button>
        </>
      )}
      {!user && <Link href="/signin">Signin</Link>}
    </NavStyles>
  );
}
