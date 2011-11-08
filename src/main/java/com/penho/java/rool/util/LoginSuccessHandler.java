package com.penho.java.rool.util;

import com.penho.java.rool.SysUser;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

import javax.persistence.TypedQuery;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

/**
 * Created by IntelliJ IDEA.
 * User: Neo
 * Date: 11-11-8
 * Time: 下午10:29
 * To change this template use File | Settings | File Templates.
 */
public class LoginSuccessHandler implements AuthenticationSuccessHandler {

    private AuthenticationSuccessHandler target = new SavedRequestAwareAuthenticationSuccessHandler();
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        Object principal = SecurityContextHolder.getContext().
                getAuthentication().getPrincipal();
        String username = principal.toString();
        if (principal instanceof UserDetails) {
            username = ((UserDetails) principal).getUsername();
        }

        TypedQuery<SysUser> q = SysUser.findSysUsersByUserNameEquals(username);
        SysUser user = q.getSingleResult();

        user.setLastLogin(new Date());
        user.persist();

        target.onAuthenticationSuccess(request, response, authentication);
    }
}
