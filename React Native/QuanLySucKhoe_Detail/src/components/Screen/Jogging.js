import React, {Component} from 'react';
import {Dimensions, TouchableOpacity, ActivityIndicator} from 'react-native';
import moment from 'moment';
import fireApp from './fire';
const rootRef = fireApp.database().ref();
const animalRef = rootRef.child('MenuEx/Menu/');
let d, d1, d2, d3, d4, d5, d6, d7;
let dt, dt1, dt2, dt3, dt4, dt5, dt6;
// let databas = [];
import {Text, View, StyleSheet} from 'react-native';
import {
  LineChart,
  // BarChart,
  // PieChart,
  // ProgressChart,
  // ContributionGraph,
  // StackedBarChart,
} from 'react-native-chart-kit';
export default class JoggingComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NameFood: [],
      email: '',
      uid: '',
      date: moment().format('L'),
      ngay: '',
      thang: '',
      nam: '',
      loading: true,
      val1: 0,
      val2: 0,
      val3: 0,
      val4: 0,
      val5: 0,
      val6: 0,
      val7: 0,
    };
  }
  componentDidMount() {
    const {email, uid} = fireApp.auth().currentUser;
    this.setState({email, uid});
    var items = [];
    animalRef.on('value', (childSnapshot) => {
      childSnapshot.forEach((doc) => {
        items.push({
          key: doc.key,
          Calo: doc.toJSON().Calo,
          Name: doc.toJSON().Name,
        });
        this.setState({
          NameFood: items.sort((a, b) => {
            return a.Name < b.Name;
          }),
          loading: false,
        });
      });
    });
    let days = moment().format('L');
    let sumday = [];
    sumday = days.split('/');
    this.setState({ngay: sumday[1], thang: sumday[0], nam: sumday[2]});
    d = sumday[1];
    Number(d);
    if (sumday[1] - 0 < 10) {
      d1 = '0' + (sumday[1] - 0);
    } else {
      d1 = sumday[1] - 0;
    }
    if (sumday[1] - 1 < 10) {
      d2 = '0' + (sumday[1] - 1);
    } else {
      d2 = sumday[1] - 1;
    }
    if (sumday[1] - 2 < 10) {
      d3 = '0' + (sumday[1] - 2);
    } else {
      d3 = sumday[1] - 2;
    }
    if (sumday[1] - 3 < 10) {
      d4 = '0' + (sumday[1] - 3);
    } else {
      d4 = sumday[1] - 3;
    }
    if (sumday[1] - 4 < 10) {
      d5 = '0' + (sumday[1] - 4);
    } else {
      d5 = sumday[1] - 4;
    }
    if (sumday[1] - 5 < 10) {
      d6 = '0' + (sumday[1] - 5);
    } else {
      d6 = sumday[1] - 5;
    }
    if (sumday[1] - 6 < 10) {
      d7 = '0' + (sumday[1] - 6);
    } else {
      d7 = sumday[1] - 6;
    }
    dt = d1 + '-' + sumday[0];
    dt1 = d2 + '-' + sumday[0];
    dt2 = d3 + '-' + sumday[0];
    dt3 = d4 + '-' + sumday[0];
    dt4 = d5 + '-' + sumday[0];
    dt5 = d6 + '-' + sumday[0];
    dt6 = d7 + '-' + sumday[0];
    const animalRef1 = rootRef.child(
      'MenuEx/Eat/' + uid + '/' + d1 + '-' + sumday[0] + '-' + sumday[2] + '/',
    );
    animalRef1.on('value', (Snapshot) => {
      var thisdata1 = Snapshot.val();
      if (thisdata1 != null) {
        this.setState({
          val1: thisdata1.Calo,
        });
      } else {
        this.setState({
          val1: 0,
        });
      }
      console.log('data1', Snapshot.val());
      console.log('const 1', animalRef1);
    });
    const animalRef2 = rootRef.child(
      'MenuEx/Eat/' + uid + '/' + d2 + '-' + sumday[0] + '-' + sumday[2] + '/',
    );
    animalRef2.on('value', (Snapshot) => {
      var thisdata2 = Snapshot.val();
      if (thisdata2 != null) {
        this.setState({
          val2: thisdata2.Calo,
        });
      } else {
        this.setState({
          val2: 0,
        });
      }
      console.log('data2', Snapshot.val());
      console.log('const 2', animalRef2);
    });

    const animalRef3 = rootRef.child(
      'MenuEx/Eat/' + uid + '/' + d3 + '-' + sumday[0] + '-' + sumday[2] + '/',
    );
    animalRef3.on('value', (Snapshot) => {
      var thisdata3 = Snapshot.val();
      if (thisdata3 != null) {
        this.setState({
          val3: thisdata3.Calo,
        });
      } else {
        this.setState({
          val3: 0,
        });
      }
      console.log('data3', Snapshot.val());
      console.log('const 3', animalRef3);
    });

    const animalRef4 = rootRef.child(
      'MenuEx/Eat/' + uid + '/' + d4 + '-' + sumday[0] + '-' + sumday[2] + '/',
    );
    animalRef4.on('value', (Snapshot) => {
      var thisdata4 = Snapshot.val();
      if (thisdata4 != null) {
        this.setState({
          val4: thisdata4.Calo,
        });
      } else {
        this.setState({
          val4: 0,
        });
      }
      console.log('data 4', Snapshot.val());
      console.log('const 4', animalRef4);
    });

    const animalRef5 = rootRef.child(
      'MenuEx/Eat/' + uid + '/' + d5 + '-' + sumday[0] + '-' + sumday[2] + '/',
    );
    animalRef5.on('value', (Snapshot) => {
      var thisdata5 = Snapshot.val();
      if (thisdata5 != null) {
        this.setState({
          val5: thisdata5.Calo,
        });
      } else {
        this.setState({
          val5: 0,
        });
      }
      console.log('data5', Snapshot.val());
      console.log('const 5', animalRef5);
    });

    const animalRef6 = rootRef.child(
      'MenuEx/Eat/' + uid + '/' + d6 + '-' + sumday[0] + '-' + sumday[2] + '/',
    );
    animalRef6.on('value', (Snapshot) => {
      var thisdata6 = Snapshot.val();
      if (thisdata6 != null) {
        this.setState({
          val6: thisdata6.Calo,
        });
      } else {
        this.setState({
          val6: 0,
        });
      }
      console.log('data6', Snapshot.val());
      console.log('const 6', animalRef6);
    });
    const animalRef7 = rootRef.child(
      'MenuEx/Eat/' + uid + '/' + d7 + '-' + sumday[0] + '-' + sumday[2] + '/',
    );
    animalRef7.on('value', (Snapshot) => {
      var thisdata7 = Snapshot.val();
      if (thisdata7 != null) {
        this.setState({
          val7: thisdata7.Calo,
        });
      } else {
        this.setState({
          val7: 0,
        });
      }
      console.log('data 7', Snapshot.val());
      console.log('const 7', animalRef7);
    });
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 4000);
  }
  // componentDidMount() {
  //   let days = moment().format('L');
  //   let sumday = [];
  //   sumday = days.split('/');
  //   this.setState({ngay: sumday[0], thang: sumday[1], nam: sumday[2]});
  //   console.log(sumday, days);
  //   var items = [];
  //   animalRef.on('value', (childSnapshot) => {
  //     childSnapshot.forEach((doc) => {
  //       items.push({
  //         key: doc.key,
  //         Calo: doc.toJSON().Calo,
  //         Name: doc.toJSON().Name,
  //       });
  //       console.log(childSnapshot.val());
  //       this.setState({
  //         NameFood: items.sort((a, b) => {
  //           return a.Name < b.Name;
  //         }),
  //         loading: false,
  //       });
  //     });
  //   });
  // }
  // data={{
  //   labels: [dt6, dt5, dt4, dt3, dt2, dt1, dt],
  //   datasets: [
  //     {
  //       data: [va7, va6, va5, va4, va3, va2, va1],
  //     },
  //   ],
  // }}
  // [33421, 22312, 33212, 55211, 44271, 33501, 12761],
  render() {
    return (
      <View style={styles.load}>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View style={styles.Container}>
            <View style={styles.tops}>
              <Text>{this.state.date}</Text>
              <Text>
                {' '}
                Ngay :{this.state.ngay}
                {'\n'}
                Thang: {this.state.thang}
                {'\n'}
                Năm : {this.state.nam}{' '}
              </Text>
              <Text> Dữ liệu Val:{this.state.val1}</Text>
            </View>
            <View style={styles.bottoms}>
              <Text>
                Bezier Line Chart 1:{dt} 2:{dt1} 3:{dt2} 4:{dt3} 5:{dt4} 6:{dt5}{' '}
                7:
                {dt6}
              </Text>
              <View>
                <Text>Bezier Line Chart</Text>
                {/* <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.setParams({
                      dt: dt,
                      dt1: dt1,
                      dt2: dt2,
                      dt3: dt3,
                      dt4: dt4,
                      dt5: dt5,
                      dt6: dt6,
                      val1: this.state.val1,
                      val2: this.state.val2,
                      val3: this.state.val3,
                      val4: this.state.val4,
                      val5: this.state.val5,
                      val6: this.state.val6,
                      val7: this.state.val7,
                    });
                    this.props.navigation.navigate('chart', {
                      dt: dt,
                      dt1: dt1,
                      dt2: dt2,
                      dt3: dt3,
                      dt4: dt4,
                      dt5: dt5,
                      dt6: dt6,
                      val1: this.state.val1,
                      val2: this.state.val2,
                      val3: this.state.val3,
                      val4: this.state.val4,
                      val5: this.state.val5,
                      val6: this.state.val6,
                      val7: this.state.val7,
                    });
                  }}>
                  <Text style={styles.title}>Xem Biểu ĐỒ</Text>
                </TouchableOpacity> */}
                <LineChart
                  data={{
                    labels: [dt6, dt5, dt4, dt3, dt2, dt1, dt],
                    datasets: [
                      {
                        data: [
                          this.state.val7,
                          this.state.val6,
                          this.state.val5,
                          this.state.val4,
                          this.state.val3,
                          this.state.val2,
                          this.state.val1,
                        ],
                      },
                    ],
                  }}
                  width={Dimensions.get('window').width} // from react-native
                  height={250}
                  // yAxisLabel="Calo"
                  yAxisSuffix="k"
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: '#999999',
                    backgroundGradientFrom: '#808080',
                    backgroundGradientTo: '#C0C0C0',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: '6',
                      strokeWidth: '2',
                      stroke: '#555555',
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  // this.props.navigation.setParams({
                  //   val1: this.state.val1,
                  //   val2: this.state.val2,

                  //   val7: this.state.val7,
                  // });
                  this.props.navigation.navigate('chart', {
                    val1: this.state.val1,
                    val2: this.state.val2,
                  });
                }}>
                <Text style={styles.title}>Xem chi tiết.. {'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  load: {
    flex: 1,
  },
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgb(234, 195, 176)',
  },
  tops: {
    flexDirection: 'column',

    flex: 3,
  },
  bottoms: {
    flexDirection: 'column',
    flex: 5,
  },
  title: {
    color: '#3366CC',
    fontSize: 16,
  },
});
