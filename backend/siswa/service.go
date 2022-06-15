package siswa

import "errors"

type Service interface {
	LoginSiswa(input InputLogin) (Siswa, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

// func login siswa
func (s *service) LoginSiswa(input InputLogin) (Siswa, error) {
	// ambil email dan password
	username := input.Username

	// panggil function FindSiswaByUsername dari respository
	siswa, err := s.repository.FindSiswaByUsername(username)
	if err != nil {
		return siswa, errors.New("username tidak terdaftar")
	}

	return siswa, nil
}

// func register siswa
