export type LoginFormType = {
  email: string;
  password: string;
};

export type ToggleProps = {
  text: string;
  toggle: boolean;
  toggleHandler: () => void;
};
