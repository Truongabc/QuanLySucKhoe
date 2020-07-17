import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import fireApp from './fire';
var cc = 167,
  cn = 53,
  BMI = 0,
  Trangthai = '';
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
      show: false,
    };
  }
  componentDidMount() {
    const {email, uid} = fireApp.auth().currentUser;
    this.setState({email, uid});
    const animalRef = rootRef.child('MenuEx/Profile/' + uid + '/');
    animalRef.on('value', (Snapshot) => {
      var thisdata = Snapshot.val();
      if (thisdata != null) {
        cc = thisdata.Tall;
        cn = thisdata.Heavy;
        this.setState({
          show: false,
          Age: thisdata.Age,
          Avata: thisdata.Avata,
          Gender: thisdata.Gender,
          Heavy: thisdata.Heavy,
          Name: thisdata.Name,
          Tall: thisdata.Tall,
        });
        BMI = Number.parseFloat(
          Number(cn) / Number.parseFloat(Number.parseFloat(cc / 100) * 2),
        ).toFixed(2);
      } else {
        this.setState({
          show: true,
        });
      }
    });
    if (BMI < 18.5) {
      Trangthai = 'thiếu cân';
    } else if (BMI > 25) {
      Trangthai = 'thừa cân';
    } else {
      Trangthai = 'bình thường';
    }
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 3000);
  }
  render() {
    return (
      <View style={styles.Container}>
        {this.state.show ? (
          <View style={styles.centers}>
            <Text>
              Bạn chưa có thông tin cá nhân!{'\n    '} Hãy cập nhật thông tin!
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('updateProfile')}>
              <Text style={styles.buttonWord}>Cập nhật thông tin</Text>
            </TouchableOpacity>
            <Button
              title="Đăng Xuất"
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </View>
        ) : (
          <View>
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
                  <Text style={styles.titles}>
                    Họ Và Tên: {this.state.Name}
                  </Text>
                  <Text style={styles.titles}>
                    Giới Tính: {this.state.Gender}
                  </Text>
                  <Text style={styles.titles}>Năm Sinh: {this.state.Age}</Text>
                  <Text style={styles.titles}>
                    Cân Nặng: {this.state.Heavy}
                  </Text>
                  <Text style={styles.titles}>
                    Chiều Cao: {this.state.Tall}
                  </Text>
                  <Text style={styles.titles}>Chỉ số BMI: {BMI}</Text>
                  <Text style={styles.titles}>
                    BMI đang cho thấy bạn đang {Trangthai}
                  </Text>
                </View>
                <View style={styles.centers}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                      this.props.navigation.navigate('updateProfile')
                    }>
                    <Text style={styles.buttonWord}>Cập nhật thông tin</Text>
                  </TouchableOpacity>
                </View>
                <Button
                  title="Đăng Xuất"
                  onPress={() => this.props.navigation.navigate('Login')}
                />
              </View>
            )}
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
  centers: {
    textAlign: 'center',
    alignItems: 'center',
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
    padding: 18,
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
  button: {
    marginHorizontal: 30,
    backgroundColor: '#e9446a',
    borderRadius: 4,
    height: 52,
    width: 150,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWord: {
    color: '#FFF',
    fontWeight: '500',
  },
  buttonReg: {
    alignSelf: 'center',
    marginTop: 32,
  },
  buttonWord3: {
    color: '#e9446a',
    fontWeight: '500',
  },
});
