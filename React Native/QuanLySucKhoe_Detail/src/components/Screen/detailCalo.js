import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import fireApp from './fire';
const rootRef = fireApp.database().ref();
export default class detailCalo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Datafood: [],
      email: '',
      uid: '',
      loading: false,
    };
  }
  componentDidMount() {
    console.log(`this.props=${JSON.stringify(this.props)}`);
    const dataparams1 = this.props.route.params || {};
    const {email, uid} = fireApp.auth().currentUser;
    this.setState({email, uid});
    const animalRef = rootRef.child('MenuEx/Eat/' + uid + '/');
    var items = [];
    animalRef.on('value', (childSnapshot) => {
      childSnapshot.forEach((doc) => {
        items.push({
          key: doc.key,
          Calo: doc.toJSON().Calo,
          Ngay: doc.toJSON().Ngay,
        });
        console.log(childSnapshot.val());
        this.setState({
          Datafood: items.sort((a, b) => {
            return a.Ngay < b.Ngay;
          }),
          loading: false,
        });
      });
    });
  }
  render() {
    console.log(`this.props=${JSON.stringify(this.props)}`);
    const dataparams = this.props.route.params || {};
    return (
      <SafeAreaView>
        <ScrollView styles={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.Texttitle}>
              Chi Tiết ngày:{dataparams.Ngay}
            </Text>
            <Text>Lượng Calo :{dataparams.Calo}</Text>
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
