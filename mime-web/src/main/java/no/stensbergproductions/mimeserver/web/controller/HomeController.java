package no.stensbergproductions.mimeserver.web.controller;

import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {



	@RequestMapping({ "/" })
	public String home(Map<String, Object> model) {
		
		return "home";
	}
	
	
	
}
