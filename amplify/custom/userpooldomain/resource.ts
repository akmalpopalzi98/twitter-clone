import { IUserPool, UserPoolDomain } from "aws-cdk-lib/aws-cognito";
import { AmplifyBackend, AmplifyStack } from "../../amplify-stack";
import { StackProps } from "aws-cdk-lib";

interface UserpoolDomainStackProps extends StackProps {
  userpool: IUserPool;
}

export class UserPoolCustomDomain extends AmplifyStack {
  constructor(
    backend: AmplifyBackend,
    name: string,
    props: UserpoolDomainStackProps
  ) {
    super(backend, name);
    new UserPoolDomain(this, "TwitterAuthDomain", {
      userPool: props?.userpool,
      cognitoDomain: {
        domainPrefix: "my-twitter-clone2",
      },
    });
  }
}
