package models

type Contract struct {
	Address string `json:"address" bson:"address"`
	Code    string `json:"code" bson:"code"`
}
