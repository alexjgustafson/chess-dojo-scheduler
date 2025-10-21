export interface I18n {
    defaultLocale: string;
    locales: readonly string[];
}

export const i18n: I18n = {
    defaultLocale: "en",
    locales: ["en", "es"],
} as const;

export type Locale = (typeof i18n.locales)[number];