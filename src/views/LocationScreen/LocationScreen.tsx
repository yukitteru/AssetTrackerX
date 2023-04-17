import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { FAB, Icon } from 'react-native-elements';
import { Location, fetchLocations, supabase } from '../../supabase';
import { AppStackParamList } from '../../../App';
import { HomeTabParamList } from '../Home/Home';
import { useLocations } from "../../hooks/location";

type Props = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, 'Locations'>,
  NativeStackScreenProps<AppStackParamList>
>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'light-gray',
  },
});

export default function LocationScreen({ navigation }: Props) {
  const { locations, fetch } = useLocations();
  useEffect(() => {
    navigation.addListener('focus', fetch);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      <FAB
        title=""
        color="#32afed"
        placement="right"
        icon={
          <Icon
            name="add"
            size={24}
            color="white"
            tvParallaxProperties={undefined}
          />
        }
        onPress={() => {
          navigation.navigate('LocationAdd');
        }}
      />
    </View>
  );
}
