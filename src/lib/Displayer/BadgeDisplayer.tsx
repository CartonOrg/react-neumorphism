import { ComponentDisplayer } from "../../ComponentDisplayer";
import Badge from "../components/Badge/Badge";

export const BadgeDisplayer = (): React.ReactNode => {
  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Badge</ComponentDisplayer.Title>
      <ComponentDisplayer.Content>
        <Badge size="xs">Badge</Badge>
        <Badge size="sm">Badge</Badge>
        <Badge size="md">Badge</Badge>
        <Badge size="lg">Badge</Badge>
        <Badge size="xl">Badge</Badge>
        <Badge inset={false} size="xl">
          Badge
        </Badge>
        <Badge inset={false} size="lg">
          Badge
        </Badge>
        <Badge inset={false} size="md">
          Badge
        </Badge>
        <Badge inset={false} size="sm">
          Badge
        </Badge>
        <Badge inset={false} size="xs">
          Badge
        </Badge>
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
