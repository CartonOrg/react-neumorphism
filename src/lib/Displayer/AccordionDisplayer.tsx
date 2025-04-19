import { ComponentDisplayer } from "../../ComponentDisplayer";
import { Accordion } from "../components";
import { AccordionItem } from "../components/Accordion/AccordionItem";
import { CubeIcon } from "../icons/CubeIcon";

export const AccordionDisplayer = (): React.ReactNode => {
  const items: AccordionItem[] = [
    {
      iconStyle: "inset",
      icon: <CubeIcon />,
      title: "Accordion Item 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a magna turpis. Curabitur lectus est, vulputate at volutpat sed, tempus in dui. Donec efficitur fermentum sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eget porttitor nunc, at volutpat mi.",
    },
    {
      iconStyle: "outline",
      icon: <CubeIcon />,
      title: "Accordion Item 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a magna turpis. Curabitur lectus est, vulputate at volutpat sed, tempus in dui. Donec efficitur fermentum sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eget porttitor nunc, at volutpat mi.",
    },
    {
      iconStyle: "default",
      icon: <CubeIcon />,
      title: "Accordion Item 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a magna turpis. Curabitur lectus est, vulputate at volutpat sed, tempus in dui. Donec efficitur fermentum sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eget porttitor nunc, at volutpat mi.",
    },
  ];

  return (
    <ComponentDisplayer>
      <ComponentDisplayer.Title>Accordion</ComponentDisplayer.Title>
      <ComponentDisplayer.Subtitle>Classic</ComponentDisplayer.Subtitle>
      <ComponentDisplayer.Content>
        <Accordion items={items} enableUniqueOpen size="md" />
      </ComponentDisplayer.Content>
    </ComponentDisplayer>
  );
};
