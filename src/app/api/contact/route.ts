type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  phone?: unknown;
  service?: unknown;
  budget?: unknown;
  timeline?: unknown;
  message?: unknown;
};

const asTrimmedString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const formatLabel = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: "Please submit the form again." }, { status: 400 });
  }

  const name = asTrimmedString(payload.name);
  const email = asTrimmedString(payload.email);
  const company = asTrimmedString(payload.company);
  const phone = asTrimmedString(payload.phone);
  const service = asTrimmedString(payload.service);
  const budget = asTrimmedString(payload.budget);
  const timeline = asTrimmedString(payload.timeline);
  const message = asTrimmedString(payload.message);

  if (
    name.length < 2 ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    company.length === 0 ||
    service.length === 0 ||
    budget.length === 0 ||
    timeline.length === 0 ||
    message.length < 20
  ) {
    return Response.json(
      { message: "Please complete all required fields before sending your inquiry." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL || "info@axeera.com";
  const sender = process.env.RESEND_FROM_EMAIL || "Axeera Contact Form <onboarding@resend.dev>";

  if (!apiKey) {
    return Response.json(
      {
        message:
          "Direct email is not configured yet. Please add the mail provider key, or email us directly at info@axeera.com.",
      },
      { status: 503 },
    );
  }

  const subject = `New Project Inquiry: ${formatLabel(service)}`;
  const text = [
    "New project inquiry from the Axeera website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Phone: ${phone || "Not provided"}`,
    `Service: ${formatLabel(service)}`,
    `Budget: ${formatLabel(budget)}`,
    `Timeline: ${formatLabel(timeline)}`,
    "",
    "Project details:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      return Response.json(
        { message: "The email service could not send your inquiry. Please try again shortly." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { message: "We could not reach the email service. Please try again shortly." },
      { status: 502 },
    );
  }
}
