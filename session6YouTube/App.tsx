import {ScrollView, StyleSheet, View} from 'react-native';
import {Body} from './src/components/Body';
import {Navbar} from './src/components/Navbar';
import {Tabbar} from './src/components/Tabbar';
import data from './src/search.json';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView style={styles.bodyContainer}>
        <Body video={data.items[0]} />
        <Body video={data.items[1]} />
        <Body video={data.items[2]} />
        <Body video={data.items[3]} />
        <Body video={data.items[4]} />
      </ScrollView>
      <Tabbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    marginTop: 30,
  },
});
