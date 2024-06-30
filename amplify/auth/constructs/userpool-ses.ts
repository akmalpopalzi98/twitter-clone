import { IUserPool, UserPoolDomain } from "aws-cdk-lib/aws-cognito";
import { Construct } from "constructs";
import { StackProps } from "aws-cdk-lib";

interface UserpoolDomainStackProps extends StackProps {
  userpool: IUserPool;
}

export class UserpoolSes extends Construct {
  constructor(scope: Construct, id: string, props: UserpoolDomainStackProps) {
    super(scope, id);
    new UserPoolDomain(this, "TwitterAuthDomain", {
      userPool: props?.userpool,
      cognitoDomain: {
        domainPrefix: "my-twitter-clone2",
      },
    });
  }
}
