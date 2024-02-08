import { TextInput, View, StyleSheet, Text, Pressable, TouchableHighlight } from "react-native";
import { DataTable } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Header";
import { COLORS } from "../components/Constants";

export default function Clients() {
  return (
    <>
      <Header headerText="Clientes" />
      <View style={styles.searchBar}>
        <TextInput style={styles.textInput} placeholder={"Busca un cliente... \t\t\t\t\t\t\t🔍"} placeholderTextColor={COLORS.textSecond} />
        <TouchableHighlight underlayColor={COLORS.bgSecond} style={{ flex: 1, borderRadius: 15 }} onPress={() => console.log("Agregar cliente presionado")}>
          <View style={styles.addClient}>
            <FontAwesome5 name={"user-plus"} style={{ fontSize: 35, color: "white" }} />
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>{"Agregar\ncliente"}</Text>
          </View>
        </TouchableHighlight>
      </View>
      {/* <DataTable style={styles.table}>
        <DataTable.Header style={styles.tableHeader}>
          <View style={{ display: "flex", flex: 1.4, alignItems: "center" }}>
            <DataTable.Title style>
              <Text style={styles.headText}>Cliente</Text>
            </DataTable.Title>
          </View>
          <View style={{ display: "flex", flex: 1.4, alignItems: "center" }}>
            <DataTable.Title>
              <Text style={styles.headText}>Teléfono</Text>
            </DataTable.Title>
          </View>
          <View style={{ display: "flex", flex: 1.4, alignItems: "center" }}>
            <DataTable.Title>
              <Text style={styles.headText}>Deuda</Text>
            </DataTable.Title>
          </View>
        </DataTable.Header>
      </DataTable> */}
      <DataTable style={{ marginTop: 40, paddingHorizontal: 30 }}>
        <DataTable.Header style={{ backgroundColor: COLORS.bgMain, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
          <DataTable.Title style={{ justifyContent: "center", flex: 0.4, borderWidth: 2 }} textStyle={{ color: "white", fontSize: 20 }}>
            #
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center", flex: 2, borderWidth: 2 }} textStyle={{ color: "white", fontSize: 20 }}>
            Clientes
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center", flex: 1 }} textStyle={{ color: "white", fontSize: 20 }}>
            Teléfono
          </DataTable.Title>
          <DataTable.Title style={{ justifyContent: "center", flex: 1 }} textStyle={{ color: "white", fontSize: 20 }}>
            Deuda
          </DataTable.Title>
        </DataTable.Header>
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
});
