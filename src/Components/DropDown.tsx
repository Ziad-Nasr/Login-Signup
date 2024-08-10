import { ChevronDownIcon } from "lucide-react";
import { Portal, Select } from "@ark-ui/react";
import "./DropDown.css";
export const DropDown: React.FC = () => {
  const items: string[] = ["1", "2", "3"];
  return (
    <Select.Root items={items} className="select-root">
      <Select.Label className="select-label">Experience</Select.Label>
      <Select.Control className="select-control">
        <Select.Trigger className="select-trigger">
          <Select.ValueText
            className="select-value-text"
            placeholder="Select a Number"
          />
          <Select.Indicator className="select-indicator">
            <ChevronDownIcon />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger className="select-clear-trigger">
          Clear
        </Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content className="select-content">
            <Select.ItemGroup className="select-item-group">
              <Select.ItemGroupLabel className="select-item-group-label">
                Experience
              </Select.ItemGroupLabel>
              {items.map((item) => (
                <Select.Item key={item} item={item} className="select-item">
                  <Select.ItemText className="select-item-text">
                    {item}
                  </Select.ItemText>
                  <Select.ItemIndicator className="select-item-indicator">
                    ✓
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
};

export default DropDown;
