import { atom } from 'jotai'

type VM = {
  vmName: string
}

type Host = {
  hostName: string
  vms: VM[]
}

type Pool = {
  poolName: string
  hosts: Host[]
}

type PoolsData = {
  pools: Pool[]
}

// @ts-expect-error ts2769
export const dataAtom = atom<PoolsData>({})
