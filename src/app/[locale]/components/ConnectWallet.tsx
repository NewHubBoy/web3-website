"use client";
import { useAppKit } from "@reown/appkit/react";

export default function WalletConnect() {
  const { open, close } = useAppKit();
  return (
    <button
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        open({ view: "Connect" });
      }}
      className="cursor-pointer rounded-full bg-black px-8 py-1 text-lg font-light tracking-widest text-white hover:bg-[rgb(120,251,185)] hover:text-black"
    >
      Connect Wallet
    </button>
  );
}
