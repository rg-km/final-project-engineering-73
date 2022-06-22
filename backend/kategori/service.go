package kategori

import "errors"

type Service interface {
	GetAllKategoriMapel() ([]KategoriMapel, error)
	GetAllKategoriKelas() ([]KategoriKelas, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

// func get all kategori mapel
func (s *service) GetAllKategoriMapel() ([]KategoriMapel, error) {
	// panggil function FindGuruByGuru dari respository
	guru, err := s.repository.GetKategoriMapel()
	if err != nil {
		return guru, errors.New("kategori tidak terdaftar")
		// return guru, err
	}

	return guru, nil
}

// func get all kategori kelas
func (s *service) GetAllKategoriKelas() ([]KategoriKelas, error) {
	// panggil function FindGuruByGuru dari respository
	guru, err := s.repository.GetKategoriKelas()
	if err != nil {
		return guru, errors.New("kategori tidak terdaftar")
		// return guru, err
	}

	return guru, nil
}
