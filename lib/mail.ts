import nodemailer from "nodemailer";

export async function sendMail({
  email,
  name,
  subject,
  phone,
  body,
}: {
  phone: string;
  email: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: email,
      to: "abdullahawad598@gmail.com", // Replace with your email address
      subject: `${subject}`,
      html: `
      <div dir="rtl">
        <p>الاسم: ${name}</p>
        <p>رقم الجوال: ${phone}</p>
        <div>
          <h1>محتوي الرساله</h1>
          <p>${body}</p>
        </div>
        <p>البريد الالكتروني: ${email}</p>
      </div>
      `,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
