package com.portfolio.ggg.Interface;

import com.portfolio.ggg.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //traer
    public List<Persona> getPersona();
    //guardar
    public void savePersona (Persona persona);
    //eliminar
    public void deletePersona(Long id);
    //busca
    public Persona findPersona (Long id);
    
}
