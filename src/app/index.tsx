import { useState } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";

export default function RegistrationScreen() {
  // Store registration form data
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");

  // Handle form validation and navigation
  const handleReview = () => {
    // Check whether all fields are completed
    if (
      !userName.trim() ||
      !email.trim() ||
      !phoneNumber.trim() ||
      !password ||
      !confirmPassword ||
      !yearOfBirth.trim()
    ) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    // Validate phone number
    if (!/^\d{10}$/.test(phoneNumber.trim())) {
      Alert.alert("Error", "Please enter a valid 10-digit phone number.");
      return;
    }

    // Validate password matching
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    // Validate year of birth
    const birthYear = Number(yearOfBirth);
    const currentYear = new Date().getFullYear();

    if (
      !Number.isInteger(birthYear) ||
      birthYear < 1900 ||
      birthYear > currentYear
    ) {
      Alert.alert("Error", "Please enter a valid year of birth.");
      return;
    }

    // Calculate user's age
    const age = currentYear - birthYear;

    // Restrict users under 18
    if (age < 18) {
      Alert.alert(
        "Registration Restricted",
        "You must be at least 18 years old to register.",
      );
      return;
    }

    // Navigate to Review screen
    router.push({
      pathname: "/review",
      params: {
        userName: userName.trim(),
        email: email.trim(),
        phoneNumber: phoneNumber.trim(),
        age: String(age),
      },
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Text style={styles.headerIcon}>👤</Text>
          </View>

          <Text style={styles.title}>Create Your Account</Text>

          <Text style={styles.subtitle}>Enter your details to get started</Text>
        </View>

        {/* Registration Form */}
        <View style={styles.formCard}>
          {/* Username */}
          <Text style={styles.label}>Full Name</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#9CA3AF"
            value={userName}
            onChangeText={setUserName}
            autoCapitalize="words"
          />

          {/* Email */}
          <Text style={styles.label}>Email Address</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Phone Number */}
          <Text style={styles.label}>Phone Number</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            maxLength={10}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          {/* Year of Birth */}
          <Text style={styles.label}>Year of Birth</Text>

          <TextInput
            style={styles.input}
            placeholder="Example: 2004"
            placeholderTextColor="#9CA3AF"
            keyboardType="number-pad"
            maxLength={4}
            value={yearOfBirth}
            onChangeText={setYearOfBirth}
          />

          {/* Password */}
          <Text style={styles.label}>Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Confirm Password */}
          <Text style={styles.label}>Confirm Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {/* Review Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleReview}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>REVIEW DETAILS →</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          MyAccountApp • Mobile Application Development
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F3F6FC",
  },

  container: {
    flexGrow: 1,
    padding: 22,
    paddingTop: 45,
    paddingBottom: 35,
  },

  header: {
    alignItems: "center",
    marginBottom: 28,
  },

  iconContainer: {
    width: 75,
    height: 75,
    borderRadius: 24,
    backgroundColor: "#E4EDFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 17,
  },

  headerIcon: {
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
    marginTop: 8,
    textAlign: "center",
  },

  formCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 20,
    elevation: 4,
    shadowColor: "#173B70",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#243754",
    marginBottom: 8,
    marginTop: 13,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#DCE4F0",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 14,
    color: "#243754",
    backgroundColor: "#FAFBFE",
  },

  button: {
    height: 54,
    backgroundColor: "#2457D6",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 27,
    elevation: 3,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.7,
  },

  footer: {
    textAlign: "center",
    color: "#9AA6B8",
    fontSize: 11,
    marginTop: 25,
  },
});
