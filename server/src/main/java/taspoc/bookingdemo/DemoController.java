package taspoc.bookingdemo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/home")
public class DemoController {

    @RequestMapping(value = "/hello")
    public String hello(){
        return "Hello World";
    }
}
