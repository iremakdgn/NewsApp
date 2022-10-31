import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item}></NewsCard>;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.bannerImage}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )} //üst tarafımda bişey göstermek istyiorsan
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews} //news bir prop istediğin isimle gönderebilirsin
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  bannerImage: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {fontWeight: 'bold', fontSize: 50},
});

export default App;
