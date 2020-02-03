import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Data from '../../Data/Data.json';

const arrow = <Icon name="arrow-left" size={20} color="#AFB7C1" />;

export default class ZikirSholat extends React.Component {
  render() {
    return (
      <View styles={Styles.ViewComponentZikir}>
        <View style={Styles.ViewHeader}>
          <TouchableOpacity
            style={Styles.TouchIcon}
            onPress={() => this.props.navigation.navigate('HomeScreen')}>
            {arrow}
            <Text style={Styles.TextTitleViewHeader}>
              {' '}
              Dzikir Setelah Sholat
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', height: '100%', paddingBottom: '12%'}}>
          <ScrollView>
            {Data.zikirSholat.map(res => (
              <View
                style={
                  res.color === 1
                    ? Styles.ViewTextZikir1
                    : Styles.ViewTextZikir2
                }>
                <Text style={Styles.TextArabZikir}>{res.arab}</Text>
                <Text style={Styles.TextArtinyaZikir}>{res.artinya}</Text>
                <Text style={Styles.TextDeskripsiZikir}>{res.deskripsi}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  ViewComponentZikir: {
    backgroundColor: '#393D46',
  },
  ViewHeader: {
    backgroundColor: '#363A43',
    height: '8%',
    alignItems: 'center',
    padding: 2,
    flexDirection: 'row',
  },
  TextTitleViewHeader: {
    color: '#AFB7C1',
    fontSize: 25,
    marginLeft: '10%',
  },
  ImageHeader: {
    width: 20,
    height: 20,
  },
  TouchIcon: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    paddingHorizontal: 10,
  },
  ViewZikir: {
    marginTop: 1,
  },
  TextArabZikir: {
    margin: '3%',
    fontSize: 25,
    color: '#383838',
  },
  TextArtinyaZikir: {
    margin: '3%',
    fontSize: 20,
    color: '#383838',
  },
  TextDeskripsiZikir: {
    margin: '3%',
    fontSize: 25,
    color: '#2c5882',
  },
  ViewTextZikir1: {
    backgroundColor: '#d6d7d8',
  },
  ViewTextZikir2: {
    backgroundColor: '#c7cacc',
  },
});
