package com.example.ProductApplication.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ProductApplication.exception.ProductAlreadyExistsException;
import com.example.ProductApplication.exception.ProductNotFoundException;
import com.example.ProductApplication.models.ProductDetails;
import com.example.ProductApplication.repositary.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository productRepository;

	@Override
	public List<ProductDetails> productList(String userEmail) throws ProductNotFoundException {
		List<ProductDetails> productlist = productRepository.findByUserEmail(userEmail);

		if (productlist == null) {
			new ProductNotFoundException("Product Not Found");
		}
		return productlist;

	}

	@Override
	public ProductDetails addproduct(ProductDetails product) throws ProductAlreadyExistsException {
		final ProductDetails object = productRepository.findByUniqueProduct(product.getProduct(),
				product.getUserEmail());

		ProductDetails newproduct = null;
		if (object != null) {

			throw new ProductAlreadyExistsException("Could Not Save Product,Product Alreday Exists");
		} else {

			newproduct = productRepository.save(product);
		}
		return newproduct;
	}

	@Override
	public ProductDetails updateProduct(ProductDetails product) throws ProductNotFoundException {
		final ProductDetails object = productRepository.findByUniqueProduct(product.getProduct(),
				product.getUserEmail());

		ProductDetails updateproduct = null;
		if (object == null) {

			throw new ProductNotFoundException("Product Not Found");
		} else {
			object.setPrice(product.getPrice());
			object.setQuantity(product.getQuantity());
			updateproduct = productRepository.save(object);

		}
		return updateproduct;

	}

	@Override
	public boolean deleteProduct(int productId, String userEmail) throws ProductNotFoundException {

		Optional<ProductDetails> pd = productRepository.findById(productId);
		
		System.out.println("Product Object =====> "+pd);
		
		if (pd.isEmpty()) {
			throw new ProductNotFoundException("Not found product ");
		}
		if(pd.get().getUserEmail().equals(userEmail)) {
		productRepository.deleteById(productId);
		}else {
			throw new ProductNotFoundException("Not found product ");
		}
		return true;

	}

	@Override
	public List<ProductDetails> getUserProductList(String userEmail) throws ProductNotFoundException {
		List<ProductDetails> pd = productRepository.findByUserEmail(userEmail);
		if(pd==null) {
			 throw new ProductNotFoundException("Product Not Found");
		}
		return pd;
		
	}

	@Override
	public List<ProductDetails> getProductList() throws ProductNotFoundException {
		List<ProductDetails> pd = productRepository.findAll();
		if(pd==null) {
			throw new ProductNotFoundException("There is no product");
		}
		return pd;
	}

}
