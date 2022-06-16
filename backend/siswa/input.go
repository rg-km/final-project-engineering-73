package siswa

// struct input login siswa
type InputLogin struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// struct input register siswa
type InputRegister struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
}
