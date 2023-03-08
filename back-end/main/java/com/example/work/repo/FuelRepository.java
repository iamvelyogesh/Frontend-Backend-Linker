package com.example.work.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.work.entity.FuelManagement;

public interface FuelRepository extends JpaRepository<FuelManagement,Long>{

}
