import { PageLayout, SharedLayout } from "./quartz/util/layout"
import { VFC } from "preact"
import { Component, QuartzComponent } from "./quartz/components/types"
import { Script } from "./quartz/components/Script"
import { Footer } from "./quartz/components/Footer"
import { Header } from "./quartz/components/Header"
import { Explorer } from "./quartz/components/Explorer"
import { Backlinks } from "./quartz/components/Backlinks"
import { Graph } from "./quartz/components/Graph"
import { TableOfContents } from "./quartz/components/TableOfContents"
import { Darkmode } from "./quartz/components/Darkmode"
import { Search } from "./quartz/components/Search"

// Custom components
import { PageTitle } from "./quartz/components/PageTitle"
import { ContentMeta } from "./quartz/components/ContentMeta"
import { Spacer } from "./quartz/components/Spacer"
import { TagList } from "./quartz/components/TagList"

const Component_ = {
  PageTitle,
  ContentMeta,
  TagList,
  Spacer,
  Search,
  Darkmode,
  Explorer,
  Graph,
  Backlinks,
  TableOfContents,
} as Record<string, QuartzComponent>

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Header(),
  header: [],
  footer: Footer({
    links: {
      GitHub: "https://github.com/yourusername/yourusername.github.io",
      "Twitter": "https://twitter.com/yourusername",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component_.PageTitle(),
    Component_.ContentMeta(),
    Component_.TagList(),
  ],
  left: [
    Component_.PageTitle(),
    Component_.MobileOnly(Component_.Spacer()),
    Component_.Search(),
    Component_.Darkmode(),
    Component_.DesktopOnly(Component_.Explorer()),
  ],
  right: [
    Component_.Graph(),
    Component_.DesktopOnly(Component_.TableOfContents()),
    Component_.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component_.PageTitle(), Component_.ContentMeta()],
  left: [
    Component_.PageTitle(),
    Component_.MobileOnly(Component_.Spacer()),
    Component_.Search(),
    Component_.Darkmode(),
    Component_.DesktopOnly(Component_.Explorer()),
  ],
  right: [],
}
