package main

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	// bikin koneksi ke database dan migrasi database
	_, err := sql.Open("sqlite3", "backend/database/guruku.db")
	if err != nil {
		panic(err)
	}

	fmt.Println("Sukses")
}
