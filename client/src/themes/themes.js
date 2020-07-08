import colors , { ColorsThemeFelal } from "./colors";

export const ThemeFelal = {
         main: ColorsThemeFelal.grayDark,
         foreground: ColorsThemeFelal.primary__dark,
         background: ColorsThemeFelal.primary,
         mode: "felal",
         size: "normal",
       };

export const ThemeLight = {
         main: colors.greenDark,
         foreground: colors.black,
         background: colors.white,
         mode: "light",
         size: "normal",
       };

export const ThemeDark = {
         main: "darkgrey",
         mode: "dark",
         foreground: colors.grayLight,
         background: colors.grayDarker,
         size: "normal",
       };

export const noChange = ({ mode, main, ...props }) => ({
  mode,
  main,
  ...props
});

export const invertTheme = ({ foreground, background, ...props }) => ({
  foreground: background,
  background: foreground,
  ...props,
});
 