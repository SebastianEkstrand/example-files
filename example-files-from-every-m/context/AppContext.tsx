import React, {useState, useContext, createContext} from 'react';
import { ILink } from '../components/blocks';

export interface IAppContext {
  headerState: HeaderState;
  footerState: FooterState;
  currentProgress: IProgressObject;
  showBreadcrumbs: ILink[];
  showFooter: boolean;
  setShowBreadcrumbs: (a:ILink[]) => {}
  onChangeHeaderState: (s:HeaderState) => {},
  onChangeFooterState: (s:FooterState) => {},
  onChangeCurrentProgress: (obj:IProgressObject) => {},
}


export interface IProgressObject{
  contextTitle: string;
  title: string;
  current: number;
  total: number;
}

export enum HeaderState {
  None = "none",
  Default = "default",
  DefaultNoMobile = "default-no-mobile",
  Progress = "progress",
  Invisible = "invisible"
}

export enum FooterState {
  None = "none",
  Default = "default",
  DefaultNoMobile = "default-no-mobile",
}

const appContext = createContext<IAppContext | null>(null);

export function ProvideApp({children}) {
    const appContextData = useProvideApp();
    //@ts-ignore
    return <appContext.Provider value={appContextData}>{children}</appContext.Provider>;
}

export const useApp = () => {
    return useContext(appContext);
};

function useProvideApp() {
    const [headerState, setHeaderState] = useState(null);
    const [footerState, setFooterState] = useState(null);
    const [showBreadcrumbs, setShowBreadcrumbs] = useState<ILink[]|null>(null);
    const [currentProgress, setCurrentProgress] = useState<IProgressObject|null>(null);
  
    const onChangeHeaderState = (a:HeaderState) => {
      setHeaderState(a);
    };

    const onChangeFooterState = (a:FooterState) => {
      setFooterState(a);
    };

    const onChangeCurrentProgress = (obj:IProgressObject) => {
      setCurrentProgress(obj);
    };

    return {
        headerState,
        footerState,
        currentProgress,
        showBreadcrumbs,
        onChangeHeaderState,
        onChangeFooterState,
        onChangeCurrentProgress,
        setShowBreadcrumbs,
    };
}

