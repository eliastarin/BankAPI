package nl.inholland.BankAPI.Model.DTO;

import nl.inholland.BankAPI.Model.User;

public record RegistrationDTO(String firstName, String lastName, String email, long phoneNumber, long bsnNumber, String password) {
    public RegistrationDTO(User user){
        this(
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPhoneNumber(),
                user.getBsnNumber(),
                user.getPassword()
        );
    }}
