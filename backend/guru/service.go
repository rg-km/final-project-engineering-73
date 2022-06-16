package guru

import "errors"

type Service interface {
	LoginGuru(input InputLogin) (Guru, error)
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
