import { defineAuth } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
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
