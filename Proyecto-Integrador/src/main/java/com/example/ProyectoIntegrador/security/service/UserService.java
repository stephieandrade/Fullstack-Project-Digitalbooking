package com.example.ProyectoIntegrador.security.service;

import com.example.ProyectoIntegrador.model.Usuario;
import com.example.ProyectoIntegrador.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class UserService implements UserDetailsService {


    @Autowired
    private UsuarioRepository usuarioRespository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        // Debemos traer un Usuario basado en un string q recibe
        Usuario usuario = usuarioRespository.findByEmail(s);

        List<GrantedAuthority> roles = new ArrayList<>();
        roles.add(new SimpleGrantedAuthority("ADMIN"));
        // Armamos un User de spring secutiry con nuestros datos del modelo Usuario
        // username, password y roles del usuario que quiere iniciar sesión
        UserDetails userDetail = new User(usuario.getEmail(), usuario.getPassword(), roles);

        return userDetail;
    }
}
