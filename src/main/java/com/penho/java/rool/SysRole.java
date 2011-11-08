package com.penho.java.rool;

import org.springframework.roo.addon.entity.RooEntity;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.tostring.RooToString;
import org.springframework.security.core.GrantedAuthority;

import javax.validation.constraints.NotNull;

@RooJavaBean
@RooToString
@RooEntity
public class SysRole implements GrantedAuthority{

    @NotNull
    private String roleName;

    @Override
    public String getAuthority() {
        return getRoleName();
    }

}
