import React from "react";
import CurrentFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  const getTotalPrice = () => {
    console.log(basket);
    let price = 0;
    basket.forEach((item) => {
      price = price + item.price;
    });
    return price;
  };
  return (
    <div className="subtotal">
      <CurrentFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gifts">
              <input type="checkbox" />
              &nbsp;This Order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalPrice()} // part of homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick = {e => history.push('/payment')}>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
