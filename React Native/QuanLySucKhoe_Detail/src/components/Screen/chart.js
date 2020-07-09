import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  LineChart,
  // BarChart,
  // PieChart,
  // ProgressChart,
  // ContributionGraph,
  // StackedBarChart,
} from 'react-native-chart-kit';
import fireApp from './fire';
const rootRef = fireApp.database().ref();

export default class chart extends Component {
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
    return (
      <SafeAreaView>
        <Text style={styles.inputTitle}>Chi Tiết Calo</Text>
        <View style={styles.heade}>
          <View style={styles.headein}>
            <Text>Ngày</Text>
          </View>
          <Text>Lượng Calo</Text>
        </View>
        <ScrollView>
          <FlatList
            data={this.state.Datafood}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.setParams({
                        Calo: item.Calo,
                        Ngay: item.Ngay,
                      });
                      this.props.navigation.navigate('detailCalo', {
                        Calo: item.Calo,
                        Ngay: item.Ngay,
                      });
                    }}>
                    <View style={styles.container}>
                      <View style={styles.setout}>
                        <Text style={styles.title}>{item.Ngay}</Text>
                      </View>
                      <Text style={styles.title}>{item.Calo}</Text>
                      <Text style={styles.title}>{'->'}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  heade: {
    flexDirection: 'row',
  },
  headein: {
    paddingLeft: 15,
    width: '70%',
  },
  setout: {
    width: '70%',
  },
  inputTitle: {
    padding: 10,
    paddingBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    color: '#FF3333',
  },
  out: {
    marginRight: 0,
    flexDirection: 'row-reverse',
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
    paddingLeft: Dimensions.width,
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
  ContainerImages: {
    flex: 1,
  },

  title: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#1c1c1c',
  },
  container_text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
  },
  description: {
    fontSize: 11,
    fontStyle: 'italic',
  },
  photo: {
    height: 50,
    width: 50,
  },
});
