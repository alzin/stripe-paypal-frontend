import React from "react";
import StripeProvider from "./components/StripeProvider";
import StripeCheckoutButton from "./components/StripeCheckoutButton";
import PayPalButton from "./components/PayPalButton";

import "./app.css";

const App = () => (
  <div>
    <StripeProvider>
      <StripeCheckoutButton />
    </StripeProvider>
    <PayPalButton />
  </div>
);

export default App;
