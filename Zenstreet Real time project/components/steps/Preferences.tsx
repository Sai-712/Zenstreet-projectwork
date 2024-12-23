'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormDescription } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { useFormStore } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  notifications: z.boolean(),
  newsletter: z.boolean(),
  darkMode: z.boolean(),
});

export function Preferences() {
  const { updateField, setStep } = useFormStore();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notifications: useFormStore.getState().notifications,
      newsletter: useFormStore.getState().newsletter,
      darkMode: useFormStore.getState().darkMode,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    Object.entries(values).forEach(([key, value]) => {
      updateField(key as keyof typeof values, value);
    });
    
    toast({
      title: "Progress saved",
      description: "Your preferences have been saved.",
    });
    
    setStep(3);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="notifications"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Push Notifications</FormLabel>
                <FormDescription>
                  Receive notifications about updates and activity.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="newsletter"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Newsletter</FormLabel>
                <FormDescription>
                  Receive our weekly newsletter with updates.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="darkMode"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Dark Mode</FormLabel>
                <FormDescription>
                  Enable dark mode for a better viewing experience.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => setStep(1)}
            className="w-full"
          >
            Back
          </Button>
          <Button type="submit" className="w-full">Continue</Button>
        </div>
      </form>
    </Form>
  );
}