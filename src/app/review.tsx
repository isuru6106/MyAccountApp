
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { router, useLocalSearchParams } from "expo-router";

export default function ReviewScreen() {
  // Receive registration details from previous screen
  const { userName, email, phoneNumber, age } = useLocalSearchParams<{
    userName: string;
    email: string;
    phoneNumber: string;
    age: string;
  }>();

  // Display individual information items
  const DetailItem = ({
    label,
    value,
    icon,
  }: {
    label: string;
    value: string;
    icon: string;
  }) => (
    <View style={styles.detailItem}>
      <View style={styles.detailIcon}>
        <Text style={styles.iconText}>{icon}</Text>
      </View>

      <View style={styles.detailContent}>
        <Text style={styles.detailLabel}>{label}</Text>
        <Text style={styles.detailValue}>{value || "Not provided"}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Text style={styles.headerEmoji}>📋</Text>
        </View>

        <Text style={styles.title}>Review Your Details</Text>

        <Text style={styles.subtitle}>
          Please check your information before confirming.
        </Text>
      </View>

      {/* Information Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Personal Information</Text>

        <DetailItem label="Full Name" value={userName} icon="👤" />

        <View style={styles.divider} />

        <DetailItem label="Email Address" value={email} icon="✉️" />

        <View style={styles.divider} />

        <DetailItem label="Phone Number" value={phoneNumber} icon="📱" />

        <View style={styles.divider} />

        <DetailItem
          label="Calculated Age"
          value={age ? `${age} years old` : ""}
          icon="🎂"
        />
      </View>

      {/* Information Notice */}
      <View style={styles.notice}>
        <Text style={styles.noticeIcon}>ℹ️</Text>

        <Text style={styles.noticeText}>
          Please ensure that all the information displayed above is correct
          before confirming your registration.
        </Text>
      </View>

      {/* Edit Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
        activeOpacity={0.8}
      >
        <Text style={styles.backButtonText}>← GO BACK AND EDIT</Text>
      </TouchableOpacity>

      {/* Confirm Button */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() =>
          router.push({
            pathname: "/success",
            params: { userName: userName || "Student" },
          })
        }
        activeOpacity={0.8}
      >
        <Text style={styles.confirmButtonText}>CONFIRM REGISTRATION ✓</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>MyAccountApp • Registration Review</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F3F6FC",
  },

  container: {
    padding: 22,
    paddingTop: 45,
    paddingBottom: 35,
  },

  header: {
    alignItems: "center",
    marginBottom: 28,
  },

  headerIcon: {
    width: 75,
    height: 75,
    borderRadius: 23,
    backgroundColor: "#E4EDFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 17,
  },

  headerEmoji: {
    fontSize: 35,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#173B70",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 13,
    color: "#8491A6",
    marginTop: 9,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 20,
    elevation: 4,
    shadowColor: "#173B70",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#173B70",
    marginBottom: 20,
  },

  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },

  detailIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#EAF0FF",
    justifyContent: "center",
    alignItems: "center",
  },

  iconText: {
    fontSize: 21,
  },

  detailContent: {
    flex: 1,
    marginLeft: 14,
  },

  detailLabel: {
    fontSize: 12,
    color: "#8491A6",
    marginBottom: 5,
  },

  detailValue: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#243754",
  },

  divider: {
    height: 1,
    backgroundColor: "#EDF0F5",
  },

  notice: {
    flexDirection: "row",
    backgroundColor: "#E8F0FF",
    padding: 15,
    borderRadius: 13,
    marginTop: 20,
    alignItems: "center",
  },

  noticeIcon: {
    fontSize: 20,
    marginRight: 10,
  },

  noticeText: {
    flex: 1,
    fontSize: 12,
    color: "#31527F",
    lineHeight: 19,
  },

  backButton: {
    height: 54,
    borderWidth: 1.5,
    borderColor: "#2457D6",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  backButtonText: {
    color: "#2457D6",
    fontSize: 13,
    fontWeight: "bold",
  },

  confirmButton: {
    height: 54,
    backgroundColor: "#2457D6",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13,
    elevation: 3,
  },

  confirmButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    color: "#9AA6B8",
    fontSize: 11,
    marginTop: 25,
  },
});
