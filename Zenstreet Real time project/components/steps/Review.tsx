'use client';

import { Button } from '@/components/ui/button';
import { useFormStore } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';

export function Review() {
  const formData = useFormStore();
  const { toast } = useToast();

  const handleSubmit = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Form submitted",
      description: "Thank you for completing the form!",
    });
    
    formData.reset();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <section className="space-y-2">
          <h3 className="text-lg font-medium">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4 rounded-lg border p-4">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p>{formData.firstName} {formData.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p>{formData.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p>{formData.phone}</p>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-medium">Address</h3>
          <div className="rounded-lg border p-4">
            <p>{formData.street}</p>
            <p>{formData.city}, {formData.state} {formData.zipCode}</p>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-medium">Preferences</h3>
          <div className="space-y-2 rounded-lg border p-4">
            <div className="flex justify-between">
              <span>Push Notifications</span>
              <span>{formData.notifications ? 'Enabled' : 'Disabled'}</span>
            </div>
            <div className="flex justify-between">
              <span>Newsletter</span>
              <span>{formData.newsletter ? 'Subscribed' : 'Not subscribed'}</span>
            </div>
            <div className="flex justify-between">
              <span>Dark Mode</span>
              <span>{formData.darkMode ? 'Enabled' : 'Disabled'}</span>
            </div>
          </div>
        </section>
      </div>

      <div className="flex gap-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => formData.setStep(2)}
          className="w-full"
        >
          Back
        </Button>
        <Button 
          onClick={handleSubmit}
          className="w-full"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}