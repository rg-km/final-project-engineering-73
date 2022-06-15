package main

import (
	"database/sql"
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

	// deklarasi http server
	r := gin.Default()

	// route login
	r.POST("/api/login/siswa", handlerSiswa.LoginSiswa)

	r.Run(":8080")
}
