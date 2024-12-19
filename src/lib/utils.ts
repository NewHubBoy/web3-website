/* eslint-disable @typescript-eslint/no-unsafe-call */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ethers } from "ethers";

export const simpleIntercept = (value: number | string, fixed: number) => {
  let _value;
  if (value === undefined || value === null) {
    return value;
  }
  try {
    const NumberArray = value.toString().split(".");
    if (NumberArray.length > 1) {
      if (NumberArray[1]!.length > fixed) {
        _value = NumberArray[0] + "." + NumberArray[1]!.substring(0, fixed);
      } else {
        _value = value;
      }
    } else {
      _value = value;
    }
  } catch (error) {
    console.error(error);
  }
  return _value;
};

export const getSimpleAddress = (address: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (ethers.isAddress(address)) {
    return (
      address.substring(0, 6) +
      "..." +
      address.substring(address.length - 4, address.length)
    );
  } else {
    return address;
  }
};

export const cn = (...inputs: ClassValue[]) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return twMerge(clsx(inputs));
};
