var mongoose = require("mongoose");

var customerSchema = new mongoose.Schema({
	Id: String,
	Customer_name: String,
	Company_name: String,
	Product_name: String,
	Product_code: String,
	Order_quantity: String,
	Orders_completed: String,
	Pending_orders: String,
	Qc_by: String,
	Created_by: String,
	Updated_by: String,
	Updated_on: String,
	Updated_date: String,
	Created_on: String,
	Created_date: String,
	Value_per_unit: String,
	Order_value: String,
	Pending_order_value: String
});
