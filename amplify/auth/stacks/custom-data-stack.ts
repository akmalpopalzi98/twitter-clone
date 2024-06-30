import { AmplifyStack, AmplifyBackend } from "../../amplify-stack";
import { UserpoolSes } from "../constructs/userpool-ses";

export class CustomDataStack extends AmplifyStack {
  constructor(backend: AmplifyBackend, name: string) {
    super(backend, name);

    const { cfnUserPool } = backend.auth.resources.cfnResources;
    cfnUserPool.userPoolName = "twittercloneuserpool";
    cfnUserPool.emailConfiguration = { emailSendingAccount: "COGNITO_DEFAULT" };

    new UserpoolSes(this, "userpoolses", {
      userpool: backend.auth.resources.userPool,
    });
  }
}
