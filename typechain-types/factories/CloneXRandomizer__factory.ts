/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  CloneXRandomizer,
  CloneXRandomizerInterface,
} from "../CloneXRandomizer";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getTokenId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class CloneXRandomizer__factory {
  static readonly abi = _abi;
  static createInterface(): CloneXRandomizerInterface {
    return new utils.Interface(_abi) as CloneXRandomizerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CloneXRandomizer {
    return new Contract(address, _abi, signerOrProvider) as CloneXRandomizer;
  }
}
