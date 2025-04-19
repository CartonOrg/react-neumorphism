import { ComponentDisplayer } from "../../ComponentDisplayer";
import { Input } from "../components";
import { CubeIcon } from "../icons/CubeIcon";

export const InputDisplayer = (): React.ReactNode => {
  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Input</ComponentDisplayer.Title>
      <ComponentDisplayer.Content direction="column">
        <Input
          label="Username"
          placeholder="Benjamin"
          inputSize="xs"
          iconLeft={<CubeIcon />}
          iconStyle="default"
        />
        <Input
          label="Username"
          placeholder="Benjamin"
          inputSize="sm"
          iconLeft={<CubeIcon />}
          iconStyle="inset"
        />
        <Input
          label="Username"
          placeholder="Benjamin"
          inputSize="md"
          iconLeft={<CubeIcon />}
          iconStyle="outline"
        />
        <Input label="Username" placeholder="Benjamin" inputSize="md" />
        <Input
          label="Username"
          placeholder="Benjamin"
          inputSize="lg"
          iconLeft={<CubeIcon />}
          iconRight={<CubeIcon />}
          iconStyle="outline"
        />
        <Input
          label="Username"
          placeholder="Benjamin"
          inputSize="xl"
          iconRight={<CubeIcon />}
          iconStyle="outline"
        />
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
