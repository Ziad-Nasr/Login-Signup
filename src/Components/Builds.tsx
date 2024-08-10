import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./Builds.css";
interface BuildsProps {
  label: string;
  value: string;
}
const Builds: React.FC<BuildsProps> = ({ label, value }) => {
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);

  const blocks = ["Block 1", "Block 2", "Block 3", "Block 4", "Block 5"];

  const handleBlockClick = (block: string) => {
    setSelectedBlocks((prevSelectedBlocks) =>
      prevSelectedBlocks.includes(block)
        ? prevSelectedBlocks.filter((b) => b !== block)
        : [...prevSelectedBlocks, block]
    );
  };

  return (
    <div>
      <label className="my-2">{label}</label>
      <div className="block-container">
        {blocks.map((block) => (
          <div
            key={block}
            className={`block ${
              selectedBlocks.includes(block) ? "selected" : ""
            }`}
            onClick={() => handleBlockClick(block)}
          >
            {block} <FaPlus style={{ marginLeft: "5px" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Builds;
