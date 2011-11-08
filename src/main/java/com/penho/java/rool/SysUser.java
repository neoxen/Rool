package com.penho.java.rool;

import org.springframework.roo.addon.entity.RooEntity;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.tostring.RooToString;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.*;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.springframework.format.annotation.DateTimeFormat;
import com.penho.java.rool.SysRole;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.ManyToMany;
import javax.persistence.CascadeType;

@RooJavaBean
@RooToString
@RooEntity(finders = { "findSysUsersByUserNameEquals" })
public class SysUser implements UserDetails {

    @NotNull
    @Size(min = 3)
    private String userName;

    @NotNull
    @Size(min = 3)
    private String password;

    @NotNull
    private Boolean enabled = true;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date lastLogin;

    @NotNull
    @ManyToMany(cascade = CascadeType.ALL)
    private Set<SysRole> userRole = new HashSet<SysRole>();

    @Override
    public Collection<GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> grantedAuthorities = new ArrayList<GrantedAuthority>();
        GrantedAuthority[] ga = getUserRole().toArray(new GrantedAuthority[0]);
        for (int i = 0; i < ga.length; i++) {
            grantedAuthorities.add(ga[i]);
        }
        return grantedAuthorities;
    }

    @Override
    public String getUsername() {
        return getUserName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return getEnabled();
    }

}
