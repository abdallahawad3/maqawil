"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CONTACT_SCHEMA } from "@/validation";
import { Textarea } from "./ui/textarea";
import { send } from "@/actions/mail.action";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof CONTACT_SCHEMA>>({
    resolver: zodResolver(CONTACT_SCHEMA),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      tellUs: "",
    },
  });

  async function onSubmit(values: z.infer<typeof CONTACT_SCHEMA>) {
    await send({
      body: values.tellUs,
      name: values.name,
      email: values.email,
      phone: values.phone,
    });

    toast({
      title: "تمت بنجاح",
      description: "تم ارسال الرساله وسوف يتم التواصل معكم عن قريب",
      duration: 2000,
    });

    form.reset({ email: "", name: "", phone: "", tellUs: "" });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الاسم</FormLabel>
                <FormControl>
                  <Input placeholder="ادخل الاسم" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الهاتف</FormLabel>
                <FormControl>
                  <Input placeholder="+6995959995" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ادخل البريد الاكتروني</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="mail@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tellUs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ادخل طلبك باختصار</FormLabel>
                <FormControl>
                  <Textarea placeholder="اريد تشطيب داخلي" className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">ارسال</Button>
        </form>
      </Form>
    </>
  );
}
