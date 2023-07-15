import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs'

import Logo from '../logo/logo'
import Input from '../forms/input/input'
import CartButton from '../forms/cartButton/cartButton'

export default function Navbar({ cart, onRemove }) {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.search}>
        <Input type="text" placeholder="Buscar" fullWidth />
      </div>
      <CartButton
        cart={cart}
        onRemove={onRemove} 
      />
    </nav>
  )
}