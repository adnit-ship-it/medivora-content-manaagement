// Product interface - individual products with direct pricing
export interface Product {
  id: string;
  name: string;
  description: string;
  img: string;
  thumbnail: string;
  prices: {
    monthly: number;
    semiannually: number;
  };
  popular?: boolean;
  availability?: "in_stock" | "out_of_stock" | "coming_soon";
  features?: string[];
  type: "injection" | "oral_drops" | "oral_pills";
}

// Checkout page state interface
export interface CheckoutState {
  selectedProduct?: Product;
  billingCycle?: "monthly" | "semiannually";
}
