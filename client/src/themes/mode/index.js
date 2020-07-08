import theme from "../themes.controller";
import colors, {ColorsThemeFelal} from "../colors";

export const buttonColor = theme("mode", {
  light: colors.black,
  dark: colors.grayLighter,
  felal: "black",
});

export const Headerbackground = theme("mode", {
  light: "white",
  dark: colors.grayDarker,
  felal: "red",
});

export const backgroundColor = theme("mode", {
  light: colors.grayLighter,
  dark: colors.grayDark,
  felal: ColorsThemeFelal.primary__dark,
});

export const buttonBackgroundColor = theme.variants("mode", "kind", {
         default: {
           light: "white",
           dark: colors.grayDark,
           felal: "darkred",
         },
         primary: {
           light: colors.blueLight,
           dark: colors.blueDark,
           felal: "darkred",
         },
         success: {
           light: colors.greenLight,
           dark: colors.greenDark,
           felal: "darkred",
         },
         warning: {
           light: colors.yellowLight,
           dark: colors.yellowDark,
           felal: "darkred",
         },
         danger: {
           light: colors.redLight,
           dark: colors.redDark,
           felal: "darkred",
         },
       });

export const boxBackgroundColor = theme("mode", {
  light: colors.white,
  dark: colors.grayDarker,
});

export const boxColor = theme("mode", {
  light: colors.grayDarker,
  dark: colors.grayLighter,
});