export interface block {
  bits: string,
  chainWork: string,
  difficulty: number,
  hash: string,
  height: number,
  merkleRoot: string,
  miner: string,
  nonce: string,
  previousBlock: string,
  size: number,
  time: number,
  timestampHumanReadable?: string,
  timestamp: number,
  version: number,
}

export interface vin {
  coinbase?: string,
  sequence?: number,
  value: number,
  address?: string,
}

export interface vout {
  value: number,
  address: string,
  scriptPubKey: {
    addresses: Array<any>,
  }
}

export interface transaction {
  blockHash: string
  blockHeight: number,
  fee: number,
  hash: string,
  index: number,
  lockTime: number,
  outputValue: number,
  overwintered: boolean,
  shielded: boolean,
  shieldedValue: number,
  timestamp: number,
  type: string,
  value: number,
  version: number,
  vin: Array<vin>,
  vjoinsplit: Array<any>,
  vout: Array<vout>
}

export interface transformedTransaction extends transaction {
  timestampHumanReadable?: string,
  movement?: any,
  typeHumanReadable?: TX_TYPES | string,
}

export interface transformedBlockTransaction extends transaction {
  vinSum: number,
  voutSum: number,
}

export enum TX_TYPES { // update to latest TS and eslint
  minerReward = 'Miner Reward', // eslint-disable-line
  valueTransfer = 'Transfer', // eslint-disable-line
}

export const geTxTypeValue = (type: string) => {
  if (type === 'minerReward') return TX_TYPES.minerReward;
  else if (type === 'valueTransfer') return TX_TYPES.valueTransfer;
  else return type;
}