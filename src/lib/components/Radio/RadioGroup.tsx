import { withTheme } from "@emotion/react";
import Radio from "./Radio";
import { Sizes } from "../../constants";
import { StyledRadioGroupContainer } from "./radioGroup.styles";

interface RadioGroupProps {
  id?: string;
  size?: Sizes;
  items: {
    id?: string;
    label: string;
    value: string;
    disabled?: boolean;
  }[];
  name: string;
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  radioGroupContainerStyle?: React.CSSProperties;
  radioContainerStyle?: React.CSSProperties;
  radioLabelStyle?: React.CSSProperties;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  items,
  name,
  id,
  value,
  onChange,
  disabled,
  size = "sm",
  radioGroupContainerStyle,
  radioContainerStyle,
  radioLabelStyle,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <StyledRadioGroupContainer
      id={id}
      $size={size}
      $radioGroupContainerStyle={radioGroupContainerStyle}
      {...rest}
    >
      {items.map((item) => (
        <Radio
          inputSize={size}
          checked={value === item.value}
          id={item.id ?? item.value}
          name={name}
          key={item.value}
          value={item.value}
          onChange={handleChange}
          label={item.label}
          disabled={item.disabled ?? disabled}
          radioContainerStyle={radioContainerStyle}
          radioLabelStyle={radioLabelStyle}
        />
      ))}
    </StyledRadioGroupContainer>
  );
};

export default withTheme(RadioGroup);
