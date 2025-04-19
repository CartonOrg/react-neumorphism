import { useState } from "react";
import { ComponentDisplayer } from "../../ComponentDisplayer";
import { Checkbox } from "../components";

export const CheckboxDisplayer = (): React.ReactNode => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Checkbox</ComponentDisplayer.Title>
      <ComponentDisplayer.Content direction="row">
        <Checkbox
          disabled={true}
          inputSize="xs"
          id="checkbox-xs"
          label="Checkbox xs"
          checked={checked}
          onChange={handleChange}
        />
        <Checkbox
          inputSize="sm"
          id="checkbox-sm"
          label="Checkbox sm"
          checked={checked}
          onChange={handleChange}
        />
        <Checkbox
          inputSize="md"
          id="checkbox-md"
          label="Checkbox md"
          checked={checked}
          onChange={handleChange}
        />
        <Checkbox
          inputSize="lg"
          id="checkbox-lg"
          label="Checkbox lg"
          checked={checked}
          onChange={handleChange}
        />
        <Checkbox
          inputSize="xl"
          id="checkbox-xl"
          label="Checkbox xl"
          checked={checked}
          onChange={handleChange}
        />
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
