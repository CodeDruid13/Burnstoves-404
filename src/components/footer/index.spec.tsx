/**
 * @jest-environment jsdom
 */
import { render } from "@test";

import FooterSimpleNavigation from "./footer-simple-navigation";

describe("src/components/footer component testing with testing-library", () => {
  it("FooterSimpleNavigation component should render as expected", () => {
    const component = render(<FooterSimpleNavigation />);
    expect(component).toBeTruthy();
  });

  it("FooterSimpleNavigation component should render as expected", () => {
    const component = render(<FooterSimpleNavigation />);
    expect(component).toBeTruthy();
  });
});
