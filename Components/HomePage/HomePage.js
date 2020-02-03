import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Modal,
} from 'react-native';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      modalDzikir: false,
      modalAbout: false,
    };
  }

  setModalDzikir(visible) {
    this.setState({modalDzikir: visible});
  }

  setModalAbout(visible) {
    this.setState({modalAbout: visible});
  }
  render() {
    return (
      <View style={Styles.Component}>
        <ImageBackground
          style={Styles.ImageBackground}
          source={require('../../Assets/masjid.jpg')}></ImageBackground>
        <View style={Styles.OpacityBackground}></View>
        <View style={Styles.ViewLogo}>
          <ImageBackground
            style={Styles.LogoImage}
            source={require('../../Assets/logo.png')}></ImageBackground>
          <Text style={Styles.TextDzikir}>Dzikir App</Text>
          <View style={Styles.ButtonView}>
            <View style={{paddingTop: '12%'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ZikirPagiPage')}
                style={Styles.ButtonTouch}>
                <Text style={Styles.TextButton}>Dzikir Pagi</Text>
              </TouchableOpacity>
              <View style={{marginTop: 20}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('ZikirSorePage')
                  }
                  style={Styles.ButtonTouch}>
                  <Text style={Styles.TextButton}>Dzikir Sore</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('ZikirSholatPage')
                  }
                  style={Styles.ButtonTouch}>
                  <Text style={Styles.TextButton}>Dzikir Setelah Sholat</Text>
                </TouchableOpacity>
              </View>
              {/* keutamaan zikir */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalDzikir}>
                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: '80%',
                      height: '40%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '5%',
                          fontSize: 17,
                        }}>
                        Orang yang berdzikir kepada Allah hatinya akan merasakan
                        ketenangan dan ketentraman, pikiran juga akan tenang dan
                        nyaman. Semua rasa gelisah dan kegoncangan dalam hati
                        akan hilang karena ia mengingat Rabb-nya dengan lisan
                        yang senantiasa berdzikir. Allah ta’ala berfirman,
                        “Yaitu orang-orang yang beriman dan hati mereka menjadi
                        tentram dengan mengingat Allah, ingatlah hanya dengan
                        mengingat Allah-lah hati akan menjadi tentram.” (QS.
                        Ar-Ra’d: 28).
                      </Text>

                      <TouchableHighlight
                        onPress={() => {
                          this.setModalDzikir(!this.state.modalDzikir);
                        }}>
                        <Text
                          style={{
                            // marginTop: '30%',
                            marginLeft: '80%',
                            margin: '5%',
                          }}>
                          close
                        </Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </View>
              </Modal>
              <View style={{marginTop: 20}}>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalDzikir(true);
                  }}
                  style={Styles.ButtonTouch}>
                  <Text style={Styles.TextButton}>Keutamaan Dzikir</Text>
                </TouchableHighlight>
              </View>
              {/* keutamaan zikir */}
              {/* about */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalAbout}>
                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      width: '80%',
                      height: '40%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        // height: '20%',
                        // width: '80%',
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '5%',
                          fontSize: 17,
                        }}>
                        Aplikasi yang saya buat ini diharapkan dapat memudahkan
                        bagi kaum muslim untuk senantiasa menghiasi hari
                        -harinya dengan mengingat ALLAH yang salah satu caranya
                        adalah dengan berdzikir.
                      </Text>

                      <TouchableHighlight
                        onPress={() => {
                          this.setModalAbout(!this.state.modalAbout);
                        }}>
                        <Text
                          style={{
                            // marginTop: '30%',
                            marginLeft: '80%',
                            margin: '5%',
                          }}>
                          close
                        </Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </View>
              </Modal>
              <View style={{marginTop: 20}}>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalAbout(true);
                  }}
                  style={Styles.ButtonTouch}>
                  <Text style={Styles.TextButton}>About</Text>
                </TouchableHighlight>
              </View>
              {/* about */}
            </View>
          </View>
        </View>
        <View style={Styles.ViewTextCenter}>
          <Text style={Styles.TextCopyright}>©2020 Dimas Anugerah P</Text>
        </View>
      </View>
    );
  }
}
export default HomePage;

const Styles = StyleSheet.create({
  Component: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: '70%',
    height: '70%',
  },
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
  OpacityBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.8,
    textAlign: 'center',
  },
  TextCopyright: {
    color: '#8e8787',
  },
  TextDzikir: {
    color: '#ddd7d7',
    fontSize: 20,
  },
  ViewTextCenter: {
    position: 'absolute',
    textAlign: 'center',
    alignSelf: 'center',
    bottom: '1%',
  },
  LogoImage: {
    width: 100,
    height: 100,
  },
  ViewLogo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // top: 0,
    marginTop: '10%',
  },
  ViewButton: {
    position: 'absolute',
    // top: 0,
  },
  ButtonView: {
    padding: '2%',
  },
  TextButton: {
    color: 'white',
  },
  ButtonTouch: {
    alignItems: 'center',
    padding: '10%',
    width: '100%',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
});
