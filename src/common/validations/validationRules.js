export const Regex = {
    Password: /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/,
    PersonName: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    Mobile: /^(\+\d{1,3}[- ]?)?\d{10}$/,
    Email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
};

const requiredRuleForInputField = (label) => ({
    required: `Please  enter  ${label}`
});

export const validationRules = {
    email: {
        ...requiredRuleForInputField("email"),
        pattern: {
            value: Regex.Email,
            message: 'Please enter a valid email',
        },
    },
    password: {
        ...requiredRuleForInputField("password"),
        pattern: {
            value: Regex.Password,
            message: 'Password should be 8 - 16 characters.(1 Special Character,1 Uppercase, 1 Lowercase, 1 Number)',
        },
    },
    firstName: {
        ...requiredRuleForInputField("firstName"),
        pattern: {
            value: Regex.PersonName,
            message: "Please enter a valid first name",
        },
    },
    lastName: {
        ...requiredRuleForInputField("lastName"),
        pattern: {
            value: Regex.PersonName,
            message: "Please enter valid last name",
        },
    },
    contactNumber: {
        ...requiredRuleForInputField("mobile number"),
        pattern: {
            value: Regex.Mobile,
            message: "Please enter a valid Mobile number",
        },
    },
    address: {
        ...requiredRuleForInputField('address'),

    },
};
