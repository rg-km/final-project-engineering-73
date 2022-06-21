package transaksi

type Service interface {
	InputTransaksi(inputTrans InputTransaksi) error
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

// func input transaksi
func (s *service) InputTransaksi(inputTrans InputTransaksi) error {
	err := s.repository.SaveTransaksi(inputTrans)

	if err != nil {
		// return errors.New("gagal menyimpan data")
		return err
	}

	return nil
}
