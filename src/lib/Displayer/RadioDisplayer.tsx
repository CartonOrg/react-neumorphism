import { useState } from "react";
import { ComponentDisplayer } from "../../ComponentDisplayer";
import { Radio } from "../components";
import RadioGroup from "../components/Radio/RadioGroup";

export const RadioDisplayer = (): React.ReactNode => {
  const [radioGroupValue, setRadioGroupValue] = useState("radio-xs");

  const handleRadioGroupChange = (value: string) => {
    setRadioGroupValue(value);
  };

  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Radio</ComponentDisplayer.Title>
      <ComponentDisplayer.Subtitle>RadioGroup</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <RadioGroup
          name="radio-group"
          value={radioGroupValue}
          size="md"
          id="Radio-xs"
          disabled={false}
          items={[
            { label: "Radio group xs", value: "radio-group-xs" },
            {
              label: "Radio group sm",
              value: "radio-group-sm",
              disabled: true,
            },
            { label: "Radio group md", value: "radio-group-md" },
            { label: "Radio group lg", value: "radio-group-lg" },
            { label: "Radio group xl", value: "radio-group-xl" },
          ]}
          onChange={handleRadioGroupChange}
        />
      </ComponentDisplayer.Content>
      <ComponentDisplayer.Subtitle>Single radio</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content direction="row">
        <Radio
          name="radio"
          value="radio-xs"
          inputSize="xs"
          id="Radio-xs"
          label="Radio xs"
        />
        <Radio
          name="radio"
          value="radio-sm"
          inputSize="sm"
          id="Radio-sm"
          label="Radio sm"
        />
        <Radio
          name="radio"
          value="radio-md"
          inputSize="md"
          id="Radio-md"
          label="Radio md"
        />
        <Radio
          name="radio"
          value="radio-lg"
          inputSize="lg"
          id="Radio-lg"
          label="Radio lg"
        />
        <Radio
          name="radio"
          value="radio-xl"
          inputSize="xl"
          id="Radio-xl"
          label="Radio xl"
        />
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
