import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import moment from 'moment';
import KeepAwake from 'react-native-keep-awake';
import {Dropdown} from 'react-native-material-dropdown';
let p, g;
// import {Value} from 'react-native-reanimated';
export default class SleepComponents extends Component {
  constructor(props) {
    super(props);
    this.load = this.load.bind(this);
    this.state = {
      time: moment().format('LTS'),
      date: moment().format('LL'),
      Ongio: '',
      Onphut: '',
      fngio: '',
      fnphut: '',
      select: '0',
    };
  }
  load() {
    Alert.alert(
      'Thông báo!',
      'Gợi ý thức giấc hoàn thành',
      [{text: 'OK', onPress: () => console.log('Cancel Pressed')}],
      {cancelable: false},
    );
    // let {Ongio, Onphut} = this.state.;
    // var p = Onphut;
    // var g = Ongio;
    Number(p);
    Number(g);
    let b = (Number(p) + Number(45)) % 60;
    let c = parseInt((Number(p) + Number(45)) / 60);
    let d = (Number(g) + Number(c) + Number(7)) % 24;
    this.setState({fnphut: b});
    if (d !== 0) {
      this.setState({fngio: d});
    } else {
      this.setState({fngio: 0});
    }
    Number(p);
    Number(g);
    let b1 = (Number(p) + Number(15)) % 60;
    let c1 = parseInt((Number(p) + Number(15)) / 60);
    let d1 = (Number(g) + Number(c1) + Number(6)) % 24;
    this.setState({Onphut: b1});
    this.setState({Ongio: d1});
    // if (d1 !== 0) {
    //   this.setState({Ongio: d1});
    // } else {
    //   this.setState({fngio: 0});
    // }
  }
  render() {
    setTimeout(() => {
      this.setState({
        time: moment().format('LTS'),
        date: moment().format('LL'),
      });
    }, 1000);
    let dataHourse = [
      {
        value: '00',
      },
      {
        value: '01',
      },
      {
        value: '02',
      },
      {
        value: '03',
      },
      {
        value: '04',
      },
      {
        value: '05',
      },
      {
        value: '06',
      },
      {
        value: '07',
      },
      {
        value: '08',
      },
      {
        value: '09',
      },
      {
        value: '10',
      },
      {
        value: '11',
      },
      {
        value: '12',
      },
      {
        value: '13',
      },
      {
        value: '14',
      },
      {
        value: '15',
      },
      {
        value: '16',
      },
      {
        value: '17',
      },
      {
        value: '18',
      },
      {
        value: '19',
      },
      {
        value: '20',
      },
      {
        value: '21',
      },
      {
        value: '22',
      },
      {
        value: '23',
      },
    ];

    let datamunite = [
      {
        value: '00',
      },
      {
        value: '05',
      },
      {
        value: '10',
      },
      {
        value: '15',
      },
      {
        value: '20',
      },
      {
        value: '25',
      },
      {
        value: '30',
      },
      {
        value: '35',
      },
      {
        value: '40',
      },
      {
        value: '45',
      },
      {
        value: '50',
      },
      {
        value: '55',
      },
    ];
    return (
      <ImageBackground
        source={require('../img/bgSleep.jpg')}
        style={styles.Container}>
        <View style={styles.Tops}>
          <Text style={styles.buttonview}>{this.state.time}</Text>
          <Text style={styles.inputTitle}>Thời gian bắt đầu ngủ!{'\n'}</Text>
          <View style={styles.twodrop}>
            <View style={styles.leftdrop}>
              <Dropdown
                label="Giờ"
                data={dataHourse}
                onChangeText={(value) => {
                  g = value;
                }}
              />
            </View>
            <View style={styles.rightdrop}>
              <Dropdown
                label="Phút"
                data={datamunite}
                onChangeText={(value) => {
                  p = value;
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.Bottoms}>
          <TouchableOpacity style={styles.button} onPress={this.load}>
            <Text style={styles.buttonWord}>Xem thời gian thức giấc</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.inputTitle1}>Thời gian Dậy với 4 Chu kì</Text>
            <Text style={styles.centers}>
              {' '}
              {this.state.Ongio} : {this.state.Onphut}{' '}
            </Text>
          </View>
          <View>
            <Text style={styles.inputTitle1}>Thời gian Dậy với 5 Chu kì</Text>
            <Text style={styles.centers}>
              {' '}
              {this.state.fngio} : {this.state.fnphut}{' '}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
  },
  centers: {
    alignItems: 'center',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
  },
  twodrop: {
    borderRadius: 10,
    backgroundColor: '#B5B5B5',
    flexDirection: 'row',
    fontWeight: '800',
  },
  leftdrop: {
    flex: 1,
    paddingLeft: 10,
    fontWeight: '800',
  },
  rightdrop: {
    width: 200,
    marginLeft: 1,
  },
  inputTitle: {
    paddingTop: 20,
    fontSize: 16,
    color: '#FFF',
    textTransform: 'uppercase',
    marginLeft: 1,
  },
  inputTitle1: {
    paddingTop: 20,
    fontSize: 16,
    color: '#FFF',
    textTransform: 'uppercase',
    marginLeft: 1,
  },
  Tops: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  Bottoms: {
    marginTop: 50,
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  Text: {
    marginTop: 300,
    opacity: 1,
    fontSize: 25,
    color: '#FFF',
  },

  buttonview: {
    color: '#FFF',
    marginTop: 200,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '900',
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#3366ff',
    borderRadius: 10,
    width: 250,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWord: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '600',
  },
});
