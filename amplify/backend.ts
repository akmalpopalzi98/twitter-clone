import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { CustomDataStack } from "./auth/stacks/custom-data-stack";

export const backend = defineBackend({
  auth,
});

new CustomDataStack(backend, "customstack");
