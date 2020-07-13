import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  ActivityIndicator,
} from 'react-native';
import fireApp from './fire';
const rootRef = fireApp.database().ref();
// const animalRef = rootRef.child('MenuEx/GoiY/01/');
// import firebase from 'firebase';
// import {NavigationContainer} from '@react-navigation/native';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Profile: [],
      email: '',
      uid: '',
      Age: '',
      Avata: '',
      Gender: '',
      Heavy: '',
      Name: '',
      Tall: '',
      loading: true,
    };
  }
  componentDidMount() {
    const {email, uid} = fireApp.auth().currentUser;
    this.setState({email, uid});
    const animalRef = rootRef.child('MenuEx/Profile/' + uid + '/');
    animalRef.on('value', (Snapshot) => {
      var thisdata = Snapshot.val();
      this.setState({
        Age: thisdata.Age,
        Avata: thisdata.Avata,
        Gender: thisdata.Gender,
        Heavy: thisdata.Heavy,
        Name: thisdata.Name,
        Tall: thisdata.Tall,
      });
      console.log(Snapshot.val());
      console.log(this.state);
    });
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 4000);
  }
  render() {
    return (
      <View style={styles.Container}>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View>
            <View style={styles.container}>
              <Text style={styles.Texttitle}>Thông Tin Cá Nhân</Text>
              <Image
                style={styles.tinyImages}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAArHbV6gqS70hTQBiPnvI-mRMZw85ItexDw&usqp=CAU',
                }}
              />
              <Text style={styles.titles}> Họ Và Tên: {this.state.Name}</Text>
              <Text style={styles.titles}>Năm Sinh: {this.state.Age}</Text>
              <Text style={styles.titles}>Cân Nặng: {this.state.Heavy}</Text>
              <Text style={styles.titles}>Chiều Cao{this.state.Tall}</Text>
            </View>
            <Button
              title="Đăng Xuất"
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tinyImages: {
    flex: 1,
    alignItems: 'center',
    width: 180,
    height: 180,
    borderRadius: 80,
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 180,
    width: 180,
    borderRadius: 40,
  },
  titles: {
    padding: 20,
    color: '#111111',
    fontSize: 18,
  },
  profileImg: {
    height: 180,
    width: 180,
    borderRadius: 40,
  },
  container: {
    padding: 20,
    paddingLeft: 30,
    paddingRight: 20,
  },
  viewrow: {
    flex: 1,
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
