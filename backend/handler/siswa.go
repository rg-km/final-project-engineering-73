package handler

import (
	"net/http"

	"final-project-engineering-73/backend/helper"
	"final-project-engineering-73/backend/siswa"

	"github.com/gin-gonic/gin"
)

type handlerSiswa struct {
	service siswa.Service
}

func NewHandlerSiswa(service siswa.Service) *handlerSiswa {
	return &handlerSiswa{service}
}

// func handler untuk login
func (h *handlerSiswa) LoginSiswa(c *gin.Context) {
	// inisiasi input login siswa
	var input siswa.InputLogin

	err := c.ShouldBindJSON(&input)
	if err != nil {
		// ambil error binding
		myErr := helper.ErrorBinding(err)

		// respons API
		respons := helper.ResponsAPI("Gagal binding", "Gagal", http.StatusBadRequest, myErr)
		c.JSON(http.StatusBadRequest, respons)
		return
	}

	newSiswa, err := h.service.LoginSiswa(input)
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}

		// template respons
		respons := helper.ResponsAPI("Login Gagal", "Gagal!", http.StatusBadRequest, myErr)
		c.JSON(http.StatusBadRequest, respons)
		return
	}

	data := siswa.FormatSiswa(newSiswa)

	// template respons
	respons := helper.ResponsAPI("Sukses Login", "Sukses!", http.StatusOK, data)

	c.JSON(http.StatusOK, respons)
}
