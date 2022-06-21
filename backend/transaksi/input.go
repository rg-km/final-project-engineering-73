package transaksi

type InputTransaksi struct {
	Id_guru          int    `json:"id_guru" binding:"required"`
	Id_siswa         int    `json:"id_siswa" binding:"required"`
	Status           string `json:"status"`
	Tgl              string `json:"tgl"`
	Bukti_pembayaran string `json:"bukti_pembayaran"`
}
