export const TRANSACTIONHEADER = [
  "#",
  "Receipient Phone",
  "Receipient email",
  "Email status",
  "sms status",
  "Message",
  "Ref Number",
  "."
];

export const API_INTRO_HEADERS = [
  { id: 1, name: "introduction", icon: "mdi-bank-transfer" },
  { id: 2, name: "Authentication", icon: "mdi-bank-transfer" },
  { id: 3, name: "Status Codes", icon: "mdi-bank-transfer" }
];

export const API_HEADERS = [
  { id: 4, name: "Register", icon: "mdi-bank-transfer" },
  { id: 5, name: "Login", icon: "mdi-bank-transfer" },
  { id: 6, name: "Send SMS", icon: "mdi-bank-transfer" },
  { id: 7, name: "Send SMS", icon: "mdi-bank-transfer" }
];

export const API_BODY = [
  {
    id: 1,
    title: "Introduction",
    text: ` <p class="paragraph">Learn how to integrate our APIs into your application</p>`,
    code: `
{
  "status": [boolean],  // Only true if the details provided could be processed and no error occured while processing
  "message": [string], // Explains why status is false... Entirely informational. Please only log this but do not use for your checks
  "data": [object]    // contains actionable result of processing if present
}`
  }
];
