import { useState } from "react";
import { ComponentDisplayer } from "../../ComponentDisplayer";
import { Dropdown } from "../components";

export const DropdownDisplayer = (): React.ReactNode => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Dropdown</ComponentDisplayer.Title>
      <ComponentDisplayer.Content direction="column">
        <Dropdown
          placeholder="Select an option"
          size="sm"
          value={value}
          options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
          ]}
          onChange={setValue}
        />
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
