'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useFormStore } from '@/lib/store';
import { FormProgress } from './FormProgress';
import { PersonalInfo } from './steps/PersonalInfo';
import { AddressDetails } from './steps/AddressDetails';
import { Preferences } from './steps/Preferences';
import { Review } from './steps/Review';

const steps = [
  { component: PersonalInfo, label: 'Personal Information' },
  { component: AddressDetails, label: 'Address Details' },
  { component: Preferences, label: 'Preferences' },
  { component: Review, label: 'Review & Submit' },
];

export function FormLayout() {
  const currentStep = useFormStore((state) => state.currentStep);

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <FormProgress />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">{steps[currentStep].label}</h2>
            <CurrentStepComponent />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}