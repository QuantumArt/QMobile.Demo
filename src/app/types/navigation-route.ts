export type IRoute = {
  path: string;
  element: JSX.Element;
};

type NavigationRoute = {
  name: string;
  linkTo: string;
};

export type NavigationRoutesGroup = NavigationRoute[];
