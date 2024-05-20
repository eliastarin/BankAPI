package nl.inholland.BankAPI.Model.DTO;

import nl.inholland.BankAPI.Model.User;
import nl.inholland.BankAPI.Model.UserType;

import java.util.List;

public record UserDTO(String firstName, String lastName, String email, String password, long phoneNumber, long bsnNumber, List<UserType> userType) {
    public UserDTO(User user){
        this(user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPassword(),
                user.getPhoneNumber(),
                user.getBsnNumber(),
                user.getUserType()
            );
    }

}