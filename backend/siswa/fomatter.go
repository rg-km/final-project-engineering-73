package siswa

type siswaFormat struct {
	Id_siswa     int    `json:"id_siswa"`
	Username     string `json:"username"`
	Password     string `json:"password"`
	Nama_lengkap string `json:"nama_lengkap"`
	Gender       string `json:"gender"`
	Usia         int    `json:"usia"`
	Alamat       string `json:"alamat"`
	Email        string `json:"email"`
	No_tlp       int    `json:"no_tlp"`
	Id_role      int    `json:"id_role"`
	Role         string `json:"role"`
}

func FormatSiswa(input Siswa) siswaFormat {
	return siswaFormat{
		Id_siswa:     input.Id_siswa,
		Username:     input.Username,
		Password:     input.Password,
		Nama_lengkap: input.Nama_lengkap,
		Gender:       input.Gender,
		Usia:         input.Usia,
		Alamat:       input.Alamat,
		Email:        input.Email,
		No_tlp:       input.No_tlp,
		Id_role:      input.Id_role,
		Role:         input.Role,
	}
}

type TransaksiSiswaFormat struct {
	Id_transaksi     int    `json:"id_transaksi"`
	Id_guru          int    `json:"id_guru"`
	Id_siswa         int    `json:"id_siswa"`
	Status           string `json:"status"`
	Tgl              string `json:"tgl"`
	Bukti_pembayaran string `json:"bukti_pembayaran"`
	Nama_guru        string `json:"nama_guru"`
	Nama_siswa       string `json:"nama_siswa"`
}

func FormatTransaksiSiswa(input TransaksiSiswa) TransaksiSiswaFormat {
	return TransaksiSiswaFormat{
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
