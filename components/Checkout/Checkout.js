import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const { cart, total_amount, shipping_fee } = useSelector(
    (state) => state.CartReducer
  );

  return (
    <>
      <div className="container">
        <div className="row g-5 checkout-form">
          <CheckoutForm />

          <div className="col-lg-5">
            <div className="row pl--50 pl_md--0 pl_sm--0">
              <div className="col-12 mb--60">
                <h4 className="checkout-title">Cart Total</h4>

                <div className="checkout-cart-total">
                  <h4>
                    Product <span>Total</span>
                  </h4>

                  <ul>
                    {cart.map((data, index) => (
                      <li key={index}>
                        {data.product.courseTitle || data.product.title}
                        <span>₹{data.product.price * data.amount}.00</span>
                      </li>
                    ))}
                  </ul>

                  <p>
                    Sub Total
                    <span>₹{total_amount}.00</span>
                  </p>

                  <p>
                    Shipping Fee <span>₹{shipping_fee}.00</span>
                  </p>

                  <h4 className="mt--30">
                    Grand Total <span>₹{total_amount + shipping_fee}.00</span>
                  </h4>
                </div>
              </div>

              <div className="col-12 mb--60">

                <div className="plceholder-button mt--50">
                  <button className="rbt-btn btn-gradient hover-icon-reverse">
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Place order</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Checkout), { ssr: false });
