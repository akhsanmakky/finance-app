import { StyleSheet } from "react-native";

// External styling: dipisah dari komponen supaya index.tsx tetap bersih
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  listContent: {
    padding: 20,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 14,
    color: "#64748b",
  },
  appTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 16,
  },
  balanceCard: {
    backgroundColor: "#1e3a8a",
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    elevation: 5,
    shadowColor: "#000",
  },
  balanceLabel: {
    fontSize: 14,
    color: "#bfdbfe",
  },
  balanceValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 4,
  },
  summaryRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  summaryBox: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 14,
    elevation: 2,
    shadowColor: "#000",
  },
  summaryLabel: {
    fontSize: 12,
    color: "#64748b",
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
  },
  cardInfo: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  cardSub: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },
});
