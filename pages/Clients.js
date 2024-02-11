import { TextInput, View, StyleSheet, Text, TouchableHighlight, FlatList, Modal, TouchableOpacity, Button, TouchableWithoutFeedback, Keyboard, Pressable } from "react-native";
import { DataTable } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Header";
import { COLORS, CLIENT_DATA } from "../components/Constants";
import { useState } from "react";

export default function Clients() {
  const [data, setData] = useState(...[CLIENT_DATA]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newClientName, setNewClientName] = useState("");
  const [newClientPhone, setNewClientPhone] = useState("");
  const [newClientAddress, setNewClientAddress] = useState("");
  const [newClientComments, setNewClientComments] = useState("");
  const [newClientDebt, setNewClientDebt] = useState("");

  function saveNewUser() {
    if (newClientName != "" && newClientAddress != "" && newClientPhone != "") {
      const data = {
        name: newClientName,
        phone: newClientPhone,
        address: newClientAddress,
        comments: newClientComments,
        debt: newClientDebt == "" ? 0 : parseInt(newClientDebt),
      };
      setModalVisible(false);
      alert("Cliente nuevo guardado");
      setNewClientName("");
      setNewClientPhone("");
      setNewClientAddress("");
      setNewClientComments("");
      setNewClientDebt("");
    } else {
      alert("Revisa que todos los campos Nombre, dirección y teléfono estén llenos.");
    }
  }

  function renderModal() {
    return (
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <Pressable onPress={Keyboard.dismiss} style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <View style={{ width: "70%" }}>
            <View
              style={{
                backgroundColor: COLORS.bgMain,
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "white", fontSize: 24 }}>Agregar Cliente</Text>
              <TouchableOpacity style={{ borderWidth: 0 }} onPress={() => setModalVisible(false)}>
                <FontAwesome5 name={"times"} style={{ color: "white", fontSize: 30 }} />
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "white", paddingHorizontal: 30, paddingVertical: 30, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, gap: 10 }}>
              <View>
                <Text style={{ fontSize: 18, color: COLORS.textMain }}>Nombre Completo:</Text>
                <TextInput value={newClientName} style={styles.inputModal} onChangeText={(value) => setNewClientName(value)} />
              </View>
              <View>
                <Text style={{ fontSize: 18, color: COLORS.textMain }}>Celular:</Text>
                <TextInput keyboardType="number-pad" value={newClientPhone} style={styles.inputModal} onChangeText={(value) => setNewClientPhone(value)} />
              </View>
              <View>
                <Text multiline={true} style={{ fontSize: 18, color: COLORS.textMain }}>
                  Dirección:
                </Text>
                <TextInput value={newClientAddress} style={[styles.inputModal, styles.inputModalArea]} onChangeText={(value) => setNewClientAddress(value)} />
              </View>
              <View>
                <Text style={{ fontSize: 18, color: COLORS.textMain }}>Comentarios:</Text>
                <TextInput
                  value={newClientComments}
                  multiline={true}
                  style={[styles.inputModal, styles.inputModalArea]}
                  onChangeText={(value) => {
                    setNewClientComments(value);
                  }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 18, color: COLORS.textMain }}>Adeudo:</Text>
                <TextInput placeholder="$ 0" keyboardType="number-pad" value={newClientDebt} style={styles.inputModal} onChangeText={(value) => setNewClientDebt(value)} />
              </View>
              <TouchableHighlight onPress={saveNewUser} style={{ paddingVertical: 6, backgroundColor: COLORS.bgMain, borderRadius: 60, marginTop: 25 }}>
                <Text style={{ fontSize: 18, fontWeight: "500", color: "white", textAlign: "center" }}>Guardar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Pressable>
      </Modal>
    );
  }

  return (
    <>
      <Header headerText="Clientes" />
      <View style={styles.searchBar}>
        <TextInput style={styles.textInput} placeholder={"Busca un cliente... \t\t\t\t\t\t\t🔍"} placeholderTextColor={COLORS.textSecond} />
        <TouchableHighlight
          underlayColor={COLORS.bgSecond}
          style={{ flex: 1, borderRadius: 15 }}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <View style={styles.addClient}>
            <FontAwesome5 name={"user-plus"} style={{ fontSize: 35, color: "white" }} />
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>{"Agregar\ncliente"}</Text>
          </View>
        </TouchableHighlight>
        {renderModal()}
      </View>
      <DataTable style={{ marginVertical: 40, paddingHorizontal: 30 }}>
        <DataTable.Header style={{ backgroundColor: COLORS.bgMain, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
          <DataTable.Title style={{ justifyContent: "center", flex: 0.4 }} textStyle={{ color: "white", fontSize: 20 }}>
            #
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center", flex: 1.7 }} textStyle={{ color: "white", fontSize: 20 }}>
            Clientes
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center", flex: 1 }} textStyle={{ color: "white", fontSize: 20 }}>
            Teléfono
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center", flex: 1 }} textStyle={{ color: "white", fontSize: 20 }}>
            Deuda
          </DataTable.Title>
        </DataTable.Header>
        <View style={{ height: 600 }}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => {
              return (
                <DataTable.Row style={(index + 1) % 2 === 1 ? styles.oddRow : styles.evenRow}>
                  <DataTable.Cell style={{ flex: 0.4, justifyContent: "center" }} textStyle={{ fontSize: 16 }}>
                    {index + 1}
                  </DataTable.Cell>
                  <DataTable.Cell style={{ flex: 1.7, justifyContent: "center" }} textStyle={{ fontSize: 16 }}>
                    {item.name}
                  </DataTable.Cell>
                  <DataTable.Cell style={{ flex: 1, justifyContent: "center" }} textStyle={{ fontSize: 16 }}>
                    {item.phone}
                  </DataTable.Cell>
                  <DataTable.Cell style={{ flex: 1, justifyContent: "center" }} textStyle={{ fontSize: 16 }}>
                    $ {item.debt.toLocaleString("en-US")}
                  </DataTable.Cell>
                </DataTable.Row>
              );
            }}
          />
        </View>
      </DataTable>
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    display: "flex",
    flexDirection: "row",
    gap: 40,
    justifyContent: "space-between",
    marginTop: 60,
    paddingHorizontal: 30,
  },

  textInput: {
    borderRadius: 15,
    backgroundColor: "white",
    fontSize: 20,
    height: 60,
    padding: 10,
    width: "60%",
  },

  addClient: {
    alignItems: "center",
    backgroundColor: COLORS.bgMain,
    borderRadius: 15,
    flex: 1,
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
  },

  table: {
    marginTop: 40,
    paddingHorizontal: 30,
  },

  tableHeader: {
    backgroundColor: COLORS.bgMain,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderRadius: 10,
  },

  headText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },

  oddRow: {
    backgroundColor: "white",
  },

  evenRow: {
    backgroundColor: COLORS.bgTable,
  },

  inputModal: {
    backgroundColor: COLORS.bgInput,
    borderRadius: 10,
    height: 35,
    paddingHorizontal: 15,
  },

  inputModalArea: {
    height: 45,
  },
});
