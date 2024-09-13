import { Component } from "react";
import { Attribute, AttributeItem } from "../types/types";
import { toKebabCase } from "../assets/functions";

interface AttributesProps {
  attributes: Attribute[];
  selectedAttributes: { [key: string]: string };
  onAttributeClick?: (attributeId: number, value: string) => void;
  isInteractive?: boolean;
  dataTestId: string;
}

class Attributes extends Component<AttributesProps> {
  render() {
    const {
      attributes,
      selectedAttributes,
      onAttributeClick,
      isInteractive,
      dataTestId,
    } = this.props;

    function generateDataTestId(
      attribute: Attribute,
      item: AttributeItem,
      isSelected: boolean
    ) {
      const kebabCaseAttributeName = toKebabCase(attribute.name);
      const originalItemValue = item.display_value; // Keep original display value
      const selected = isSelected ? "-selected" : ""; // Add "-selected" if applicable

      return `${dataTestId}-${kebabCaseAttributeName}-${originalItemValue}${selected}`;
    }

    return attributes?.map((attribute) => (
      <div className="my-2" key={attribute.id}>
        <h3 className="mb-1">{attribute.name}</h3>
        <div
          className="flex space-x-2"
          data-testid={`${dataTestId}-${toKebabCase(attribute.name)}`}
        >
          {attribute.items.map((item) => {
            const isSelected = selectedAttributes[attribute.id] === item.value;
            return attribute.type === "text" ? (
              <button
                key={item.value}
                className={`p-2 border w-16 ${
                  isSelected ? "border-black font-bold" : "border-gray-300"
                } transition`}
                onClick={
                  isInteractive && onAttributeClick
                    ? () => onAttributeClick(attribute.id, item.value)
                    : undefined
                }
                disabled={!isInteractive}
                data-testid={generateDataTestId(attribute, item, isSelected)}
              >
                {item.value}
              </button>
            ) : (
              <button
                key={item.value}
                className={`w-8 h-8 ${
                  isSelected
                    ? "border-2 border-black"
                    : "border border-gray-300"
                } transition`}
                onClick={
                  isInteractive && onAttributeClick
                    ? () => onAttributeClick(attribute.id, item.value)
                    : undefined
                }
                style={{ backgroundColor: item.value }}
                disabled={!isInteractive}
                data-testid={generateDataTestId(attribute, item, isSelected)}
              />
            );
          })}
        </div>
      </div>
    ));
  }
}

export default Attributes;
