import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
export default class detailMenuEx extends Component {
  render() {
    console.log(`this.props=${JSON.stringify(this.props)}`);
    const dataparams = this.props.route.params || {};
    return (
      <SafeAreaView>
        <ScrollView styles={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.Texttitle}>Cách chế biến món ăn</Text>
            <Image
              style={styles.tinyImages}
              source={{uri: dataparams.Images}}
            />
            <Text style={styles.titles}>{dataparams.Name}</Text>
            <View style={styles.viewrow}>
              <Text style={styles.Textright}>
                <Text style={styles.Textleft}>Nguyên liệu: </Text>
                {dataparams.KhoiLuong}
              </Text>
            </View>
            <View style={styles.viewrow}>
              <Text style={styles.Textright}>
                <Text style={styles.Textleft}>Gia vị:</Text> {dataparams.GiaVi}
              </Text>
            </View>
            <View style={styles.viewrow}>
              <Text style={styles.Textright}>
                <Text style={styles.Textleft}>Cách làm:</Text> {dataparams.Make}
              </Text>
            </View>
            <View style={styles.viewrow}>
              <Text style={styles.Textright}>
                <Text style={styles.Textleft}>Lượng Calo:</Text>{' '}
                {dataparams.Calo}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingLeft: 30,
    paddingRight: 20,
  },
  viewrow: {
    flex: 1,
  },
  tinyImages: {
    flex: 1,
    alignItems: 'center',
    width: 350,
    height: 250,
  },
  titles: {
    padding: 25,
    color: '#3333FF',
    textAlign: 'center',
    fontSize: 25,
  },
  Textleft: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
  },
  Textright: {
    color: '#222222',
    fontSize: 18,
    fontWeight: '400',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  Texttitle: {
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
  },
  headers: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
});
