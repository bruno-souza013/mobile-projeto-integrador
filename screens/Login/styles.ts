import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "BigShoulders-Regular",
    height:'100%'
  },
  welcomeContainer: {
    display: "flex",
    width: "100%",
    top: -50
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 50,
    color: "#fff",
  },
  buttonlogin: {
    backgroundColor: "#06565F",
    borderRadius: 10,
    width: "15%",
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: 28,
    flexDirection: "column",
    rowGap: 20
  },
  buttonGoogle: {
    width: "35%",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#f3f3f3",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  googleText: {
    fontSize: 16,
  },
  imageGoogle: {
    height: 20,
    width: 20,
  },
  ouText: {
    color: "#fff",
    fontSize: 20
  },
  imageTop: {
    width: "100%",
    objectFit: 'fill',
  },
  imageBot: {
    width: "100%",
    objectFit: 'fill'
  }, 
  cadButtonContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: 28,
    flexDirection: "column",
    rowGap: 20
  },
  cadButton: {
    backgroundColor: "#5FF0B7",
    borderRadius: 10,
    width: "60%",
    alignItems: "center",
    padding: 10,
  
  },
  cadButtonText:{
    color: "#06565F",
    fontSize: 20
  }

});
