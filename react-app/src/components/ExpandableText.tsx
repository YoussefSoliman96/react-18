import React, { useState } from "react";

interface TextProps {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: TextProps) => {
  const [isExpanded, setExpanded] = useState(false);
  const text = isExpanded ? children : children.substring(0, maxChars);

  if (children.length > maxChars) {
    return (
      <div>
        <div>
          {text}
          {isExpanded ? "" : "..."}
          <button
            onClick={() => {
              setExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "Less" : "More"}
          </button>
        </div>
      </div>
    );
  } else {
    return <div>{children}</div>;
  }
};

export default ExpandableText;
