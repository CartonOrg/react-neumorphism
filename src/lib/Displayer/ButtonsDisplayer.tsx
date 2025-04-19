import { ComponentDisplayer } from "../../ComponentDisplayer";
import { Button } from "../components";
import { CubeIcon } from "../icons/CubeIcon";

export const ButtonsDisplayer = (): React.ReactNode => {
  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Buttons</ComponentDisplayer.Title>
      <ComponentDisplayer.Subtitle>Classic</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <Button size="xs">Click me</Button>
        <Button size="sm">Click me</Button>
        <Button size="md">Click me</Button>
        <Button size="lg">Click me</Button>
        <Button size="xl">Click me</Button>
      </ComponentDisplayer.Content>
      <ComponentDisplayer.Subtitle>With Borders</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <Button border size="xs">
          Click me
        </Button>
        <Button border size="sm">
          Click me
        </Button>
        <Button border size="md">
          Click me
        </Button>
        <Button border size="lg">
          Click me
        </Button>
        <Button border size="xl">
          Click me
        </Button>
      </ComponentDisplayer.Content>
      <ComponentDisplayer.Subtitle>Rounded</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <Button rounded size="xs">
          Click me
        </Button>
        <Button rounded size="sm">
          Click me
        </Button>
        <Button rounded size="md">
          Click me
        </Button>
        <Button rounded size="lg">
          Click me
        </Button>
        <Button rounded size="xl">
          Click me
        </Button>
      </ComponentDisplayer.Content>
      <ComponentDisplayer.Subtitle>With Icons</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <Button size="xs" iconLeft={<CubeIcon />}>
          Click me
        </Button>
        <Button size="sm" iconLeft={<CubeIcon />}>
          Click me
        </Button>
        <Button size="md" iconLeft={<CubeIcon />}>
          Click me
        </Button>
        <Button size="lg" iconLeft={<CubeIcon />}>
          Click me
        </Button>
      </ComponentDisplayer.Content>
      <ComponentDisplayer.Subtitle>Loading</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <Button isLoading size="xs">
          Loading...
        </Button>
        <Button isLoading size="sm">
          Loading...
        </Button>
        <Button isLoading size="md">
          Loading...
        </Button>
        <Button isLoading size="lg">
          Loading...
        </Button>
        <Button isLoading size="xl">
          Loading...
        </Button>
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
