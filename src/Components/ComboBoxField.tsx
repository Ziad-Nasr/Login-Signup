import React from "react";
import { Combobox, Portal } from "@ark-ui/react";
import "./ComboBoxField.css";

export const ComboBoxField: React.FC = () => {
  const items: string[] = ["React", "Solid", "Vue"];
  return (
    <Combobox.Root items={items} lazyMount unmountOnExit className="combobox">
      <Combobox.Label className="combobox-label">Framework</Combobox.Label>
      <Combobox.Control className="combobox-control">
        <Combobox.Input className="combobox-input" />
        <Combobox.Trigger className="combobox-trigger">Open</Combobox.Trigger>
        <Combobox.ClearTrigger className="combobox-clear-trigger">
          Clear
        </Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content className="combobox-content">
            <Combobox.ItemGroup>
              <Combobox.ItemGroupLabel className="combobox-item-group-label">
                Frameworks
              </Combobox.ItemGroupLabel>
              {items.map((item) => (
                <Combobox.Item key={item} item={item} className="combobox-item">
                  <Combobox.ItemText>{item}</Combobox.ItemText>
                  <Combobox.ItemIndicator className="combobox-item-indicator">
                    ✓
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};
