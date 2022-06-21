package transaksi

type transaksiFormat struct {
	Id_transaksi     int    `json:"id_transaksi"`
	Id_guru          int    `json:"id_guru"`
	Id_siswa         int    `json:"id_siswa"`
	Status           string `json:"status"`
	Tgl              string `json:"tgl"`
	Bukti_pembayaran string `json:"bukti_pembayaran"`
	Nama_guru        string `json:"nama_lengkap"`
	Nama_siswa       string `json:"nama_lengkap"`
}

func FormatTransaksi(input Transaksi) transaksiFormat {
	return transaksiFormat{
		Id_transaksi:     input.Id_transaksi,
		Id_guru:          input.Id_guru,
		Id_siswa:         input.Id_siswa,
		Status:           input.Status,
		Tgl:              input.Tgl,
		Bukti_pembayaran: input.Bukti_pembayaran,
		Nama_guru:        input.Nama_guru,
		Nama_siswa:       input.Nama_siswa,
	}
}
