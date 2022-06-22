package kategori

type KategoriMapelFormat struct {
	Id_mapel int    `json:"id_mapel"`
	Mapel    string `json:"mapel"`
}

func FormatKategoriMapel(input KategoriMapel) KategoriMapelFormat {
	return KategoriMapelFormat{
		Id_mapel: input.Id_Mapel,
		Mapel:    input.Mapel,
	}
}

type KategoriKelasFormat struct {
	Id_kelas int    `json:"id_kelas"`
	Kelas    string `json:"kelas"`
}

func FormatKategoriKelas(input KategoriKelas) KategoriKelasFormat {
	return KategoriKelasFormat{
		Id_kelas: input.Id_Kelas,
		Kelas:    input.Kelas,
	}
}
