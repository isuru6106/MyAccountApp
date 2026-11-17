
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { router, useLocalSearchParams } from "expo-router";

export default function SuccessScreen() {
  const { userName } = useLocalSearchParams<{
    userName: string;
  }>();

  return (
    <View style={styles.container}>
      <View style={styles.successIcon}>
        <Text style={styles.checkmark}>✓</Text>
      </View>

      <Text style={styles.title}>Registration Successful!</Text>

      <Text style={styles.greeting}>
        Congratulations, {userName || "Student"}!
      </Text>

      <Text style={styles.description}>
        Your account has been successfully registered. Thank you for joining
        MyAccountApp.
      </Text>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Account Status</Text>

        <View style={styles.statusRow}>
          <View style={styles.statusDot} />

          <Text style={styles.statusText}>Registration Confirmed</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.dismissAll()}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>BACK TO REGISTRATION</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>MyAccountApp • Thank you!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FC",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  successIcon: {
    width: 115,
    height: 115,
    borderRadius: 35,
    backgroundColor: "#DDF5E8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
  },

  checkmark: {
    fontSize: 75,
    fontWeight: "bold",
    color: "#159B62",
  },

  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#173B70",
    textAlign: "center",
  },

  greeting: {
    fontSize: 19,
    fontWeight: "600",
    color: "#2457D6",
    marginTop: 15,
  },

  description: {
    fontSize: 14,
    color: "#8491A6",
    textAlign: "center",
    lineHeight: 23,
    marginTop: 15,
  },

  infoCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 22,
    borderRadius: 18,
    marginTop: 30,
    elevation: 3,
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#173B70",
    marginBottom: 15,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#159B62",
    marginRight: 10,
  },

  statusText: {
    color: "#159B62",
    fontWeight: "600",
    fontSize: 14,
  },

  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#2457D6",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },

  footer: {
    color: "#9AA6B8",
    fontSize: 12,
    marginTop: 30,
  },
});
