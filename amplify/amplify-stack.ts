import { Backend } from "@aws-amplify/backend";
import { BackendAuth } from "@aws-amplify/backend-auth";
import { AmplifyData } from "@aws-amplify/data-construct";
import { ConstructFactory } from "@aws-amplify/plugin-types";
import { IConstruct, Node } from "constructs";

export type AmplifyBackend = Backend<{
  auth: ConstructFactory<BackendAuth>;
  data: ConstructFactory<AmplifyData>;
}>;

export abstract class AmplifyStack implements IConstruct {
  public readonly node: Node;
  constructor(backend: AmplifyBackend, name: string) {
    const stack = backend.createStack(name);
    this.node = stack.node;

    return stack;
  }
}
