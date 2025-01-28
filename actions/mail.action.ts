"use server";

import { sendMail } from "@/lib/mail";

export const send = async ({
  body,
  phone,
  name,
  email,
}: {
  phone: string;
  name: string;
  body: string;
  email: string;
}) => {
  await sendMail({
    name: name,
    phone,
    email,
    subject: body,
    body: `<h1>${body}</h1>`,
  });
};
