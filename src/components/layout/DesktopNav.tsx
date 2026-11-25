"use client";

import NavDropdown from "./NavDropdown";
import MegaMenu from "./MegaMenu";
import { MAIN_NAV } from "@/lib/navigation";

export default function DesktopNav() {
  return (
    <nav className="flex items-center gap-3" aria-label="Main navigation">
      {MAIN_NAV.map((item) =>
        item.type === "mega" ? (
          <MegaMenu key={item.label} config={item} />
        ) : (
          <NavDropdown
            key={item.label}
            label={item.label}
            items={item.items}
            sections={item.sections}
            panelWidth={item.panelWidth}
            align={item.align}
          />
        )
      )}
    </nav>
  );
}
