import { Theme } from '../../hooks/useTheme.hook';

export interface CustomButton {
  title: string;
  onPress: () => void;
  width?: number;
  height?: number;
  disabled?: boolean;
  color?: string;
}

export type StylesOptions = {
  theme: Theme;
  disabled?: boolean;
  width?: number;
  color?: string;
};
