import { Suspense } from "react";
import type { Metadata } from "next";
import { Checkout } from "./Checkout";

export const metadata: Metadata = {
  title: "Finalizar pedido",
  robots: { index: false },
};

export default function CheckoutPage() {
  return (
    <Suspense>
      <Checkout />
    </Suspense>
  );
}
