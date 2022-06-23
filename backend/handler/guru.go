package handler

import (
	"net/http"

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
