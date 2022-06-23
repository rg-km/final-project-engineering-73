package transaksi

import (
	"database/sql"
)

type Repository interface {
	SaveTransaksi(inputTrans InputTransaksi) error
}

type repository struct {
	db *sql.DB
}

func NewRepository(db *sql.DB) *repository {
	return &repository{db}
}

// func insert transaksi
func (r *repository) SaveTransaksi(inputTrans InputTransaksi) error {
	// exec query
	_, err := r.db.Exec(
		`INSERT INTO transaksi (id_guru, id_siswa, status, tgl, bukti_pembayaran)
		VALUES (?, ?, 'mendaftar', ?, 'belum mengupload')`,
		inputTrans.Id_guru, inputTrans.Id_siswa, inputTrans.Status, inputTrans.Tgl, inputTrans.Bukti_pembayaran)

	if err != nil {
		return err
	}

	return nil
}
