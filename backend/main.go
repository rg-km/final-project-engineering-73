package main

import (
	"database/sql"
	"final-project-engineering-73/backend/guru"
	"final-project-engineering-73/backend/handler"
	"final-project-engineering-73/backend/siswa"
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

	// deklarasi http server
	r := gin.Default()

	// route login
	r.POST("/api/login/siswa", handlerSiswa.LoginSiswa)
	r.POST("/api/login/guru", handlerGuru.LoginGuru)
	// route register
	r.POST("/api/register/siswa", handlerSiswa.RegisterSiswa)

	r.Run(":8080")
}
