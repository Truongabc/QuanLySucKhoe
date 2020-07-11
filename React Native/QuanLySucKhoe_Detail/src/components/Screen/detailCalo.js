import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
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
    const animalRefSang = rootRef.child(
      'MenuEx/Eat/' + uid + '/' + dataparams1.Ngay + '/Sang/',
    );
    var itemssang = [];
    animalRefSang.on('value', (childSnapshot) => {
      childSnapshot.forEach((doc) => {
        itemssang.push({
          key: doc.key,
          Calo: doc.toJSON().Calo,
          Name: doc.toJSON().Name,
        });
        console.log('Sang', childSnapshot.val());
        this.setState({
          FoodSang: itemssang.sort((a, b) => {
            return a.Name < b.Name;
          }),
          loading: false,
        });
      });
      console.log('Chia Sang:', childSnapshot.val());
      console.log('animalRefSang:', animalRefSang);
    });
    const animalRefTrua = rootRef.child(
      'MenuEx/Eat/' + uid + '/' + dataparams1.Ngay + '/Trua/',
    );
    var itemstrua = [];
    animalRefTrua.on('value', (childSnapshot) => {
      childSnapshot.forEach((doc) => {
        itemstrua.push({
          key: doc.key,
          Calo: doc.toJSON().Calo,
          Name: doc.toJSON().Name,
        });
        console.log('Trua', childSnapshot.val());
        this.setState({
          FoodTrua: itemstrua.sort((a, b) => {
            return a.Name < b.Name;
          }),
          loading: false,
        });
      });
      console.log('Chia Trưa:', childSnapshot.val());
      console.log('animalRefTrua:', animalRefTrua);
    });
    const animalRefToi = rootRef.child(
      'MenuEx/Eat/' + uid + '/' + dataparams1.Ngay + '/Toi/',
    );
    var itemstoi = [];
    animalRefToi.on('value', (childSnapshot) => {
      childSnapshot.forEach((doc) => {
        itemstoi.push({
          key: doc.key,
          Calo: doc.toJSON().Calo,
          Name: doc.toJSON().Name,
        });
        console.log('Toi', childSnapshot.val());
        this.setState({
          FoodToi: itemstoi.sort((a, b) => {
            return a.Name < b.Name;
          }),
          loading: false,
        });
      });
      console.log('Child Toi', childSnapshot.val());
      console.log('animalRefToi:', animalRefToi);
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
              Chi tiết lượng Calo ngày: {dataparams.Ngay}
            </Text>
            <Text style={styles.Texttitle1}>Lượng Calo: {dataparams.Calo}</Text>
            <View style={styles.containerSang}>
              <Text>Bữa Sáng</Text>
              <ScrollView>
                <FlatList
                  data={this.state.FoodSang}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          alert(
                            'Lượng Calo của món!' +
                              item.Nam +
                              ' là:' +
                              item.Calo,
                          );
                          console.log('Key', item.key);
                        }}>
                        <View style={styles.containerfl}>
                          <View>
                            <Text style={styles.title}>{item.Name}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </ScrollView>
            </View>
            <View style={styles.containerTrua}>
              <Text>Bữa Trưa</Text>
              <ScrollView>
                <FlatList
                  data={this.state.FoodTrua}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          alert(
                            'Lượng Calo của món!' +
                              item.Nam +
                              ' là:' +
                              item.Calo,
                          );
                          console.log('Key', item.key);
                        }}>
                        <View style={styles.containerfl}>
                          <View>
                            <Text style={styles.title}>{item.Name}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </ScrollView>
            </View>
            <View style={styles.containerToi}>
              <Text>Bữa Tối</Text>
              <ScrollView>
                <FlatList
                  data={this.state.FoodToi}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          alert(
                            'Lượng Calo của món!' +
                              item.Nam +
                              ' là:' +
                              item.Calo,
                          );
                          console.log('Key', item.key);
                        }}>
                        <View style={styles.containerfl}>
                          <View>
                            <Text style={styles.title}>{item.Name}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </ScrollView>
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
    fontSize: 18,
  },
  containerfl: {
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  title: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#1c1c1c',
  },
  containerSang: {
    flex: 3,
  },
  containerTrua: {
    flex: 3,
  },
  containerToi: {
    flex: 3,
  },
  viewrow: {
    flex: 1,
  },
  titlelef: {
    fontWeight: '800',
    color: '#000000',
    paddingLeft: 10,
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
  Texttitle1: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FF3333',
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
