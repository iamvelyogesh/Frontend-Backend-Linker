package com.example.work.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.work.entity.FuelManagement;
import com.example.work.repo.FuelRepository;

@Service
public class FuelManagementService {

    @Autowired
    private FuelRepository fuelManagementRepository;

    public List<FuelManagement> getAllFuelEntries() {
        return fuelManagementRepository.findAll();
    }

    public FuelManagement getFuelEntryById(Long id) {
        Optional<FuelManagement> optionalFuelEntry = fuelManagementRepository.findById(id);
        return optionalFuelEntry.orElse(null);
    }

    public FuelManagement createFuelEntry(FuelManagement fuelEntry) {
        return fuelManagementRepository.save(fuelEntry);
    }

    public FuelManagement updateFuelEntry(Long id, FuelManagement fuelEntry) {
        Optional<FuelManagement> optionalFuelEntry = fuelManagementRepository.findById(id);
        if (optionalFuelEntry.isPresent()) {
            FuelManagement existingFuelEntry = optionalFuelEntry.get();
            existingFuelEntry.setVehicleName(fuelEntry.getVehicleName());
            existingFuelEntry.setFuelType(fuelEntry.getFuelType());
            existingFuelEntry.setFuelConsumption(fuelEntry.getFuelConsumption());
            existingFuelEntry.setFuelPrice(fuelEntry.getFuelPrice());
            existingFuelEntry.setFuelAmount(fuelEntry.getFuelAmount());
            existingFuelEntry.setDateee(fuelEntry.getDateee());
            return fuelManagementRepository.save(existingFuelEntry);
        } else {
            return null;
        }
    }

    public boolean deleteFuelEntry(Long id) {
        Optional<FuelManagement> optionalFuelEntry = fuelManagementRepository.findById(id);
        if (optionalFuelEntry.isPresent()) {
            fuelManagementRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
