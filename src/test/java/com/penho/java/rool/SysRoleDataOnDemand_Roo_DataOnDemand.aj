// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.penho.java.rool;

import com.penho.java.rool.SysRole;
import java.lang.String;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import org.springframework.stereotype.Component;

privileged aspect SysRoleDataOnDemand_Roo_DataOnDemand {
    
    declare @type: SysRoleDataOnDemand: @Component;
    
    private Random SysRoleDataOnDemand.rnd = new SecureRandom();
    
    private List<SysRole> SysRoleDataOnDemand.data;
    
    public SysRole SysRoleDataOnDemand.getNewTransientSysRole(int index) {
        SysRole obj = new SysRole();
        setRoleName(obj, index);
        return obj;
    }
    
    public void SysRoleDataOnDemand.setRoleName(SysRole obj, int index) {
        String roleName = "roleName_" + index;
        obj.setRoleName(roleName);
    }
    
    public SysRole SysRoleDataOnDemand.getSpecificSysRole(int index) {
        init();
        if (index < 0) index = 0;
        if (index > (data.size() - 1)) index = data.size() - 1;
        SysRole obj = data.get(index);
        return SysRole.findSysRole(obj.getId());
    }
    
    public SysRole SysRoleDataOnDemand.getRandomSysRole() {
        init();
        SysRole obj = data.get(rnd.nextInt(data.size()));
        return SysRole.findSysRole(obj.getId());
    }
    
    public boolean SysRoleDataOnDemand.modifySysRole(SysRole obj) {
        return false;
    }
    
    public void SysRoleDataOnDemand.init() {
        data = SysRole.findSysRoleEntries(0, 10);
        if (data == null) throw new IllegalStateException("Find entries implementation for 'SysRole' illegally returned null");
        if (!data.isEmpty()) {
            return;
        }
        
        data = new ArrayList<com.penho.java.rool.SysRole>();
        for (int i = 0; i < 10; i++) {
            SysRole obj = getNewTransientSysRole(i);
            try {
                obj.persist();
            } catch (ConstraintViolationException e) {
                StringBuilder msg = new StringBuilder();
                for (Iterator<ConstraintViolation<?>> it = e.getConstraintViolations().iterator(); it.hasNext();) {
                    ConstraintViolation<?> cv = it.next();
                    msg.append("[").append(cv.getConstraintDescriptor()).append(":").append(cv.getMessage()).append("=").append(cv.getInvalidValue()).append("]");
                }
                throw new RuntimeException(msg.toString(), e);
            }
            obj.flush();
            data.add(obj);
        }
    }
    
}