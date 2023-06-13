package com.example.cardapio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.cardapio.food.Food;

public interface FoodRepository extends JpaRepository<Food, Long> {

}
