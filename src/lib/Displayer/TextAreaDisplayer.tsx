import { useState } from "react";
import { ComponentDisplayer } from "../../ComponentDisplayer";
import { TextArea } from "../components";

export const TextAreaDisplayer = (): React.ReactNode => {
  const [value, setValue] = useState("");

  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Textarea</ComponentDisplayer.Title>
      <ComponentDisplayer.Content direction="column">
        <TextArea
          label="TextArea"
          textAreaSize="md"
          enableDynamicHeight
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
