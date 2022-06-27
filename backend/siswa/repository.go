package siswa

import "database/sql"

type Repository interface {
	FindSiswaByUsername(username string) (Siswa, error)
	InsertRegisterSiswa(username string, password string, email string, namaLengkap string, gender string, usia int64, alamat string, noTelp int64) (Siswa, error)
	FindTransaksiSiswa(id_siswa int) ([]TransaksiSiswa, error)
	FindSiswaByIdSiswa(id_siswa int) (Siswa, error)
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

// func mengambil semua data siswa yang melakukan transaksi ke guru
func (r *repository) FindTransaksiSiswa(id_siswa int) ([]TransaksiSiswa, error) {
	// inisiasi mode
	transaksi := []TransaksiSiswa{}

	// query
	sql := `
		SELECT 
			transaksi.*,
			guru.nama_lengkap,
			siswa.nama_lengkap
		FROM
			transaksi
		JOIN
			guru ON guru.id_guru = transaksi.id_guru
		JOIN
			siswa ON siswa.id_siswa = transaksi.id_siswa
		WHERE
			transaksi.id_siswa = ?
	;`

	// exec query
	data, err := r.db.Query(sql, id_siswa)
	if err != nil {
		return nil, err
	}

	for data.Next() {
		var trans TransaksiSiswa
		err := data.Scan(
			&trans.Id_transaksi,
			&trans.Id_guru,
			&trans.Id_siswa,
			&trans.Status,
			&trans.Tgl,
			&trans.Bukti_pembayaran,
			&trans.Nama_guru,
			&trans.Nama_siswa,
		)
		if err != nil {
			return nil, err
		}
		transaksi = append(transaksi, trans)
	}

	return transaksi, nil
}

// func find siswa by id_siswa - show siswa profile
func (r *repository) FindSiswaByIdSiswa(id_siswa int) (Siswa, error) {
	// inisiasi model user siswa
	var siswa Siswa

	// query find siswa by id_siswa
	sql := `
		SELECT s.*, r.role FROM siswa s, role r WHERE s.id_role = r.id_role AND s.id_siswa = ?
	;`

	// exec query
	data := r.db.QueryRow(sql, id_siswa)

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
