package siswa

import "errors"

type Service interface {
	LoginSiswa(input InputLogin) (Siswa, error)
	RegisterSiswa(input InputRegister) (Siswa, error)
	GetAllSiswaTransaksi(id_siswa int) ([]TransaksiSiswa, error)
	GetProfileSiswa(id_siswa int) (Siswa, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

// func login siswa
func (s *service) LoginSiswa(input InputLogin) (Siswa, error) {
	// ambil username
	username := input.Username

	// panggil function FindSiswaByUsername dari respository
	siswa, err := s.repository.FindSiswaByUsername(username)
	if err != nil {
		return siswa, errors.New("username tidak terdaftar")
		// return siswa, err
	}

	return siswa, nil
}

// func register siswa
func (s *service) RegisterSiswa(input InputRegister) (Siswa, error) {
	// ambil username, password, email
	username := input.Username
	password := input.Password
	email := input.Email
	namaLengkap := input.NamaLengkap
	gender := input.Gender
	usia := input.Usia
	alamat := input.Alamat
	noTelp := input.NoTelp
	// panggil function RegisterSiswa dari respository
	siswa, err := s.repository.InsertRegisterSiswa(username, password, email, namaLengkap, gender, usia, alamat, noTelp)
	if err != nil {
		// return siswa, errors.New("username sudah terdaftar")
		return siswa, err
	}

	return siswa, nil
}

// func get all siswa transaksi
func (s *service) GetAllSiswaTransaksi(id_siswa int) ([]TransaksiSiswa, error) {
	// panggil function FindTransaksiSiswa dari respository
	transaksi, err := s.repository.FindTransaksiSiswa(id_siswa)
	if err != nil {
		return transaksi, errors.New("transaksi tidak terdaftar")
		// return transaksi, err
	}

	return transaksi, nil
}

// func get siswa by id siswa
func (s *service) GetProfileSiswa(id_siswa int) (Siswa, error) {
	// panggil function FindSiswaBySiswa dari respository
	siswa, err := s.repository.FindSiswaByIdSiswa(id_siswa)
	if err != nil {
		return siswa, errors.New("siswa tidak terdaftar")
		// return siswa, err
	}

	return siswa, nil
}
