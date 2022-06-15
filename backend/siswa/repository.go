package siswa

import "database/sql"

type Repository interface {
	FindSiswaByUsername(username string) (Siswa, error)
}

type repository struct {
	db *sql.DB
}

func NewRepository(db *sql.DB) *repository {
	return &repository{db}
}

// func find siswa by username - login siswa
func (r *repository) FindSiswaByUsername(username string) (Siswa, error) {
	// inisiasi model user
	var siswa Siswa

	sql := `
		SELECT s.*, r.role FROM siswa s, role r WHERE s.id_role = r.id_role AND s.username = ?
	;`

	// exec query
	data := r.db.QueryRow(sql, username)

	// data yang akan di tampilkan
	err := data.Scan(
		&siswa.Id_siswa,
		&siswa.Username,
		&siswa.Password,
		&siswa.Nama_lengkap,
		&siswa.Gender,
		&siswa.Usia,
		&siswa.Alamat,
		&siswa.Email,
		&siswa.No_tlp,
		&siswa.Id_role,
		&siswa.Role,
	)
	if err != nil {
		return siswa, err
	}

	return siswa, nil
}

// func insert siswa - register siswa
