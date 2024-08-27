import { useCallback } from "react";

const CHECKOUT_SESSION_ENDPOINT =
  "http://localhost:3000/create-checkout-session";

const useCheckoutSession = () => {
  const createCheckoutSession = useCallback(async () => {
    const response = await fetch(CHECKOUT_SESSION_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }, []);

  return { createCheckoutSession };
};

export default useCheckoutSession;
