package transaksi

type Transaksi struct {
	Id_transaksi     int
	Id_guru          int
	Id_siswa         int
	Status           string
	Tgl              string
	Bukti_pembayaran string
	Nama_guru        string
	Nama_siswa       string
}
