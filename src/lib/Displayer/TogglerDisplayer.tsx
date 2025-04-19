import { useState } from "react";
import { ComponentDisplayer } from "../../ComponentDisplayer";
import { Toggle } from "../components";
import { MoonIcon, SunIcon } from "../icons";

export const ToggleDisplayer = (): React.ReactNode => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const icons = {
    checkedIcon: <SunIcon />,
    uncheckedIcon: <MoonIcon />,
  };

  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Toggle</ComponentDisplayer.Title>
      <ComponentDisplayer.Subtitle>Classic</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <Toggle size="xs" checked={checked} onChange={handleChange} />
        <Toggle size="sm" checked={checked} onChange={handleChange} />
        <Toggle size="md" checked={checked} onChange={handleChange} />
        <Toggle size="lg" checked={checked} onChange={handleChange} />
        <Toggle size="xl" checked={checked} onChange={handleChange} />
      </ComponentDisplayer.Content>
      <ComponentDisplayer.Subtitle>Rounded</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <Toggle size="xs" rounded checked={checked} onChange={handleChange} />
        <Toggle size="sm" rounded checked={checked} onChange={handleChange} />
        <Toggle size="md" rounded checked={checked} onChange={handleChange} />
        <Toggle size="lg" rounded checked={checked} onChange={handleChange} />
        <Toggle size="xl" rounded checked={checked} onChange={handleChange} />
      </ComponentDisplayer.Content>
      <ComponentDisplayer.Subtitle>With Icons</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <Toggle
          size="xs"
          rounded
          checked={checked}
          onChange={handleChange}
          icons={icons}
        />
        <Toggle
          size="sm"
          rounded
          checked={checked}
          onChange={handleChange}
          icons={icons}
        />
        <Toggle
          size="md"
          rounded
          checked={checked}
          onChange={handleChange}
          icons={icons}
        />
        <Toggle
          size="lg"
          rounded
          checked={checked}
          onChange={handleChange}
          icons={icons}
        />
        <Toggle
          size="xl"
          rounded
          checked={checked}
          onChange={handleChange}
          icons={icons}
        />
      </ComponentDisplayer.Content>
      <ComponentDisplayer.Subtitle>With Labels</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <Toggle
          id="toggle-xs"
          label="Toggle"
          size="xs"
          rounded
          checked={checked}
          onChange={handleChange}
          icons={icons}
        />
        <Toggle
          id="toggle-sm"
          label="Toggle"
          size="sm"
          rounded
          checked={checked}
          onChange={handleChange}
          icons={icons}
        />
        <Toggle
          id="toggle-md"
          label="Toggle"
          size="md"
          rounded
          checked={checked}
          onChange={handleChange}
          icons={icons}
        />
        <Toggle
          id="toggle-lg"
          label="Toggle"
          size="lg"
          rounded
          checked={checked}
          onChange={handleChange}
          icons={icons}
        />
        <Toggle
          id="toggle-xl"
          label="Toggle"
          size="xl"
          rounded
          checked={checked}
          disabled={true}
          onChange={handleChange}
          icons={icons}
        />
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
