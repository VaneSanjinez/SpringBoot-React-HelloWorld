package taspoc.bookingdemo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/people")
public class PersonController {
    private List<Person> people;

    public PersonController() {
        people =new ArrayList<>();
        people.add(new Person("Pedro",12));
        people.add(new Person("Mauricio",12));
        people.add(new Person("Diego",12));
        people.add(new Person("Karen",12));
        people.add(new Person("Rodrigo",12));
        people.add(new Person("Mayra",12));
        people.add(new Person("Daniel",12));
        people.add(new Person("Luis",12));
        people.add(new Person("Davor",12));
        people.add(new Person("Pedro",12));

    }
    @RequestMapping(value = "/all", method= RequestMethod.GET)
    public List<Person>getAll(){
        return people;
    }



}
