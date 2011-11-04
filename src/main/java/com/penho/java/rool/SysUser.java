package com.penho.java.rool;

import org.springframework.roo.addon.entity.RooEntity;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.tostring.RooToString;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.springframework.format.annotation.DateTimeFormat;
import java.util.Set;
import com.penho.java.rool.SysRole;
import java.util.HashSet;
import javax.persistence.ManyToMany;
import javax.persistence.CascadeType;

@RooJavaBean
@RooToString
@RooEntity
public class SysUser {

    @NotNull
    @Size(min = 3)
    private String userName;

    @NotNull
    @Size(min = 3)
    private String password;

    @NotNull
    private Boolean enabled;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date lastLogin;

    @NotNull
    @ManyToMany(cascade = CascadeType.ALL)
    private Set<SysRole> userRole = new HashSet<SysRole>();
}
