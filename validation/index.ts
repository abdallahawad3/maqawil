import { z } from "zod";

export const CONTACT_SCHEMA = z.object({
  name: z.string().min(2, {
    message: "الاسم يجب ان يحتوي علي الاقل ثلاث احرف",
  }),
  email: z.string().email({ message: "من ضقضلك ادخل ايميل صحيح" }),
  phone: z.string().min(10, {
    message: "رقم الجوال مطلوب",
  }),
  tellUs: z.string().min(5).max(50, {
    message: "ادخل طليك باختصار 20 حرف اقصي عدد",
  }),
});
