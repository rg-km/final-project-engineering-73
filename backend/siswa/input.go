package siswa

// struct input login siswa
type InputLogin struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

// struct input register siswa
type InputRegister struct {
	Username    string `json:"username"`
	Password    string `json:"password"`
	Email       string `json:"email"`
	NamaLengkap string `json:"nama_lengkap"`
	Gender      string `json:"gender"`
	Usia        int64  `json:"usia"`
	Alamat      string `json:"alamat"`
	NoTelp      int64  `json:"no_telpon"`
}
