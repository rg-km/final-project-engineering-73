package kategori

import "database/sql"

type Repository interface {
	GetKategoriMapel() ([]KategoriMapel, error)
	GetKategoriKelas() ([]KategoriKelas, error)
}

type repository struct {
	db *sql.DB
}

func NewRepository(db *sql.DB) *repository {
	return &repository{db}
}

// func get all kategori mapel
func (r *repository) GetKategoriMapel() ([]KategoriMapel, error) {
	mapels := []KategoriMapel{}

	// sql query
	sql := `
		SELECT * FROM mapel
	;`

	data, err := r.db.Query(sql)
	if err != nil {
		return nil, err
	}

	for data.Next() {
		var mapel KategoriMapel
		err := data.Scan(
			&mapel.Id_Mapel,
			&mapel.Mapel,
		)
		if err != nil {
			return nil, err
		}
		mapels = append(mapels, mapel)
	}
	return mapels, nil
}

// func get all kategori kelas
func (r *repository) GetKategoriKelas() ([]KategoriKelas, error) {
	kelass := []KategoriKelas{}

	// sql query
	sql := `
		SELECT * FROM kelas
	;`

	data, err := r.db.Query(sql)
	if err != nil {
		return nil, err
	}

	for data.Next() {
		var kelas KategoriKelas
		err := data.Scan(
			&kelas.Id_Kelas,
			&kelas.Kelas,
		)
		if err != nil {
			return nil, err
		}
		kelass = append(kelass, kelas)
	}
	return kelass, nil
}
