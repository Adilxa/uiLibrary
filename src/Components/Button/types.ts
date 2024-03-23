enum RoundType {
  ROUNDED = "rounded",
  FLAT = "flat",
}

enum ColorType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
  INFO = "info",
  LIGHT = "light",
  DARK = "dark",
}

interface IButton {
  function: (_: any) => void | unknown;
  title: string;
  color: ColorType;
  rounded: RoundType;
}
