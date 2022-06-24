package siswa

// struct siswa, kumpulan data dari tabel siswa
type Siswa struct {
	Id_siswa     int
	Username     string
	Password     string
	Nama_lengkap string
	Gender       string
	Usia         int
	Alamat       string
	Email        string
	No_tlp       int
	Id_role      int
	Role         string
}

type TransaksiSiswa struct {
	Id_transaksi     int
	Id_guru          int
	Id_siswa         int
	Status           string
	Tgl              string
	Bukti_pembayaran string
	Nama_guru        string
	Nama_siswa       string
}
