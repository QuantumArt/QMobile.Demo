export type IRoute = {
  path: string;
  element: JSX.Element;
  exact?: boolean;
};

type NavigationRoute = {
  name: string;
  linkTo: string;
};

export type NavigationRoutesGroup = NavigationRoute[];
