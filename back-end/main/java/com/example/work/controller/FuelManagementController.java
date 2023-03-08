package com.example.work.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.work.entity.FuelManagement;
import com.example.work.service.FuelManagementService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/fuel")
public class FuelManagementController {

    @Autowired
    private FuelManagementService fuelManagementService;

    @GetMapping
    public List<FuelManagement> getAllFuelEntries() {
        return fuelManagementService.getAllFuelEntries();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FuelManagement> getFuelEntryById(@PathVariable Long id) {
        FuelManagement fuelEntry = fuelManagementService.getFuelEntryById(id);
        if (fuelEntry != null) {
            return ResponseEntity.ok().body(fuelEntry);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public FuelManagement createFuelEntry(@RequestBody FuelManagement fuelEntry) {
        return fuelManagementService.createFuelEntry(fuelEntry);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FuelManagement> updateFuelEntry(
            @PathVariable Long id, @RequestBody FuelManagement fuelEntry) {
        FuelManagement updatedFuelEntry = fuelManagementService.updateFuelEntry(id, fuelEntry);
        if (updatedFuelEntry != null) {
            return ResponseEntity.ok().body(updatedFuelEntry);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFuelEntry(@PathVariable Long id) {
        boolean deleted = fuelManagementService.deleteFuelEntry(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
