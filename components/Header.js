import { StyleSheet, View, Text, TouchableOpacity, NativeModules, Modal, TouchableWithoutFeedback } from "react-native";
import { COLORS } from "./Constants";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useState } from "react";
const { StatusBarManager } = NativeModules;

export default function Header({ headerText }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
          {!isOpen ? <FontAwesome5 name={"bars"} style={styles.headerIcon} /> : <FontAwesome5 name={"times"} style={styles.headerIcon} />}
        </TouchableWithoutFeedback>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
      <>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isOpen}
          onRequestClose={() => {
            setIsOpen(false);
          }}
        >
          <TouchableOpacity onPress={() => setIsOpen(false)} style={{ width: "100%", height: "100%" }}></TouchableOpacity>
          <View style={styles.menuHam}>
            <TouchableOpacity>
              <View style={styles.menuOption}>
                <FontAwesome5 name={"user"} style={styles.menuIcon} />
                <Text style={styles.textOption}>Clientes</Text>
              </View>
            </TouchableOpacity>
            <View style={{ width: "100%", height: 3, backgroundColor: COLORS.bgSecond }}></View>
            <TouchableOpacity>
              <View style={styles.menuOption}>
                <FontAwesome5 name={"file-alt"} style={styles.menuIcon} />
                <Text style={styles.textOption}>Reportes</Text>
              </View>
            </TouchableOpacity>
            <View style={{ width: "100%", height: 3, backgroundColor: COLORS.bgSecond, margin: 0 }}></View>
            <TouchableOpacity>
              <View style={styles.menuOption}>
                <FontAwesome5 name={"sign-out-alt"} style={styles.menuIcon} />
                <Text style={styles.textOption}>Cerrar App</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.bgSecond,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    height: 90,
    paddingHorizontal: 30,
    width: "100%",
  },

  headerText: {
    color: "#FFF",
    fontSize: 48,
  },

  headerIcon: {
    color: "#FFF",
    fontSize: 48,
    minWidth: 48,
  },

  menuHam: {
    backgroundColor: "white",
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: COLORS.bgSecond,
    marginHorizontal: 30,
    marginTop: 90,
    position: "absolute",
    width: "30%",
  },

  menuOption: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 12,
    height: 70,
    padding: 15,
  },

  textOption: {
    fontSize: 20,
  },

  menuIcon: {
    fontSize: 25,
    width: 25,
  },
});
