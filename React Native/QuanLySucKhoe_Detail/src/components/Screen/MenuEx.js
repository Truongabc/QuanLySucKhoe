import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import fireApp from './fire';
// import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
// const Tab = createMaterialTopTabNavigator();

const rootRef = fireApp.database().ref();
const animalRef = rootRef.child('MenuEx/GoiY/01/');
export default class DatabaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NameFood: [],
      newAnimalName: '',
      loading: false,
    };
  }
  componentDidMount() {
    var items = [];
    animalRef.on('value', (childSnapshot) => {
      childSnapshot.forEach((doc) => {
        items.push({
          key: doc.key,
          Calo: doc.toJSON().Calo,
          GiaVi: doc.toJSON().GiaVi,
          Images: doc.toJSON().Images,
          Make: doc.toJSON().Make,
          Name: doc.toJSON().Name,
          KhoiLuong: doc.toJSON().KhoiLuong,
          ID: doc.toJSON().ID,
        });
        console.log(childSnapshot.val());
        this.setState({
          NameFood: items.sort((a, b) => {
            return a.Name < b.Name;
          }),
          loading: false,
        });
      });
    });
  }
  render() {
    return (
      <ImageBackground
        source={require('../img/backMenuex.jpg')}
        style={styles.ContainerImages}>
        <SafeAreaView>
          <Text style={styles.inputTitle}>Gợi Ý Món Ăn</Text>
          <FlatList
            data={this.state.NameFood}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.setParams({
                      Calo: item.Calo,
                      GiaVi: item.GiaVi,
                      Images: item.Images,
                      Make: item.Make,
                      Name: item.Name,
                      KhoiLuong: item.KhoiLuong,
                      ID: item.ID,
                    });
                    this.props.navigation.navigate('detailMenuEx', {
                      Calo: item.Calo,
                      GiaVi: item.GiaVi,
                      Images: item.Images,
                      Make: item.Make,
                      Name: item.Name,
                      KhoiLuong: item.KhoiLuong,
                      ID: item.ID,
                    });
                  }}>
                  <View style={styles.container}>
                    <Image source={{uri: item.Images}} style={styles.photo} />
                    <View style={styles.container_text}>
                      <Text style={styles.title}>{item.Name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  ContainerImages: {
    flex: 1,
  },
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
  inputTitle: {
    padding: 10,
    paddingBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    color: '#FF3333',
  },
  title: {
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
