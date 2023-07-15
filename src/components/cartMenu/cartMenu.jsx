import styles from './cartMenu.module.css'

import CartOption from '../cartOption/cartOption'

export default function CartMenu() {
  return (
    <div className={styles.cartmenu}>
      <div className={styles.options}>
        <CartOption />
        <CartOption />
        <CartOption />
      </div>
      <div className={styles.priceline}>
        <h2>Total</h2>
        <h2 className={styles.price}>
          R$ 99,99
        </h2>
      </div>
    </div>
  )
}