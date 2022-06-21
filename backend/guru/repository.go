package guru

import "database/sql"

type Repository interface {
	FindGuruByUsername(username string) (Guru, error)
	InsertRegisterGuru(username string, password string, email string, namaLengkap string, gender string, usia int64, alamat string, noTelp int64, tarif int64, noRek string, idMapel int64, idKelas int64) (Guru, error)
}

type repository struct {
	db *sql.DB
}

func NewRepository(db *sql.DB) *repository {
	return &repository{db}
}

// func find guru by username - login guru
func (r *repository) FindGuruByUsername(username string) (Guru, error) {
	// inisiasi model user guru
	var guru Guru

	// query find guru by username
	sql := `
		SELECT 
			guru.*,
			mapel.mapel,
			kelas.kelas,
			role.role
		FROM 
			guru
		INNER JOIN 
			role ON role.id_role = guru.id_role
		INNER JOIN
			mapel ON mapel.id_mapel = guru.id_mapel
		INNER JOIN
			kelas ON kelas.id_kelas = guru.id_kelas
		WHERE
			guru.username = ?
	;`

	// exec query
	data := r.db.QueryRow(sql, username)

	// data yang akan di tampilkan
	err := data.Scan(
		&guru.Id_guru,
		&guru.Username,
		&guru.Password,
		&guru.Nama_lengkap,
		&guru.Gender,
		&guru.Usia,
		&guru.Alamat,
		&guru.Email,
		&guru.No_tlp,
		&guru.Tarif,
		&guru.No_rek,
		&guru.Id_mapel,
		&guru.Id_kelas,
		&guru.Id_role,
		&guru.Mapel,
		&guru.Kelas,
		&guru.Role,
	)
	if err != nil {
		return guru, err
	}

	return guru, nil
}

// func insert siswa - register siswa
func (r *repository) InsertRegisterGuru(username string, password string, email string, namaLengkap string, gender string, usia int64, alamat string, noTelp int64, tarif int64, noRek string, idMapel int64, idKelas int64) (Guru, error) {
	var guru Guru
	// query insert user
	sql := `
		INSERT INTO guru (username, password, email, nama_lengkap, gender, usia, alamat, no_tlp, tarif, no_rek, id_mapel, id_kelas, id_role)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
	;`

	// exec query
	_, err := r.db.Exec(sql, username, password, email, namaLengkap, gender, usia, alamat, noTelp, tarif, noRek, idMapel, idKelas)
	if err != nil {
		return guru, err
	}

	return guru, nil
}
