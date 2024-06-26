import { createContext } from "react";

export interface LocaleContextType {
  locale: string;
}

const localeContext = createContext<LocaleContextType>({
  locale: "zh-CN",
});

export default localeContext;
