package hello;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GreetingController {

    @RequestMapping("/greeting")
    public String greeting(@RequestParam(value = "name", required = false, defaultValue = "World") String name, Model model) {

        model.addAttribute("name", name);

//        String result = String.format("Hello, %s!", aName);
        return "greeting";
    }

    @RequestMapping("/my-handling-form-page")
    public String handleForm() {
        System.out.println("hello, I received data from form!");
        return "okpage";
    }

}
