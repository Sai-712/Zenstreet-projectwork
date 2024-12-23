'use client';

import { Progress } from '@/components/ui/progress';
import { useFormStore } from '@/lib/store';

export function FormProgress() {
  const currentStep = useFormStore((state) => state.currentStep);
  const progress = ((currentStep + 1) / 4) * 100;

  return (
    <div className="w-full space-y-2">
      <Progress value={progress} className="h-2" />
      <p className="text-sm text-muted-foreground text-center">
        Step {currentStep + 1} of 4
      </p>
    </div>
  );
}