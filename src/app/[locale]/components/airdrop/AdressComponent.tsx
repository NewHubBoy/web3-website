"use client";
import { useAccount } from "wagmi";
import { getSimpleAddress } from "~/lib/utils";

const Address = () => {
  const { address } = useAccount();
  return (
    <div>{address ? getSimpleAddress(address ?? "0x") : "Connect Wallet"}</div>
  );
};

export default Address;
