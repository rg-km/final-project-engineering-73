package handler

import (
	"fmt"
	"net/http"

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
		myErr := gin.H{
			"error": err.Error(),
		}

		fmt.Errorf("Error: %v", err)
		c.JSON(http.StatusBadRequest, myErr)
		return
	}

	newSiswa, err := h.service.LoginSiswa(input)
	if err != nil {
		myErr := gin.H{
			"error": err.Error(),
		}

		// fmt.Errorf("Error: %v", err)
		c.JSON(http.StatusBadRequest, myErr)
		return
	}

	data := siswa.FormatSiswa(newSiswa)

	c.JSON(http.StatusOK, data)
}
