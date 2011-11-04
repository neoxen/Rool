package com.penho.java.rool.web;

import com.penho.java.rool.SysRole;
import org.springframework.roo.addon.web.mvc.controller.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RooWebScaffold(path = "sysroles", formBackingObject = SysRole.class)
@RequestMapping("/sysroles")
@Controller
public class SysRoleController {
}
