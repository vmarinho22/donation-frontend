import "@testing-library/jest-dom";
import { createTranslator, useTranslations } from "next-intl";

jest.mock("next-intl", async () => {
  const actual = await jest.requireActual("next-intl");

  return {
    ...actual,
    useTranslations: jest.fn(),
  };
});