package com.example.ProductApplication.service;

import java.util.List;

import com.example.ProductApplication.exception.ProductAlreadyExistsException;
import com.example.ProductApplication.exception.ProductNotFoundException;
import com.example.ProductApplication.models.ProductDetails;





public interface ProductService {

	
	ProductDetails addproduct(ProductDetails product) throws ProductAlreadyExistsException;
	ProductDetails updateProduct(ProductDetails product) throws ProductNotFoundException;
	 boolean deleteProduct(int productId,String userEmail) throws ProductNotFoundException;
	List<ProductDetails> productList(String userEmail) throws ProductNotFoundException;
	List<ProductDetails> getUserProductList(String userEmail) throws ProductNotFoundException;
	List<ProductDetails> getProductList() throws ProductNotFoundException;
}
