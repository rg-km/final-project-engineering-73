package main

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	// membuat koneksi ke db
	_, err := sql.Open("sqlite3", "backend/database/guruku.db")
	if err != nil {
		panic(err)
	}

	fmt.Println("Sukses")
}
