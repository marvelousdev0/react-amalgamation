import { atom } from 'recoil'

export const count = atom<number>({
	key: 'count',
	default: 0,
})
