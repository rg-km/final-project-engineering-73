package main

import (
	"database/sql"
	"final-project-engineering-73/backend/guru"
	"final-project-engineering-73/backend/handler"
	"final-project-engineering-73/backend/kategori"
	"final-project-engineering-73/backend/siswa"
	"final-project-engineering-73/backend/transaksi"
	"log"

	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
)

func main() {
	// membuat koneksi ke db
	db, err := sql.Open("sqlite3", "./database/guruku.db")
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	// repo Siswa
	repoSiswa := siswa.NewRepository(db)
	// service Siswa
	serviceSiswa := siswa.NewService(repoSiswa)
	// handler Siswa
	handlerSiswa := handler.NewHandlerSiswa(serviceSiswa)

	// repo Guru
	repoGuru := guru.NewRepository(db)
	// service Guru
	serviceGuru := guru.NewService(repoGuru)
	// handler Guru
	handlerGuru := handler.NewHandlerGuru(serviceGuru)

	// repo Guru
	repoTransaksi := transaksi.NewRepository(db)
	// service Guru
	serviceTransaksi := transaksi.NewService(repoTransaksi)
	// handler Guru
	handlerTransaksi := handler.NewHandlerTransaksi(serviceTransaksi)

	// repo Kategori
	repoKategori := kategori.NewRepository(db)
	// service Kategori
	serviceKategori := kategori.NewService(repoKategori)
	// handler Kategori
	handlerKategori := handler.NewHandlerKategori(serviceKategori)

	// deklarasi http server
	r := gin.Default()

	// route login
	r.POST("/api/login/siswa", handlerSiswa.LoginSiswa)
	r.POST("/api/login/guru", handlerGuru.LoginGuru)
	// route register
	r.POST("/api/register/siswa", handlerSiswa.RegisterSiswa)

	// route group guru
	guru := r.Group("/api/guru")
	{
		// route show guru's profile
		guru.GET("/profile/:id_guru", handlerGuru.GetProfileGuru)
	}

	// route group siswa
	siswa := r.Group("/api/siswa")
	{
		// route get guru by id mapel & id kelas
		siswa.GET("/guru/mapel/:id_mapel", handlerGuru.GetGuruByIdMapel)
		siswa.GET("/guru/kelas/:id_kelas", handlerGuru.GetGuruByIdKelas)
		// route show guru's profile for siswa
		siswa.GET("/guru/:id_guru", handlerGuru.GetGuruForSiswa)

		// route siswa transaction
		siswa.POST("/transaksi", handlerTransaksi.InputTransaksi)

		// route show all kategori mapel
		siswa.GET("/kategori/mapel", handlerKategori.GetAllKategoriMapel)
		// route show all kategori kelas
		siswa.GET("/kategori/kelas", handlerKategori.GetAllKategoriKelas)
	}

	r.Run(":8080")
}
