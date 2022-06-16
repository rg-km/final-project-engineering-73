package handler

import (
	"fmt"
	"net/http"

	"final-project-engineering-73/backend/guru"

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
		myErr := gin.H{
			"error": err.Error(),
		}

		fmt.Errorf("Error: %v", err)
		c.JSON(http.StatusBadRequest, myErr)
		return
	}

	newGuru, err := h.service.LoginGuru(input)
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}

		c.JSON(http.StatusBadRequest, myErr)
		return
	}

	data := guru.FormatGuru(newGuru)

	c.JSON(http.StatusOK, data)
}
