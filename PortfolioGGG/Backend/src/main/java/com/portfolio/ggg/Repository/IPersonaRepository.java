package com.portfolio.ggg.Repository;

import com.portfolio.ggg.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository <Persona, Long> {
    
}
