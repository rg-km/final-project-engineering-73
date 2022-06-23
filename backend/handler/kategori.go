package handler

import (
	"final-project-engineering-73/backend/helper"
	"final-project-engineering-73/backend/kategori"
	"net/http"

	"github.com/gin-gonic/gin"
)

type handlerKategori struct {
	service kategori.Service
}

func NewHandlerKategori(service kategori.Service) *handlerKategori {
	return &handlerKategori{service}
}

// func handler untuk get all kategori mapel
func (h *handlerKategori) GetAllKategoriMapel(c *gin.Context) {
	mapels, err := h.service.GetAllKategoriMapel()
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}

		// template respons
		respons := helper.ResponsAPI("Gagal", "Gagal!", http.StatusBadRequest, myErr)
		c.JSON(http.StatusBadRequest, respons)
		return
	}

	data := []kategori.KategoriMapelFormat{}
	for i := 0; i < len(mapels); i++ {
		formatRes := kategori.FormatKategoriMapel(mapels[i])
		data = append(data, formatRes)
	}

	// template respons
	respons := helper.ResponsAPI("Sukses", "Sukses!", http.StatusOK, data)

	c.JSON(http.StatusOK, respons)
}

// func handler untuk get all kategori kelas
func (h *handlerKategori) GetAllKategoriKelas(c *gin.Context) {
	kelass, err := h.service.GetAllKategoriKelas()
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}

		// template respons
		respons := helper.ResponsAPI("Gagal", "Gagal!", http.StatusBadRequest, myErr)
		c.JSON(http.StatusBadRequest, respons)
		return
	}

	data := []kategori.KategoriKelasFormat{}
	for i := 0; i < len(kelass); i++ {
		formatRes := kategori.FormatKategoriKelas(kelass[i])
		data = append(data, formatRes)
	}

	// template respons
	respons := helper.ResponsAPI("Sukses", "Sukses!", http.StatusOK, data)

	c.JSON(http.StatusOK, respons)
}
