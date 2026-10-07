// Union type: nilai hanya boleh salah satu dari pilihan ini
export type TransactionType = "income" | "expense";

export type Category =
  | "makan"
  | "transport"
  | "belanja"
  | "tagihan"
  | "gaji"
  | "lainnya";

// Interface: bentuk/struktur sebuah objek transaksi
export interface Transaction {
  readonly id: string; // readonly: tidak bisa diubah setelah dibuat
  title: string;
  amount: number;
  type: TransactionType;
  category: Category;
  date: string; // format: "YYYY-MM-DD"
  note?: string; // tanda "?" artinya opsional
}

export interface Summary {
  totalIncome: number;
  totalExpense: number;
  balance: number;
}
