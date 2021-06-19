package com.example.ProductApplication.repositary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.ProductApplication.models.ProductDetails;

@Repository
public interface ProductRepository extends JpaRepository<ProductDetails, Integer> {
	
	  @Query("select p from ProductDetails p where p.userEmail=?1")
	  List<ProductDetails> findByUserEmail(String userEmail);

	  @Query("select p from ProductDetails p where p.product=?1 and p.userEmail=?2")
	ProductDetails findByUniqueProduct(String product, String userEmail);

	  @Query("select p from ProductDetails p where p.product=?1 and p.userEmail=?2")
	boolean deleteByProductNameAndUserEmail(String productName, String userEmail);

}
