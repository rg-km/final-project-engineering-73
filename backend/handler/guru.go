package handler

import (
	"net/http"
	"strconv"

	"final-project-engineering-73/backend/guru"
	"final-project-engineering-73/backend/helper"

	"github.com/gin-gonic/gin"
)

type handlerGuru struct {
	service guru.Service
}

func NewHandlerGuru(service guru.Service) *handlerGuru {
	return &handlerGuru{service}
}

// func handler untuk login
func (h *handlerGuru) LoginGuru(c *gin.Context) {
	// inisiasi input login guru
	var input guru.InputLogin

	err := c.ShouldBindJSON(&input)
	if err != nil {
		// ambil error binding
		myErr := helper.ErrorBinding(err)

		// respons API
		respons := helper.ResponsAPI("Gagal binding", "Gagal", http.StatusBadRequest, myErr)
		c.JSON(http.StatusBadRequest, respons)
		return
	}

	newGuru, err := h.service.LoginGuru(input)
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}

		// template respons
		respons := helper.ResponsAPI("Login Gagal", "Gagal!", http.StatusBadRequest, myErr)
		c.JSON(http.StatusBadRequest, respons)
		return
	}

	data := guru.FormatGuru(newGuru)

	// template respons
	respons := helper.ResponsAPI("Sukses Login", "Sukses!", http.StatusOK, data)

	c.JSON(http.StatusOK, respons)
}

// func handler untuk get guru by id mapel
func (h *handlerGuru) GetGuruByIdMapel(c *gin.Context) {
	// inisiasi id_mapel
	id_mapel, err := strconv.Atoi(c.Param("id_mapel"))

	newGuru, err := h.service.GetGuruByIdMapel(id_mapel)
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}

		// template respons
		respons := helper.ResponsAPI("Gagal", "Gagal!", http.StatusBadRequest, myErr)
		c.JSON(http.StatusBadRequest, respons)
		return
	}

	data := guru.FormatGuru(newGuru)

	// template respons
	respons := helper.ResponsAPI("Sukses", "Sukses!", http.StatusOK, data)

	c.JSON(http.StatusOK, respons)
}

// func handler untuk get guru by id kelas
func (h *handlerGuru) GetGuruByIdKelas(c *gin.Context) {
	// inisiasi id_kelas
	id_kelas, err := strconv.Atoi(c.Param("id_kelas"))

	newGuru, err := h.service.GetGuruByIdKelas(id_kelas)
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}

		// template respons
		respons := helper.ResponsAPI("Gagal", "Gagal!", http.StatusBadRequest, myErr)
		c.JSON(http.StatusBadRequest, respons)
		return
	}

	data := guru.FormatGuru(newGuru)

	// template respons
	respons := helper.ResponsAPI("Sukses", "Sukses!", http.StatusOK, data)

	c.JSON(http.StatusOK, respons)
}

// func handler untuk get guru by id kelas
func (h *handlerGuru) GetGuruByIdGuru(c *gin.Context) {
	// inisiasi id_guru
	id_guru, err := strconv.Atoi(c.Param("id_guru"))

	newGuru, err := h.service.GetGuruByIdGuru(id_guru)
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}

		// template respons
		respons := helper.ResponsAPI("Gagal", "Gagal!", http.StatusBadRequest, myErr)
		c.JSON(http.StatusBadRequest, respons)
		return
	}

	data := guru.FormatGuru(newGuru)

	// template respons
	respons := helper.ResponsAPI("Sukses", "Sukses!", http.StatusOK, data)

	c.JSON(http.StatusOK, respons)
}
