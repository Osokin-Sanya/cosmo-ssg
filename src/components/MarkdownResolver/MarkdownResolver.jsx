import React from "react";
import Markdown, { compiler } from "markdown-to-jsx";

import { Paragraph, ListItem, ListItemWrapper } from "./overrides";

const DEFAULT_OVERRIDE_CLASSNAMES = {
  p: "indent-2 sm:indent-4 md:indent-7 z-0",
  li: "z-0",
};

export default function MarkdownResolver({
  children,
  overridesClassNames = DEFAULT_OVERRIDE_CLASSNAMES,
  className = "",
  fallback = null,
  ignoreWrapper = false,
}) {
  if (!children) return fallback;

  const getProps = elem => ({ className: overridesClassNames[elem] || "" });

  const overrides = {
    p: { component: Paragraph, props: getProps("p") },
    li: { component: ListItem, props: getProps("li") },
    ul: { component: ListItemWrapper, props: getProps("ul") },
  };

  if (ignoreWrapper) {
    return compiler(children, { wrapper: null, overrides });
  }

  return (
    <Markdown
      className={className}
      options={{
        overrides,
        wrapper: "div",
        forceWrapper: true,
      }}
    >
      {children}
    </Markdown>
  );
}
