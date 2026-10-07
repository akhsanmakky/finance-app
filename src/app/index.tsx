import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";
import { styles } from "../constants/styles";
import type { Summary, Transaction } from "../constants/types";

// ARRAY OF OBJECTS: data dummy, setiap elemen mengikuti interface Transaction
const transactions: Transaction[] = [
  { id: "1", title: "Gaji Freelance", amount: 2500000, type: "income", category: "gaji", date: "2026-10-01" },
  { id: "2", title: "Makan Siang", amount: 25000, type: "expense", category: "makan", date: "2026-10-02", note: "Bakso" },
  { id: "3", title: "Bensin Motor", amount: 40000, type: "expense", category: "transport", date: "2026-10-02" },
  { id: "4", title: "Token Listrik", amount: 100000, type: "expense", category: "tagihan", date: "2026-10-03" },
  { id: "5", title: "Beli Buku", amount: 85000, type: "expense", category: "belanja", date: "2026-10-04" },
];

// CUSTOM FUNCTION 1: format angka jadi "Rp 1.000.000"
const formatRupiah = (amount: number): string =>
  "Rp " + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// CUSTOM FUNCTION 2: hitung total pakai loop + kondisi
const calculateSummary = (list: Transaction[]): Summary => {
  let totalIncome = 0;
  let totalExpense = 0;

  for (const item of list) {
    if (item.type === "income") {
      totalIncome += item.amount;
    } else {
      totalExpense += item.amount;
    }
  }

  return { totalIncome, totalExpense, balance: totalIncome - totalExpense };
};

// CUSTOM FUNCTION 3: membuat satu kartu transaksi dari satu data
const renderTransactionCard = (item: Transaction) => {
  const isIncome = item.type === "income";
  const color = isIncome ? "#16a34a" : "#dc2626";

  return (
    <View style={styles.card}>
      <Ionicons
        name={isIncome ? "arrow-down-circle" : "arrow-up-circle"}
        size={36}
        color={color}
      />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSub}>
          {item.category} - {item.date}
        </Text>
      </View>
      {/* INLINE STYLE: warna berubah sesuai nilai variabel */}
      <Text style={{ fontSize: 16, fontWeight: "bold", color: color }}>
        {isIncome ? "+" : "-"} {formatRupiah(item.amount)}
      </Text>
    </View>
  );
};

export default function Index() {
  const summary = calculateSummary(transactions);

  const summaryItems = [
    { id: "income", label: "Pemasukan", value: summary.totalIncome, color: "#16a34a" },
    { id: "expense", label: "Pengeluaran", value: summary.totalExpense, color: "#dc2626" },
  ];

  // Bagian atas daftar: judul, kartu saldo, dan ringkasan
  const header = (
    <View>
      <Text style={styles.greeting}>Halo, selamat datang</Text>
      <Text style={styles.appTitle}>Catatan Keuangan</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo saat ini</Text>
        <Text style={styles.balanceValue}>{formatRupiah(summary.balance)}</Text>
      </View>

      <View style={styles.summaryRow}>
        {/* LOOP dengan map(): jangan lupa key yang unik */}
        {summaryItems.map((s) => (
          <View key={s.id} style={styles.summaryBox}>
            <Text style={styles.summaryLabel}>{s.label}</Text>
            <Text style={[styles.summaryValue, { color: s.color }]}>
              {formatRupiah(s.value)}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Transaksi Terakhir</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* FlatList: data, keyExtractor, renderItem */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderTransactionCard(item)}
        ListHeaderComponent={header}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}