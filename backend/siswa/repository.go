package siswa

import "database/sql"

type Repository interface {
	FindSiswaByUsername(username string) (Siswa, error)
	InsertRegisterSiswa(username string, password string, email string, namaLengkap string, gender string, usia int64, alamat string, noTelp int64) (Siswa, error)
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
func (r *repository) InsertRegisterSiswa(username string, password string, email string, namaLengkap string, gender string, usia int64, alamat string, noTelp int64) (Siswa, error) {
	var siswa Siswa
	// query insert user
	sql := `
		INSERT INTO siswa (username, password, email, nama_lengkap, gender, usia, alamat, no_tlp, id_role)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, 2)
	;`

	// exec query
	_, err := r.db.Exec(sql, username, password, email, namaLengkap, gender, usia, alamat, noTelp)
	if err != nil {
		return siswa, err
	}

	return siswa, nil
}
