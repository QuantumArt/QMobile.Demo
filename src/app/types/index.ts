export type IRoute = {
  path: string;
  element: JSX.Element;
  exact?: boolean;
};

type NavigationRoute = {
  name: string;
  linkto: string;
}

export type NavigationRoutesGroup = NavigationRoute[];
