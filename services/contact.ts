"use server";

export type ContactFormState = {
  success: boolean;
  message: string;
};

export const handleContact = async (
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> => {
  const email = formData.get("email");
  const subject = formData.get("subject");
  const body = formData.get("body");

  if (!email || !subject || !body) {
    return {
      success: false,
      message: "Email, subject, and message are required.",
    };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages`, {
      method: "POST",
      body: JSON.stringify({
        data: {
          email,
          subject,
          body,
        },
      }),
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      return {
        success: false,
        message:
          errorData?.error?.message ??
          `Failed to send message (status ${res.status})`,
      };
    }

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you shortly.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later.",
    };
  }
};
