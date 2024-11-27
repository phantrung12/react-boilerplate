import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { BearSlice, createBearSlice } from '~/pages/Home/slice';

export const useBoundStore = create<BearSlice>()(
  devtools((...a) => ({
    ...createBearSlice(...a),
  })),
);
