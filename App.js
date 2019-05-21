import React from "react";
import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";
import { Ionicons } from "@expo/vector-icons";

import {
  TouchableHighlight,
  Dimensions,
  Text,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import Modal from "react-native-modal";
import { styles } from "./App.styles.js";

const deviceWidth = Dimensions.get("window").width;

const $purple = "rgb(109,33,119)";

const WalkthroughableView = walkthroughable(View);
const WalkthroughableText = walkthroughable(Text);
const WalkthroughableImage = walkthroughable(Image);

interface CopilotTooltipProps {
  screen: string;
  isFirstStep: boolean;
  isLastStep: boolean;
  currentStep: any;
  handleNext(): void;
  handlePrev(): void;
  handleStop(): void;
}

const CopilotTooltip: React.SFC<CopilotTooltipProps> = props => {
  const {
    screen,
    isFirstStep,
    isLastStep,
    currentStep,
    handleNext,
    handlePrev,
    handleStop
  } = props;
  console.log("screen is", screen);
  console.log("screen is", props);
  return (
    <View>
      <View style={styles.tooltipContainer}>
        <Text testID="stepDescription" style={styles.tooltipText}>
          {currentStep.text}
        </Text>
      </View>
      <View style={[styles.bottomBar]}>
        {!isLastStep ? (
          <TouchableOpacity onPress={handleStop}>
            <View style={[styles.button]}>
              <Text style={[styles.buttonText]}>Skip</Text>
            </View>
          </TouchableOpacity>
        ) : null}
        {!isFirstStep ? (
          <TouchableOpacity onPress={handlePrev}>
            <View style={[styles.button]}>
              <Text style={[styles.buttonText]}>Previous</Text>
            </View>
          </TouchableOpacity>
        ) : null}
        {!isLastStep ? (
          <TouchableOpacity onPress={handleNext}>
            <View style={[styles.button]}>
              <Text style={[styles.buttonText]}>Next</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleStop}>
            <View style={[styles.button]}>
              <Text style={[styles.buttonText]}>Finish</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const { props } = this;
    const ModalContent = () => (
      <View style={styles.modalContent}>
        <Text style={styles.paragraph}>
          Ewwwwst anim cillum incididunt id cupidatat amet amet amet pariatur
          deserunt exercitation sint mollit anim. Officia eu qui sunt velit
          irure officia pariatur est ut officia non enim.Ewwwwst anim cillum
          incididunt id cupidatat amet amet amet pariatur deserunt exercitation
          sint mollit anim. Officia eu qui sunt velit irure officia pariatur est
          ut officia non enim.Ewwwwst anim cillum incididunt id cupidatat amet
          amet amet pariatur deserunt exercitation sint mollit anim. Officia eu
          qui sunt velit irure officia pariatur est ut officia non enim.Ewwwwst
          anim cillum incididunt id cupidatat amet amet amet pariatur deserunt
          exercitation sint mollit anim. Officia eu qui sunt velit irure officia
          pariatur est ut officia non enim.Ewwwwst anim cillum incididunt id
          cupidatat amet amet amet pariatur deserunt exercitation sint mollit
          anim. Officia eu qui sunt velit irure officia pariatur est ut officia
          non enim.Ewwwwst anim cillum incididunt id cupidatat amet amet amet
          pariatur deserunt exercitation sint mollit anim. Officia eu qui sunt
          velit irure officia pariatur est ut officia non enim.Ewwwwst anim
          cillum incididunt id cupidatat amet amet amet pariatur deserunt
          exercitation sint mollit anim. Officia eu qui sunt velit irure officia
          pariatur est ut officia non enim.Ewwwwst anim cillum incididunt id
          cupidatat amet amet amet pariatur deserunt exercitation sint mollit
          anim. Officia eu qui sunt velit irure officia pariatur est ut officia
          non enim.Ewwwwst anim cillum incididunt id cupidatat amet amet amet
          pariatur deserunt exercitation sint mollit anim. Officia eu qui sunt
          velit irure officia pariatur est ut officia non enim.
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.toggleModal}
          title="Toggle Modal"
          underlayColor={$purple}
        >
          <Text style={styles.buttonText}>CONTINUAR</Text>
        </TouchableHighlight>
      </View>
    );

    return (
      <View style={styles.containerWrapper}>
        <View style={styles.modal}>
          <CopilotStep
            text="Here goes your profile picture!"
            order={4}
            name="sdopjdkg"
          >
            <WalkthroughableText style={styles.title}>
              {"textao 1"}
              <CopilotStep
                text="Here goes your profile picture!"
                order={5}
                name="12121212"
              >
                <WalkthroughableText style={styles.title}>
                  {"textao 2"}
                </WalkthroughableText>
              </CopilotStep>
            </WalkthroughableText>
          </CopilotStep>
          <View style={styles.container}>
            <CopilotStep
              text="Hey! This is the first step of the tour!"
              order={1}
              name="openApp"
            >
              <WalkthroughableText style={styles.title}>
                {'Welcome to the demo of\n"React Native Joyride"'}
              </WalkthroughableText>
            </CopilotStep>
            <View style={styles.middleView}>
              <CopilotStep
                text="Here goes your profile picture!"
                order={2}
                name="secondText"
              >
                <WalkthroughableImage
                  source={{
                    uri:
                      "https://pbs.twimg.com/profile_images/527584017189982208/l3wwN-l-_400x400.jpeg"
                  }}
                  style={styles.profilePhoto}
                />
              </CopilotStep>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.start()}
              >
                <Text style={styles.buttonText}>START THE TUTORIAL!</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <CopilotStep
                text="Here is an item in the corner of the screen."
                order={3}
                name="thirdText"
              >
                <WalkthroughableText style={styles.tabItem}>
                  <Ionicons name="ios-contact" size={40} color="#888" />
                </WalkthroughableText>
              </CopilotStep>

              <Ionicons
                style={styles.tabItem}
                name="ios-at"
                size={40}
                color="#888"
              />
              <Ionicons
                style={styles.tabItem}
                name="ios-globe"
                size={40}
                color="#888"
              />
              <Ionicons
                style={styles.tabItem}
                name="ios-cloud-upload"
                size={40}
                color="#888"
              />
              <Ionicons
                style={styles.tabItem}
                name="ios-rainy"
                size={40}
                color="#888"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => props.start()}>
            <Text style={styles.buttonText}>START THE TUTORIAL!</Text>
          </TouchableOpacity>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggleModal}
            title="Toggle Modal"
            underlayColor={$purple}
          >
            <Text style={styles.buttonText}>CONTINUAR</Text>
          </TouchableHighlight>
        </View>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={this.toggleModal}
          onSwipeComplete={this.toggleModal}
          swipeDirection={"down"}
          style={styles.modal}
          deviceWidth={deviceWidth}
        >
          <ModalContent style={styles} />
        </Modal>
      </View>
    );
  }
}
export default copilot({
  animated: true, // Can be true or false
  overlay: "svg", // Can be either view or svg,
  tooltipComponent: CopilotTooltip
})(App);
