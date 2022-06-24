package guru

type guruFormat struct {
	Id_guru      int    `json:"id_guru"`
	Username     string `json:"username"`
	Password     string `json:"password"`
	Nama_lengkap string `json:"nama_lengkap"`
	Gender       string `json:"gender"`
	Usia         int    `json:"usia"`
	Alamat       string `json:"alamat"`
	Email        string `json:"email"`
	No_tlp       int    `json:"no_tlp"`
	Tarif        int    `json:"tarif"`
	No_rek       string `json:"no_rek"`
	Id_mapel     int    `json:"id_mapel"`
	Id_kelas     int    `json:"id_kelas"`
	Id_role      int    `json:"id_role"`
	Mapel        string `json:"mapel"`
	Kelas        string `json:"kelas"`
	Role         string `json:"role"`
}

func FormatGuru(input Guru) guruFormat {
	return guruFormat{
		Id_guru:      input.Id_guru,
		Username:     input.Username,
		Password:     input.Password,
		Nama_lengkap: input.Nama_lengkap,
		Gender:       input.Gender,
		Usia:         input.Usia,
		Alamat:       input.Alamat,
		Email:        input.Email,
		No_tlp:       input.No_tlp,
		Tarif:        input.Tarif,
		No_rek:       input.No_rek,
		Id_mapel:     input.Id_mapel,
		Id_kelas:     input.Id_kelas,
		Id_role:      input.Id_role,
		Mapel:        input.Mapel,
		Kelas:        input.Kelas,
		Role:         input.Role,
	}
}

type FormatFindGuru struct {
	Id_guru      int    `json:"id_guru"`
	Username     string `json:"username"`
	Nama_lengkap string `json:"nama_lengkap"`
	Gender       string `json:"gender"`
	Usia         int    `json:"usia"`
	Alamat       string `json:"alamat"`
	Email        string `json:"email"`
	No_tlp       int    `json:"no_tlp"`
	Tarif        int    `json:"tarif"`
	No_rek       string `json:"no_rek"`
	Mapel        string `json:"mapel"`
	Kelas        string `json:"kelas"`
}

func FindGuruFormat(input Guru) FormatFindGuru {
	return FormatFindGuru{
		Id_guru:      input.Id_guru,
		Username:     input.Username,
		Nama_lengkap: input.Nama_lengkap,
		Gender:       input.Gender,
		Usia:         input.Usia,
		Alamat:       input.Alamat,
		Email:        input.Email,
		No_tlp:       input.No_tlp,
		Tarif:        input.Tarif,
		No_rek:       input.No_rek,
		Mapel:        input.Mapel,
		Kelas:        input.Kelas,
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

type FindSiswaFormat struct {
	Id_siswa int    `json:"id_siswa"`
	Username string `json:"username"`
	// Password     string `json:"password"`
	Nama_lengkap string `json:"nama_lengkap"`
	Gender       string `json:"gender"`
	Usia         int    `json:"usia"`
	Alamat       string `json:"alamat"`
	Email        string `json:"email"`
	No_tlp       int    `json:"no_tlp"`
	// Id_role      int    `json:"id_role"`
}

func FormatFindSiswa(input FindSiswa) FindSiswaFormat {
	return FindSiswaFormat{
		Id_siswa: input.Id_siswa,
		Username: input.Username,
		// Password:     input.Password,
		Nama_lengkap: input.Nama_lengkap,
		Gender:       input.Gender,
		Usia:         input.Usia,
		Alamat:       input.Alamat,
		Email:        input.Email,
		No_tlp:       input.No_tlp,
		// Id_role:      input.Id_role,
	}
}
