package com.tracky.tracky;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/user")
    public User getUser() {
        return new User("chid", "kid", "chid@gmail.com", "ilikepeas2000");
    }
}
