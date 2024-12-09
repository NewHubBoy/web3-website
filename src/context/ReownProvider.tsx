// context/index.tsx
"use client";

import { wagmiAdapter, projectId } from "~/config/reown";
// import { QueryClient } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";

import {
  mainnet,
  arbitrum,
  avalanche,
  base,
  optimism,
  polygon,
} from "@reown/appkit/networks";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";
import { QueryProvider } from "./QueryProvider";

// Set up queryClient
// const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
  name: "web3-website",
  description: "AppKit Example",
  url: "https://reown.com/appkit", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum, avalanche, base, optimism, polygon],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  const initialState = cookieToInitialState(
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    wagmiAdapter.wagmiConfig as Config,
    cookies,
  );

  return (
    <WagmiProvider
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      config={wagmiAdapter.wagmiConfig as Config}
      initialState={initialState}
    >
      <QueryProvider>{children}</QueryProvider>
    </WagmiProvider>
  );
}

export default ContextProvider;
