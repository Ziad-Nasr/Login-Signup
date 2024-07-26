import React from "react";
import { Combobox, Portal } from "@ark-ui/react";
import "./ComboBoxField.css";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { formActions } from "../store/formSlice";
interface ComboBoxFieldProps {
  label: string;
  value: string;
}
export const ComboBoxField: React.FC<ComboBoxFieldProps> = ({
  label,
  value,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const items: string[] = ["Ejada", "NBE", "Ejad"];
  function handleValueChange(details: { value: any }) {
    dispatch(formActions.updateForm({ company: details.value[0] }));
  }
  return (
    <Combobox.Root
      items={items}
      lazyMount
      unmountOnExit
      className="combobox"
      onValueChange={handleValueChange}
      value={[value]}
    >
      <Combobox.Label className="combobox-label">{label}</Combobox.Label>
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
