import useTheme from '@shared/hooks/useTheme.hook';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { OutlinedButton } from '../outlinedBtn';
import Text from '../text/text.component';

import { createStyles } from './selectList.styles';
import { SelectListProps, SelectListItem } from './selectList.types';

export default function SelectList({
  selected,
  setSelected,
  listOptions,
  variant,
}: SelectListProps) {
  const theme = useTheme();
  const selectItem = (label: string) => {
    setSelected(label);
  };

  const styles = createStyles(theme);

  return (
    <>
      {variant === 'buttonsList' && (
        <View style={styles.btnList}>
          {listOptions.map((item: SelectListItem) => {
            return (
              <OutlinedButton
                key={item.id}
                title={item.label}
                onPress={() => selectItem(item.id)}
                color={item.id === selected ? theme.colors.selected : theme.colors.text}
              />
            );
          })}
        </View>
      )}
      {variant === 'textList' && (
        <View style={{ gap: 10 }}>
          {listOptions.map((item: SelectListItem) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                key={item.id}
                onPress={() => selectItem(item.id)}
              >
                <Text
                  variant="h5"
                  color={item.id === selected ? theme.colors.selected : theme.colors.text}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
}
