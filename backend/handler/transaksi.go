package handler

import (
	"net/http"

	"final-project-engineering-73/backend/helper"
	"final-project-engineering-73/backend/transaksi"

	"github.com/gin-gonic/gin"
)

type handlerTransaksi struct {
	service transaksi.Service
}

func NewHandlerTransaksi(service transaksi.Service) *handlerTransaksi {
	return &handlerTransaksi{service}
}

// func handler untuk daftar
func (h *handlerTransaksi) InputTransaksi(c *gin.Context) {
	// inisiasi input transaksi
	var inputTrans transaksi.InputTransaksi

	// binding
	err := c.ShouldBindJSON(&inputTrans)
	if err != nil {
		// ambil error binding
		myErr := helper.ErrorBinding(err)
		respons := helper.ResponsAPI("Gagal binding", "Gagal", http.StatusBadRequest, myErr)
		c.JSON(http.StatusBadRequest, respons)
		return
	}

	// func input transaksi
	err = h.service.InputTransaksi(inputTrans)
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}
		respons := helper.ResponsAPI("Gagal input transaksi", "Gagal", http.StatusBadRequest, myErr)
		c.JSON(http.StatusBadRequest, respons)
		return
	}

	// respon sukses
	message := gin.H{
		"message": "Berhasil input transaksi",
	}

	respons := helper.ResponsAPI("Berhasil input transaksi", "Berhasil", http.StatusOK, message)
	c.JSON(http.StatusOK, respons)
}
