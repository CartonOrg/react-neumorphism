import { css, withTheme } from "@emotion/react";
import Radio from "./Radio";
import { Sizes } from "../../constants";
import { RADIO_GROUP_STYLE } from "./radioGroup.styles";

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
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  items,
  name,
  id,
  value,
  onChange,
  disabled,
  size = "sm",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  const radioGroupStyle = RADIO_GROUP_STYLE[size];

  return (
    <div
      id={id}
      css={css({
        display: "flex",
        flexDirection: "column",
        ...radioGroupStyle,
      })}
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
        />
      ))}
    </div>
  );
};

export default withTheme(RadioGroup);
