export interface RouteConfig {
  [id: string]: {
    url: string,
    useId?: boolean
  }
}

export const routes: RouteConfig = {
  atm: {
    url: '/atm'
  },
};
