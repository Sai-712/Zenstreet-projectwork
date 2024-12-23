import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Address Details
  street: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Preferences
  notifications: boolean;
  newsletter: boolean;
  darkMode: boolean;
  
  // Form Meta
  currentStep: number;
  isSubmitting: boolean;
  lastUpdated: string;
}

interface FormStore extends FormData {
  updateField: (field: keyof FormData, value: any) => void;
  setStep: (step: number) => void;
  reset: () => void;
}

const initialState: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  notifications: false,
  newsletter: false,
  darkMode: false,
  currentStep: 0,
  isSubmitting: false,
  lastUpdated: new Date().toISOString(),
};

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      ...initialState,
      updateField: (field, value) =>
        set((state) => ({
          ...state,
          [field]: value,
          lastUpdated: new Date().toISOString(),
        })),
      setStep: (step) => set({ currentStep: step }),
      reset: () => set(initialState),
    }),
    {
      name: 'form-storage',
    }
  )
);