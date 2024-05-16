import * as cdk from "aws-cdk-lib";
import {
  AccountRecovery,
  Mfa,
  UserPool,
  UserPoolClient,
  VerificationEmailStyle,
} from "aws-cdk-lib/aws-cognito";
import { Construct } from "constructs";

export class AuthStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

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
  }
}
