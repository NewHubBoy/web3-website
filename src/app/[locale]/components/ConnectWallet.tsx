"use client";

import { useAppKit, useAppKitTheme } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { getSimpleAddress } from "~/lib/utils";

export default function WalletConnect() {
  const { setThemeVariables } = useAppKitTheme();
  const { open } = useAppKit();
  // const { address, isConnected } = useAppKitAccount();
  const { address, isConnected } = useAccount();
  setThemeVariables({
    "--w3m-font-family": "var(--w3m-font-family)",
    "--w3m-accent": "#000",
    "--w3m-font-size-master": ".875rem",
  });
  return (
    <div className="min-w-32">
      {/* <appkit-button size="sm" balance="hide" label="Connect Wallet" /> */}
      <button
        className="rounded-full bg-black px-10 py-1 tracking-widest text-white hover:bg-[rgb(120,251,185)] hover:text-black"
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          open({
            view: isConnected ? "Account" : "Connect",
          });
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
        {address ? getSimpleAddress(address ?? "0x") : "Connect Wallet"}
      </button>
    </div>
  );
}
