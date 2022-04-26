import React, { useRef, useEffect } from "react";
import { styled } from "@stitches/react";
import { mauve, blackA } from "@radix-ui/colors";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

const SCROLLBAR_SIZE = 5;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: 275,
  height: 225,
  borderRadius: 4,
  overflow: "hidden",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  marginTop: 3,
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: "flex",
  userSelect: "none",
  width: "100%",
  touchAction: "none",
  background: "white",
  transition: "background 160ms ease-out",
  "&:hover": { background: blackA.blackA8 },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: SCROLLBAR_SIZE,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: "#C9D2DE",
  borderRadius: 24,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: 44,
    minHeight: 44,
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: blackA.blackA8,
});

// Exports
export const ScrollArea = StyledScrollArea;
export const ScrollAreaViewport = StyledViewport;
export const ScrollAreaScrollbar = StyledScrollbar;
export const ScrollAreaThumb = StyledThumb;
export const ScrollAreaCorner = StyledCorner;

const Box = styled("div", {
  padding: 10,
});
const Tag = styled("div", {
  color: mauve.mauve12,
  fontSize: 16,
  lineHeight: "18px",
  padding: 10,
  borderRadius: 5,
  "&.active": {
    backgroundColor: `#EBEEF1`,
  },
  "&:hover": {
    cursor: "pointer",
    backgroundColor: `#EBEEF1`,
  },
});

const Suggestions = ({
  suggestions,
  suggestionIndex,
  handleClick,
  setSuggestionsActive,
}) => {
  const wrapperRef = useRef(null);

  /** Detect the mouse click event outside of Suggestions component */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestionsActive(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, setSuggestionsActive]);

  return (
    <ScrollArea ref={wrapperRef}>
      <ScrollAreaViewport css={{ backgroundColor: "white" }}>
        <Box>
          {suggestions.map((suggestion) => (
            <Tag
              key={suggestion.value}
              className={suggestion.value === suggestionIndex ? "active" : ""}
              onClick={(e) => handleClick(e, suggestion)}
            >
              {suggestion.label}
            </Tag>
          ))}
        </Box>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollArea>
  );
};

export default Suggestions;
