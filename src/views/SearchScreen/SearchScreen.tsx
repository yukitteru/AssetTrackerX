import { Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../App';
import { HomeTabParamList } from '../Home/Home';

type Props = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, 'Search'>,
  NativeStackScreenProps<AppStackParamList>
>;
export default function SearchScreen({}: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Откройте App.tsx, чтобы начать работу над своим приложением!</Text>
    </View>
  );
}
