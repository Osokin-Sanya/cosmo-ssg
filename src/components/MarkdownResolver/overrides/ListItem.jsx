import React from "react";
import ListItem from "@components/ListItem";

export default function ListItemWrapper({ children, ...props }) {
  return <ListItem text={children} {...props} />;
}
