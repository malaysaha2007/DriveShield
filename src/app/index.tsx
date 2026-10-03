import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DriveShield</Text>

      <View style={styles.vehicleCard}>
        <Text style={styles.label}>MY VEHICLE</Text>
        <Text style={styles.vehicle}>Vehicle not registered</Text>
        <Text style={styles.status}>Device not connected</Text>
      </View>

      <View style={styles.alertCard}>
        <Text style={styles.alertTitle}>No active alerts</Text>
        <Text style={styles.alertText}>
          DriveShield will notify you when a road hazard is detected.
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>V2V Status</Text>
        <Text style={styles.infoValue}>Disconnected</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
    paddingTop: 60,
  },

  logo: {
    fontSize: 30,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 30,
  },

  vehicleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64748B",
    marginBottom: 8,
  },

  vehicle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0F172A",
  },

  status: {
    marginTop: 8,
    color: "#64748B",
  },

  alertCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },

  alertTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0F172A",
  },

  alertText: {
    marginTop: 8,
    color: "#64748B",
    lineHeight: 20,
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
  },

  infoValue: {
    marginTop: 8,
    color: "#64748B",
  },
});