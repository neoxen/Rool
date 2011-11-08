package com.penho.java.rool.web;

import com.penho.java.rool.SysUser;
import org.springframework.dao.DataAccessException;
import org.springframework.roo.addon.web.mvc.controller.RooWebScaffold;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RooWebScaffold(path = "sysusers", formBackingObject = SysUser.class)
@RequestMapping("/sysusers")
@Controller
public class SysUserController implements UserDetailsService{
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException, DataAccessException {
        List users = SysUser.findSysUsersByUserNameEquals(username).getResultList();
        if (users == null || users.isEmpty()) {
            throw new UsernameNotFoundException("user '" + username + "' not found...");
        } else {
            return (UserDetails) users.get(0);
        }
    }
}
