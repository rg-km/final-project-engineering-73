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
	}
}
