import { formatMoney } from '../utils/money';
import './checkout.css'
import './checkout-header.css'
import Header from "./Header"

function CheckoutPage({ cart }) {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const itemsSubtotal = cart.reduce(
    (sum, item) => sum + item.product.priceCents * item.quantity,
    0
  );
  const estimatedTax = Math.round(itemsSubtotal * 0.1);
  const orderTotal = itemsSubtotal + estimatedTax;

  return (
    <>
      <title>Checkout</title>
      <Header cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((cartItem) => (
                <div key={cartItem.productId} className="cart-item-container">
                  <div className="cart-item-details-grid">
                    <img
                      className="product-image"
                      src={cartItem.product?.image || `images/products/${cartItem.productId}.jpg`}
                    />

                    <div className="cart-item-details">
                      <div className="product-name">
                        {cartItem.product?.name || "Product"}
                      </div>
                      <div className="product-price">
                        {formatMoney(cartItem.product?.priceCents || 0)}
                      </div>
                      <div className="product-quantity">
                        <span>
                          Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">
              Payment Summary
            </div>

            <div className="payment-summary-row">
              <div>Items ({totalQuantity}):</div>
              <div className="payment-summary-money">{formatMoney(itemsSubtotal)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">{formatMoney(estimatedTax)}</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">{formatMoney(orderTotal)}</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutPage
