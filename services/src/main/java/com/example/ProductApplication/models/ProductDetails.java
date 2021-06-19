package com.example.ProductApplication.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "inventory")
public class ProductDetails {

	    @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private int id;
	    
	    @NotBlank(message = "product can't be empty")
	    private String product;
	    
	    @NotNull(message = "Quantity can't be empty")
	    private int quantity;
	    
	    @NotNull(message = "Price can't be empty")
	    private int price;
	    
	    @NotBlank(message = "UserEmail can't be empty")
	    @Pattern(regexp="^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_]{2,5})\\.([a-zA-Z]{2,5})$",message="Email must Follow Email Pattern")
	    private String userEmail;
	      
	    
	  
		
		
		public ProductDetails() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		
		


		public ProductDetails(int id, String product, int quantity, int price, String userEmail) {
			super();
			this.id = id;
			this.product = product;
			this.quantity = quantity;
			this.price = price;
			this.userEmail = userEmail;
		}





		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getProduct() {
			return product;
		}
		public void setProduct(String product) {
			this.product = product;
		}
		public int getQuantity() {
			return quantity;
		}
		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}
		public int getPrice() {
			return price;
		}
		public void setPrice(int price) {
			this.price = price;
		}





		public String getUserEmail() {
			return userEmail;
		}





		public void setUserEmail(String userEmail) {
			this.userEmail = userEmail;
		}





		@Override
		public String toString() {
			return "ProductDetails [id=" + id + ", product=" + product + ", quantity=" + quantity + ", price=" + price
					+ ", userEmail=" + userEmail + "]";
		}

		
		
		
		
		
	    
	    
}
