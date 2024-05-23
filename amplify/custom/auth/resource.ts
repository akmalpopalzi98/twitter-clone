import {
  AccountRecovery,
  Mfa,
  UserPool,
  UserPoolClient,
  UserPoolDomain,
  VerificationEmailStyle,
} from "aws-cdk-lib/aws-cognito";
import { AmplifyBackend, AmplifyStack } from "../../amplify-stack";

export class AuthStack extends AmplifyStack {
  constructor(backend: AmplifyBackend, name: string) {
    super(backend, name);
    const twitterUserpool = new UserPool(this, "twitterpool", {
      userPoolName: "twitter-clone-userpool",
      selfSignUpEnabled: true,
      userVerification: {
        emailSubject: "Please verify your account.",
        emailStyle: VerificationEmailStyle.LINK,
      },
      standardAttributes: {
        email: {
          required: true,
        },
        fullname: {
          required: true,
        },
        preferredUsername: {
          required: true,
        },
      },
      mfa: Mfa.OFF,
      signInAliases: {
        email: true,
      },
      accountRecovery: AccountRecovery.EMAIL_ONLY,
    });

    new UserPoolClient(this, "TwitterCloneClient", {
      generateSecret: false,
      userPool: twitterUserpool,
    });

    new UserPoolDomain(this, "TwitterAuthDomain", {
      userPool: twitterUserpool,
      cognitoDomain: {
        domainPrefix: "my-twitter-clone",
      },
    });
  }
}
