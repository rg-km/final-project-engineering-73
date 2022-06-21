package guru

// struct input login guru
type InputLogin struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type InputRegister struct {
	Username    string `json:"username"`
	Password    string `json:"password"`
	Email       string `json:"email"`
	NamaLengkap string `json:"nama_lengkap"`
	Gender      string `json:"gender"`
	Usia        int64  `json:"usia"`
	Alamat      string `json:"alamat"`
	NoTelp      int64  `json:"no_telpon"`
	Tarif       int64  `json:"tarif"`
	No_rek      string `json:"no_rek"`
	Id_mapel    int64  `json:"id_mapel"`
	Id_kelas    int64  `json:"id_kelas"`
}
