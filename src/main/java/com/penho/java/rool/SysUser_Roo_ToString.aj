// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.penho.java.rool;

import java.lang.String;

privileged aspect SysUser_Roo_ToString {
    
    public String SysUser.toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Enabled: ").append(getEnabled()).append(", ");
        sb.append("Id: ").append(getId()).append(", ");
        sb.append("LastLogin: ").append(getLastLogin()).append(", ");
        sb.append("Password: ").append(getPassword()).append(", ");
        sb.append("UserName: ").append(getUserName()).append(", ");
        sb.append("UserRole: ").append(getUserRole() == null ? "null" : getUserRole().size()).append(", ");
        sb.append("Version: ").append(getVersion());
        return sb.toString();
    }
    
}
