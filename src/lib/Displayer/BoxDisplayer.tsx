import { ComponentDisplayer } from "../../ComponentDisplayer";
import { Box } from "../components";

export const BoxDisplayer = (): React.ReactNode => {
  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Box</ComponentDisplayer.Title>
      <ComponentDisplayer.Content direction="column">
        <Box size="xs">Box content</Box>
        <Box size="sm">Box content</Box>
        <Box size="md">Box content</Box>
        <Box size="lg">Box content</Box>
        <Box size="xl">Box content</Box>
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
