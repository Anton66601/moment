"use client"; // Necesario para habilitar el soporte en App Router de Next.js

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea"; 
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; 

// Import components Select of Shadcn UI
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

// Import Card of Shadcn UI
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Definimos el esquema de validación con Zod
const eventFormSchema = z.object({
  eventName: z.string().min(2, { message: "Event name must be at least 2 characters." }),
  eventDescription: z.string().min(10, { message: "Description must be at least 10 characters." }),
  eventStartDate: z.string().nonempty("Event start date is required."),
  eventEndDate: z.string().nonempty("Event end date is required."),
  location: z.string().min(1, { message: "Location is required." }),
  eventType: z.string().min(1, { message: "Event type is required." }), 
});

export function EventForm() {
  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      eventName: "",
      eventDescription: "",
      eventStartDate: "",
      eventEndDate: "",
      location: "",
      eventType: "",
    },
  });

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (values: z.infer<typeof eventFormSchema>) => {
    console.log(values); 
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Create Event</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Event Name */}
            <FormField
              control={form.control}
              name="eventName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter event name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="eventDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter event description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Event Start Date */}
            <FormField
              control={form.control}
              name="eventStartDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Start Date</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Event End Date */}
            <FormField
              control={form.control}
              name="eventEndDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event End Date</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Locations</SelectLabel>
                          <SelectItem value="Location A">Location A</SelectItem>
                          <SelectItem value="Location B">Location B</SelectItem>
                          <SelectItem value="Location C">Location C</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Event Type */}
            <FormField
              control={form.control}
              name="eventType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select an event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Event Types</SelectLabel>
                          <SelectItem value="Conference">Conference</SelectItem>
                          <SelectItem value="Meeting">Meeting</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Button */}
            <Button type="submit">Create Event</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save Event</Button>
      </CardFooter>
    </Card>
  );
}
