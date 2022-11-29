import React from "react";

import Accordion from "./Accordion";
import ImageRhomb from "./ImageRhomb";
import ContentSwitcher from "./ContentSwitcher";
import { MarkdownResolver } from "./MarkdownResolver";

import useMediaQuery from "../hooks/useMediaQuery";

// Breakpoint on 1024px
export default function AdaptiveTabs({
  tabs = [],
  additionalTabs = [],
  image,
  alt,
}) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const formattedTabs =
    tabs?.map(({ title, content }) => ({
      title,
      content: (
        <MarkdownResolver className="flex flex-col gap-y-3 text-16 sm:text-22 md:text-24 leading-loose">
          {content}
        </MarkdownResolver>
      ),
    })) || [];

  const tabItems = [...additionalTabs, ...formattedTabs];

  const desktopContentItems = image
    ? tabItems.map(({ title, content }) => ({
        title,
        content: (
          <div className="grid grid-cols-2">
            {content}
            <ImageRhomb
              className="px-6"
              position="bottom-0"
              image={image}
              alt={alt}
            />
          </div>
        ),
      }))
    : tabItems;

  return (
    <>
      {!isDesktop && (
        <div>
          <Accordion items={tabItems} className="mb-12" />
          {image && (
            <ImageRhomb
              className="px-6"
              position="bottom-0"
              image={image}
              alt={alt}
            />
          )}
        </div>
      )}
      {isDesktop && (
        <ContentSwitcher items={desktopContentItems} className="px-3" />
      )}
    </>
  );
}
