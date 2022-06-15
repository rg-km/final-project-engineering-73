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

	// query find user by username
	sql := `
		SELECT * FROM siswa WHERE username = ?
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
	)
	if err != nil {
		return siswa, err
	}

	return siswa, nil
}

// func insert siswa - register siswa
