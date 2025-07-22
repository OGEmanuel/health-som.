import { create } from 'zustand';

type HospitalStore = {
  selectedHospital: number | null;
  setSelectedHospital: (id: number | null) => void;
};

export const useHospitalStore = create<HospitalStore>((set) => ({
  selectedHospital: null,
  setSelectedHospital: (id) => set({ selectedHospital: id }),
}));
