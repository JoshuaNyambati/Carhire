import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

class Profile extends React.Component {
  render() {
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.15} middle style={styles.socialConnect}>
                <Text
            h3
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.BLACK}
          >
            Book a Driver Here
          </Text>
              </Block>
              <Block flex>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                    <Input
                      right
                      placeholder="Car Make to drive"
                      style={{
                      borderColor: argonTheme.COLORS.BLACK,
                      borderRadius: 4,
                      backgroundColor: "#fff"
                      }}
                          iconContent={<Block />}
                     />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                    <Input
                      right
                      placeholder="Duration"
                      style={{
                      borderColor: argonTheme.COLORS.BLACK,
                      borderRadius: 4,
                      backgroundColor: "#fff"
                      }}
                          iconContent={<Block />}
                     />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                    <Input
                      right
                      placeholder="Passengers to Drive"
                      style={{
                      borderColor: argonTheme.COLORS.BLACK,
                      borderRadius: 4,
                      backgroundColor: "#fff"
                      }}
                          iconContent={<Block />}
                     />
                    </Block>
                    {/* <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Engine"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="engine-start"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block> */}
                    <Block width={width * 0.8}>
                    <Input
                      right
                      placeholder="Car Make to drive"
                      style={{
                      borderColor: argonTheme.COLORS.BLACK,
                      borderRadius: 4,
                      backgroundColor: "#fff"
                      }}
                          iconContent={<Block />}
                     />
                    </Block>
                    {/* <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="I agree with the terms."
                      />
                    </Block> */}
                    <Block middle>
                      <Button color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          PROCEED
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 1,
    height: height * 1,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  // inputIcons: {
  //   marginRight: 12
  // },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Profile;
