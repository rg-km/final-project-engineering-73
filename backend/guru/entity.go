package guru

// struct guru
type Guru struct {
	Id_guru      int
	Username     string
	Password     string
	Nama_lengkap string
	Gender       string
	Usia         int
	Alamat       string
	Email        string
	No_tlp       int
	Tarif        int
	No_rek       string
	Id_mapel     int
	Id_kelas     int
	Id_role      int
	Mapel        string
	Kelas        string
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

type FindSiswa struct {
	Id_siswa int
	Username string
	// Password     string
	Nama_lengkap string
	Gender       string
	Usia         int
	Alamat       string
	Email        string
	No_tlp       int
	// Id_role      int
}
