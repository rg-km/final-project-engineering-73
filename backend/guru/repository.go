package guru

import "database/sql"

type Repository interface {
	FindGuruByUsername(username string) (Guru, error)
	FindGuruByMapel(id_mapel int) ([]Guru, error)
	FindGuruByKelas(id_kelas int) ([]Guru, error)
	FindGuruByIdGuru(id_guru int) (Guru, error)
	FindGuruForSiswa(id_guru int) (Guru, error)
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

// func find guru by mapel - guru mapel
func (r *repository) FindGuruByMapel(id_mapel int) ([]Guru, error) {
	// inisiasi model user guru
	gurus := []Guru{}

	// query find guru by mapel
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
			guru.id_mapel = ?
	;`

	// exec query
	data, err := r.db.Query(sql, id_mapel)
	if err != nil {
		return nil, err
	}

	for data.Next() {
		var guru Guru
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
			return nil, err
		}
		gurus = append(gurus, guru)
	}

	return gurus, nil
}

// func find guru by kelas - guru kelas
func (r *repository) FindGuruByKelas(id_kelas int) ([]Guru, error) {
	// inisiasi model user guru
	gurus := []Guru{}

	// query find guru by kelas
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
			guru.id_kelas = ?
	;`

	// exec query
	data, err := r.db.Query(sql, id_kelas)
	if err != nil {
		return nil, err
	}

	for data.Next() {
		var guru Guru
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
			return nil, err
		}
		gurus = append(gurus, guru)
	}

	return gurus, nil
}

// func find guru by id_guru - show guru profile
func (r *repository) FindGuruByIdGuru(id_guru int) (Guru, error) {
	// inisiasi model user guru
	var guru Guru

	// query find guru by id_guru
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
			guru.id_guru = ?
	;`

	// exec query
	data := r.db.QueryRow(sql, id_guru)

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

// func find guru for siswa
func (r *repository) FindGuruForSiswa(id_guru int) (Guru, error) {
	// inisiasi model user guru
	var guru Guru

	// query find guru for siswa
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
			guru.id_guru = ?
	;`

	// exec query
	data := r.db.QueryRow(sql, id_guru)

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
