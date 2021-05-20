import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const rederedItems = items.map(({ title, content }, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <i className="dropdown icon"></i>
          {title}
        </div>
        <div className={`content ${active}`}>
          <p>{content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {rederedItems}
    </div>
  );
};

export default Accordion;
