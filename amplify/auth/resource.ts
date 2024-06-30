import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: "LINK",
      verificationEmailSubject: "Please verify your email",
    },
  },
  userAttributes: {
    fullname: {
      required: true,
    },
    preferredUsername: {
      required: true,
    },
  },
  accountRecovery: "EMAIL_ONLY",
});
