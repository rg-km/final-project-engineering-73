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

	// CORS
	r.Use(CorsMiddleware())

	// route login
	r.POST("/api/login/siswa", handlerSiswa.LoginSiswa)
	r.POST("/api/login/guru", handlerGuru.LoginGuru)
	// route register
	// r.POST("/api/register/siswa", handlerSiswa.RegisterSiswa)

	// route group guru
	guru := r.Group("/api/guru")
	{
		// route dashboard guru, menampilkan semua transaksi dari siswa
		guru.GET("dashboard/:id_guru", handlerGuru.GetAllSiswaTransaksi)
		// route menampilkan profil guru
		guru.GET("/profile/:id_guru", handlerGuru.GetProfileGuru)
		// route menampilkan profil user siswa yang melakukan transaksi
		guru.GET("/dataTransaksi/siswa/profile/:id_siswa", handlerGuru.GetProfileSiswa)
		// route edit profil guru
		guru.PUT("/profile/:id_guru", handlerGuru.UpdateGuruProfile)
	}

	// route group siswa
	siswa := r.Group("/api/siswa")
	{
		// route dashboard siswa, menampilkan semua transaksi
		siswa.GET("/dashboard/:id_siswa", handlerSiswa.GetAllSiswaTransaksi)
		// route siswa melakukan transaksi
		siswa.POST("/transaksi", handlerTransaksi.InputTransaksi)
		// route menampikan guru sesuai id mapel & id kelas
		siswa.GET("/guru/mapel/:id_mapel", handlerGuru.GetGuruByIdMapel)
		siswa.GET("/guru/kelas/:id_kelas", handlerGuru.GetGuruByIdKelas)
		// route menampilkan profil guru untuk siswa
		siswa.GET("/guru/:id_guru", handlerGuru.GetGuruForSiswa)
		// route  menampilkan semua kategori mapel
		siswa.GET("/kategori/mapel", handlerKategori.GetAllKategoriMapel)
		// route menampilkan semua kategori kelas
		siswa.GET("/kategori/kelas", handlerKategori.GetAllKategoriKelas)

	}

	r.Run(":8080")
}

// CORS
func CorsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "*")
		c.Writer.Header().Set("Access-Control-Allow-Method", "*")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(200)
			return
		}

		c.Next()
	}
}
