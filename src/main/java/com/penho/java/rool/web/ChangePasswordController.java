package com.penho.java.rool.web;

import javax.persistence.TypedQuery;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.penho.java.rool.SysUser;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.encoding.PasswordEncoder;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@RequestMapping("/changePassword/**")
@Controller
public class ChangePasswordController {
    Log log = LogFactory.getLog(ChangePasswordController.class);

    @Autowired
    private PasswordEncoder passwordEncoder;

    @RequestMapping
    public void get(ModelMap modelMap, HttpServletRequest request, HttpServletResponse response) {
    }

//    @RequestMapping(method = RequestMethod.POST, value = "{id}")
//    public void post(@PathVariable Long id, ModelMap modelMap, HttpServletRequest request, HttpServletResponse response) {
//    }

    @RequestMapping
    public String index() {
        return "changePassword/index";
    }

    @RequestMapping("change")
    public String change(HttpServletRequest request, HttpServletResponse response) {

        Object principal = SecurityContextHolder.getContext().
                getAuthentication().getPrincipal();
        String username = principal.toString();
        if (principal instanceof UserDetails) {
            username = ((UserDetails) principal).getUsername();
        }
        String strPassword = request.getParameter("password");
        strPassword = passwordEncoder.encodePassword(strPassword, null);
        TypedQuery<SysUser> q = SysUser.findSysUsersByUserNameEquals(username);
        SysUser user = q.getSingleResult();

        user.setPassword(strPassword);
        user.persist();
        //SecurityContextHolder.clearContext();
        return "index";

    }
}
