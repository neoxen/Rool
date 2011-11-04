package com.penho.java.rool.web;

import com.penho.java.rool.SysUser;
import org.springframework.roo.addon.web.mvc.controller.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RooWebScaffold(path = "sysusers", formBackingObject = SysUser.class)
@RequestMapping("/sysusers")
@Controller
public class SysUserController {
}
