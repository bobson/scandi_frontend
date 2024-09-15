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
      <div key={attribute.id}>
        <h3 className="mt-2">{attribute.name}</h3>
        <div
          className="flex"
          data-testid={`${dataTestId}-${toKebabCase(attribute.name)}`}
        >
          {attribute.items.map((item) => {
            const isSelected = selectedAttributes[attribute.id] === item.value;
            return attribute.type === "text" ? (
              <button
                key={item.value}
                className={`text-sm border mr-2 w-12 h-8 flex justify-center items-center border-black ${
                  isSelected && "bg-black text-white"
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
                className={`w-6 h-6 mr-2 ${
                  isSelected
                    ? "border-2 border-green-600"
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
