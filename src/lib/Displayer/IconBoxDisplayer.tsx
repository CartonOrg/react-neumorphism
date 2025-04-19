import { ComponentDisplayer } from "../../ComponentDisplayer";
import { IconBox } from "../components";
import { CubeIcon } from "../icons/CubeIcon";

export const IconBoxDisplayer = (): React.ReactNode => {
  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>IconBox</ComponentDisplayer.Title>
      <ComponentDisplayer.Subtitle>Classic</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <IconBox size="xs" icon={<CubeIcon />} />
        <IconBox size="sm" icon={<CubeIcon />} />
        <IconBox size="md" icon={<CubeIcon />} />
        <IconBox size="lg" icon={<CubeIcon />} />
        <IconBox size="xl" icon={<CubeIcon />} />
        <IconBox inset size="xl" icon={<CubeIcon />} />
        <IconBox inset size="lg" icon={<CubeIcon />} />
        <IconBox inset size="md" icon={<CubeIcon />} />
        <IconBox inset size="sm" icon={<CubeIcon />} />
        <IconBox inset size="xs" icon={<CubeIcon />} />
      </ComponentDisplayer.Content>
      <ComponentDisplayer.Subtitle>Rounded</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <IconBox size="xs" rounded icon={<CubeIcon />} />
        <IconBox size="sm" rounded icon={<CubeIcon />} />
        <IconBox size="md" rounded icon={<CubeIcon />} />
        <IconBox size="lg" rounded icon={<CubeIcon />} />
        <IconBox size="xl" rounded icon={<CubeIcon />} />
        <IconBox inset size="xl" rounded icon={<CubeIcon />} />
        <IconBox inset size="lg" rounded icon={<CubeIcon />} />
        <IconBox inset size="md" rounded icon={<CubeIcon />} />
        <IconBox inset size="sm" rounded icon={<CubeIcon />} />
        <IconBox inset size="xs" rounded icon={<CubeIcon />} />
      </ComponentDisplayer.Content>
      <ComponentDisplayer.Subtitle>With Border</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <IconBox size="xs" border icon={<CubeIcon />} />
        <IconBox size="sm" border icon={<CubeIcon />} />
        <IconBox size="md" border icon={<CubeIcon />} />
        <IconBox size="lg" border icon={<CubeIcon />} />
        <IconBox size="xl" border icon={<CubeIcon />} />
        <IconBox inset size="xl" border icon={<CubeIcon />} />
        <IconBox inset size="lg" border icon={<CubeIcon />} />
        <IconBox inset size="md" border icon={<CubeIcon />} />
        <IconBox inset size="sm" border icon={<CubeIcon />} />
        <IconBox inset size="xs" border icon={<CubeIcon />} />
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
