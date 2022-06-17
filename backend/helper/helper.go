package helper

import (
	"fmt"

	"github.com/go-playground/validator/v10"
)

// bikin struct untuk template
type template struct {
	Meta meta        `json:"meta"`
	Data interface{} `json:"data"`
}

// bikin meta
type meta struct {
	Message string `json:"message"`
	Code    int    `json:"code"`
	Status  string `json:"status"`
}

// function respons api
func ResponsAPI(message, status string, code int, data interface{}) template {
	myMeta := meta{
		Message: message,
		Code:    code,
		Status:  status,
	}

	return template{
		Meta: myMeta,
		Data: data,
	}
}

// function error binding format
func ErrorBinding(err error) []string {
	var myErr []string
	for _, e := range err.(validator.ValidationErrors) {
		errorMessage := fmt.Sprintf("error on filed: %s, condition: %s", e.Field(), e.ActualTag())
		myErr = append(myErr, errorMessage)
	}

	return myErr
}
