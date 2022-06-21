package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// func untuk migrasi ke db
func main() {
	db, err := sql.Open("sqlite3", "backend/database/guruku.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS role (
			id_role INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			role VARCHAR(50)
		);

		CREATE TABLE IF NOT EXISTS kelas (
			id_kelas INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			kelas VARCHAR(50)
		);

		CREATE TABLE IF NOT EXISTS mapel (
			id_mapel INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			mapel VARCHAR(50)
		);

		CREATE TABLE IF NOT EXISTS siswa (
			id_siswa INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			username VARCHAR(50),
			password TEXT,
			nama_lengkap VARCHAR(50),
			gender VARCHAR(50),
			usia INT,
			alamat TEXT,
			email VARCHAR(50),
			no_tlp INT,
			id_role INT,
			FOREIGN KEY(id_role) REFERENCES role(id_role)
		);

		CREATE TABLE IF NOT EXISTS guru (
			id_guru INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			username VARCHAR(50),
			password TEXT,
			nama_lengkap VARCHAR(50),
			gender VARCHAR(50),
			usia INT,
			alamat TEXT,
			email VARCHAR(50),
			no_tlp INT,
			tarif INT,
			no_rek  VARCHAR(50),
			id_mapel INT,
			id_kelas INT,
			id_role INT,
			FOREIGN KEY(id_mapel) REFERENCES mapel(id_mapel),
			FOREIGN KEY(id_kelas) REFERENCES kelas(id_kelas),
			FOREIGN KEY(id_role) REFERENCES role(id_role)
		);

		CREATE TABLE IF NOT EXISTS transaksi (
			id_transaksi INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			id_guru INT,
			id_siswa INT,
			status VARCHAR(50),
			tgl DATE,
			bukti_pembayaran VARCHAR(50),
			FOREIGN KEY(id_guru) REFERENCES guru(id_guru),
			FOREIGN KEY(id_siswa) REFERENCES siswa(id_siswa)
		);

		CREATE TABLE IF NOT EXISTS review (
			id_review INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
			id_guru INT,
			id_siswa INT,
			review VARCHAR(50),
			tgl DATE,
			FOREIGN KEY(id_guru) REFERENCES guru(id_guru),
			FOREIGN KEY(id_siswa) REFERENCES siswa(id_siswa)
		);

		INSERT INTO role
			(role)
		VALUES
			('guru'), ('siswa');

		INSERT INTO kelas
			(kelas)
		VALUES
			('SD'), ('SMP'), ('SMA');
		

		INSERT INTO mapel
			(mapel)
		VALUES
			('Bahasa Indonesia'), ('Bahasa Inggris'), ('IPA'), ('IPS'), ('Matematika'), ('Geografi'), ('Fisika'), ('Kimia');
		
		INSERT INTO siswa
			(username, password, nama_lengkap, gender, usia, alamat, email, no_tlp, id_role)
		VALUES
			('siswa', '1234', 'siswa', 'pria', 17, 'Bandung', 'siswa@gmail.com', 08123454422, 2),
			('john', '1234', 'john dev', 'pria', 17, 'Bandung', 'john@gmail.com', 08123454422, 2);
		
		INSERT INTO guru
			(username, password, nama_lengkap, gender, usia, alamat, email, no_tlp, tarif, no_rek, id_mapel, id_kelas, id_role)
		VALUES
			('guru', '1234', 'guru', 'wanita', 27, 'Ponorogo', 'guru@gmail.com', 0890008998, 40000, '07089138900 BRI a/n Guru', 1, 3, 1),
			('lisa', '1234', 'lisa widyawati', 'wanita', 27, 'Jakarta', 'lisa@gmail.com', 0890008998, 40000, '07089138900 BRI a/n Lisa W', '2', '2', '1');

		INSERT INTO transaksi
			(id_siswa, id_guru, status, tgl, bukti_pembayaran)
		VALUES
			('1', '1', 'mendaftar', '19-06-2022', 'abc'),
			('2', '2', 'selesai', '22-06-2022', 'abc');
		
		INSERT INTO review
			(id_siswa, id_guru, review, tgl)
		VALUES
			('1', '1', 'guru mengajar dengan baik', '19-06-2022'),
			('2', '2', 'guru mengajar dengan baik', '22-06-2022');

	`)

	if err != nil {
		panic(err)

	}
}
