import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { UserPoolCustomDomain } from "./custom/userpooldomain/resource";

const backend = defineBackend({
  auth,
});

const { cfnUserPool } = backend.auth.resources.cfnResources;
cfnUserPool.userPoolName = "twittercloneuserpool2";
cfnUserPool.emailConfiguration = { emailSendingAccount: "COGNITO_DEFAULT" };

const { userPool } = backend.auth.resources;

new UserPoolCustomDomain(backend, "UserPoolDomainStack", {
  userpool: userPool,
});
