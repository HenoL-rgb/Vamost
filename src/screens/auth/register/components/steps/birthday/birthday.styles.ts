import { StyleSheet } from 'react-native';

import { Theme } from '../../../../../../shared/hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 20,
    },
    content: {
      flex: 1,
      paddingVertical: 40,
      rowGap: 15,
    },
    subInfo: {
      paddingVertical: 10,
      paddingRight: 40,
    },
  });
