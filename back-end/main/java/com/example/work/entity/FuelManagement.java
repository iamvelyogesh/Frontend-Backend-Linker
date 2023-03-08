package com.example.work.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "fuel_management")
public class FuelManagement {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "vehicle_name")
    private String vehicleName;
    
    @Column(name = "fuel_type")
    private String fuelType;
    
    @Column(name = "fuel_consumption")
    private String fuelConsumption;
    
    @Column(name = "fuel_price")
    private String fuelPrice;
    
    @Column(name = "fuel_amount")
    private String fuelAmount;
    
    @Column(name = "date")
    private String dateee;

	
    public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getVehicleName() {
		return vehicleName;
	}


	public void setVehicleName(String vehicleName) {
		this.vehicleName = vehicleName;
	}


	public String getFuelType() {
		return fuelType;
	}


	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}


	public String getFuelConsumption() {
		return fuelConsumption;
	}


	public void setFuelConsumption(String fuelConsumption) {
		this.fuelConsumption = fuelConsumption;
	}


	public String getFuelPrice() {
		return fuelPrice;
	}


	public void setFuelPrice(String fuelPrice) {
		this.fuelPrice = fuelPrice;
	}


	public String getFuelAmount() {
		return fuelAmount;
	}


	public void setFuelAmount(String fuelAmount) {
		this.fuelAmount = fuelAmount;
	}


	public String getDateee() {
		return dateee;
	}


	public void setDateee(String dateee) {
		this.dateee = dateee;
	}

	

	public FuelManagement(Long id, String vehicleName, String fuelType, String fuelConsumption, String fuelPrice,
			String fuelAmount, String dateee) {
		super();
		this.id = id;
		this.vehicleName = vehicleName;
		this.fuelType = fuelType;
		this.fuelConsumption = fuelConsumption;
		this.fuelPrice = fuelPrice;
		this.fuelAmount = fuelAmount;
		this.dateee = dateee;
	}


	public FuelManagement()
    {
    	
    }
}
