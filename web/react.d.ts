import type { FC, PropsWithChildren, ReactNode } from "react";

import { type Locale } from "@/i18n";
import type { FormStateSchema } from "@/schemas/form_state_schema";

declare module "react" {
  export declare type FCC<P = {}> = FC<PropsWithChildren<P>>;
  export declare type Page<P = {}, SP = {}> = FC<RouterParams<P, SP>>;
  export declare type Layout<P = {}> = FCC<RouterParams<P>>;

  export declare type TranslationKeys = keyof _Translations;
  export declare type Translation<T extends TranslationKeys> = _Translations[T];
  export declare type Translations<
    T extends TranslationKeys = TranslationKeys
  > = {
    translations: { [P in T]: _Translations[P] };
  };
}

declare type RouterParams<P, SP> = {
  params: P & {
    lang: Locale;
  };
  searchParams: SP;
};
