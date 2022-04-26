import React from "react";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";

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
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  "&:focus": { boxShadow: `0 0 0 2px #e4e2e4` },
});

const SearchInput = ({ value, label, placeholder, onChange }) => (
  <Flex>
    <Label htmlFor="firstName" css={{ lineHeight: "35px", marginRight: 15 }}>
      {label}
    </Label>
    <Input
      type="text"
      id="firstName"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </Flex>
);

export default SearchInput;
