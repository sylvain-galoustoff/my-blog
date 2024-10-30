import { createContext, useContext, useState } from "react";

type PageContextType = {
  pageIndex: number;
  setPageIndex: (index: number) => void;
};

export const PageContext = createContext<PageContextType>({
  pageIndex: 0,
  setPageIndex: () => {},
});

type PageContextProviderProps = {
  children: JSX.Element;
};

export const PageContextProvider = ({ children }: PageContextProviderProps) => {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <PageContext.Provider value={{ pageIndex, setPageIndex }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
