package guru

import "errors"

type Service interface {
	LoginGuru(input InputLogin) (Guru, error)
	GetGuruByIdMapel(id_mapel int) ([]Guru, error)
	GetGuruByIdKelas(id_kelas int) ([]Guru, error)
	GetProfileGuru(id_guru int) (Guru, error)
	GetGuruForSiswa(id_guru int) (Guru, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

// func login guru
func (s *service) LoginGuru(input InputLogin) (Guru, error) {
	// ambil username
	username := input.Username

	// panggil function FindGuruByUsername dari respository
	guru, err := s.repository.FindGuruByUsername(username)
	if err != nil {
		return guru, errors.New("username tidak terdaftar")
		// return guru, err
	}

	return guru, nil
}

// func get guru by id mapel
func (s *service) GetGuruByIdMapel(id_mapel int) ([]Guru, error) {
	// panggil function FindGuruByMapel dari respository
	guru, err := s.repository.FindGuruByMapel(id_mapel)
	if err != nil {
		return guru, errors.New("guru tidak terdaftar")
		// return guru, err
	}

	return guru, nil
}

// func get guru by id kelas
func (s *service) GetGuruByIdKelas(id_kelas int) ([]Guru, error) {
	// panggil function FindGuruByKelas dari respository
	guru, err := s.repository.FindGuruByMapel(id_kelas)
	if err != nil {
		return guru, errors.New("guru tidak terdaftar")
		// return guru, err
	}

	return guru, nil
}

// func get guru by id guru
func (s *service) GetProfileGuru(id_guru int) (Guru, error) {
	// panggil function FindGuruByGuru dari respository
	guru, err := s.repository.FindGuruByIdGuru(id_guru)
	if err != nil {
		return guru, errors.New("guru tidak terdaftar")
		// return guru, err
	}

	return guru, nil
}

// func get guru by id guru
func (s *service) GetGuruForSiswa(id_guru int) (Guru, error) {
	// panggil function FindGuruByGuru dari respository
	guru, err := s.repository.FindGuruForSiswa(id_guru)
	if err != nil {
		return guru, errors.New("guru tidak terdaftar")
		// return guru, err
	}

	return guru, nil
}
