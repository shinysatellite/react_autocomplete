import React from "react";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import Vector from "../Vector.svg";
const StyledLabel = styled("label", {
  fontSize: 15,
  fontWeight: 500,
  color: "white",
  userSelect: "none",
});

const Label = StyledLabel;

const Flex = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

const Input = styled("input", {
  all: "unset",
  width: 256,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  height: 40,
  fontSize: 15,
  lineHeight: 1,
  color: "black",
  backgroundColor: "white",
  boxShadow: `0 0 0 1px #D0D5DD`,
  position: "relative",
  "&:focus": { boxShadow: `0 0 0 2px #e4e2e4` },
});

const Img = styled("img", {
  width: 23,
  position: "absolute",
  bottom: 12,
  right: 5,
});

const SearchInput = ({
  value,
  label,
  placeholder,
  suggestionsActive,
  onChange,
}) => (
  <Flex>
    <Label htmlFor="firstName" css={{ lineHeight: "35px", marginRight: 15 }}>
      {label}
    </Label>
    <Input
      type="text"
      className="seach_input"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
    {suggestionsActive && <Img src={Vector} alt="vector" />}
  </Flex>
);

export default SearchInput;
