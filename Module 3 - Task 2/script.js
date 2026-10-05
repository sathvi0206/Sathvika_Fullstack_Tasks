const form = document.getElementById("registrationForm");

const successModal = document.getElementById("successModal");

const closeModal = document.getElementById("closeModal");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const dob = document.getElementById("dob");

const studentId = document.getElementById("studentId");
const department = document.getElementById("department");
const year = document.getElementById("year");
const cgpa = document.getElementById("cgpa");

const address = document.getElementById("address");
const city = document.getElementById("city");
const pincode = document.getElementById("pincode");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const terms = document.getElementById("terms");


const showError = (input, errorId, message) => {

    input.classList.add("input-error");

    document.getElementById(errorId).textContent = message;

};

const clearError = (input, errorId) => {

    input.classList.remove("input-error");

    document.getElementById(errorId).textContent = "";

};


const validateName = (input, errorId, fieldName) => {

    const value = input.value.trim();

    const namePattern = /^[A-Za-z ]+$/;

    if (value === "") {

        showError(
            input,
            errorId,
            `${fieldName} is required`
        );

        return false;
    }

    if (!namePattern.test(value)) {

        showError(
            input,
            errorId,
            `${fieldName} can contain only letters`
        );

        return false;
    }

    clearError(input, errorId);

    return true;
};


const validateEmail = () => {

    const value = email.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {

        showError(
            email,
            "emailError",
            "Email address is required"
        );

        return false;
    }

    if (!emailPattern.test(value)) {

        showError(
            email,
            "emailError",
            "Enter a valid email address"
        );

        return false;
    }

    clearError(email, "emailError");

    return true;
};



const validatePhone = () => {

    const value = phone.value.trim();

    const phonePattern = /^[6-9]\d{9}$/;

    if (value === "") {

        showError(
            phone,
            "phoneError",
            "Phone number is required"
        );

        return false;
    }

    if (!phonePattern.test(value)) {

        showError(
            phone,
            "phoneError",
            "Enter a valid 10-digit Indian mobile number"
        );

        return false;
    }

    clearError(phone, "phoneError");

    return true;
};



const validateDOB = () => {

    if (dob.value === "") {

        showError(
            dob,
            "dobError",
            "Date of birth is required"
        );

        return false;
    }

    clearError(dob, "dobError");

    return true;
};


const validateGender = () => {

    const selectedGender =
        document.querySelector(
            'input[name="gender"]:checked'
        );

    const error =
        document.getElementById("genderError");

    if (!selectedGender) {

        error.textContent = "Please select your gender";

        return false;
    }

    error.textContent = "";

    return true;
};

const validateStudentId = () => {

    const value = studentId.value.trim();

    if (value === "") {

        showError(
            studentId,
            "studentIdError",
            "Student ID is required"
        );

        return false;
    }

    if (value.length < 5) {

        showError(
            studentId,
            "studentIdError",
            "Enter a valid Student ID"
        );

        return false;
    }

    clearError(studentId, "studentIdError");

    return true;
};

const validateSelect = (input, errorId, message) => {

    if (input.value === "") {

        showError(
            input,
            errorId,
            message
        );

        return false;
    }

    clearError(input, errorId);

    return true;
};


const validateCGPA = () => {

    const value = cgpa.value.trim();

    if (value === "") {

        clearError(cgpa, "cgpaError");

        return true;
    }

    const cgpaValue = Number(value);

    if (cgpaValue < 0 || cgpaValue > 10) {

        showError(
            cgpa,
            "cgpaError",
            "CGPA must be between 0 and 10"
        );

        return false;
    }

    clearError(cgpa, "cgpaError");

    return true;
};

const validateAddress = () => {

    const value = address.value.trim();

    if (value === "") {

        showError(
            address,
            "addressError",
            "Address is required"
        );

        return false;
    }

    clearError(address, "addressError");

    return true;
};

const validateCity = () => {

    const value = city.value.trim();

    const cityPattern = /^[A-Za-z ]+$/;

    if (value === "") {

        showError(
            city,
            "cityError",
            "City is required"
        );

        return false;
    }

    if (!cityPattern.test(value)) {

        showError(
            city,
            "cityError",
            "Enter a valid city name"
        );

        return false;
    }

    clearError(city, "cityError");

    return true;
};

const validatePincode = () => {

    const value = pincode.value.trim();

    const pincodePattern = /^\d{6}$/;

    if (value === "") {

        showError(
            pincode,
            "pincodeError",
            "Pincode is required"
        );

        return false;
    }

    if (!pincodePattern.test(value)) {

        showError(
            pincode,
            "pincodeError",
            "Enter a valid 6-digit pincode"
        );

        return false;
    }

    clearError(pincode, "pincodeError");

    return true;
};


const validatePassword = () => {

    const value = password.value;

    if (value === "") {

        showError(
            password,
            "passwordError",
            "Password is required"
        );

        return false;
    }

    if (value.length < 8) {

        showError(
            password,
            "passwordError",
            "Password must contain at least 8 characters"
        );

        return false;
    }

    clearError(password, "passwordError");

    return true;
};


const validateConfirmPassword = () => {

    const value = confirmPassword.value;

    if (value === "") {

        showError(
            confirmPassword,
            "confirmPasswordError",
            "Please confirm your password"
        );

        return false;
    }

    if (value !== password.value) {

        showError(
            confirmPassword,
            "confirmPasswordError",
            "Passwords do not match"
        );

        return false;
    }

    clearError(
        confirmPassword,
        "confirmPasswordError"
    );

    return true;
};

const validateTerms = () => {

    const error =
        document.getElementById("termsError");

    if (!terms.checked) {

        error.textContent =
            "You must accept the terms and conditions";

        return false;
    }

    error.textContent = "";

    return true;
};



form.addEventListener("submit", (event) => {

    event.preventDefault();


    /* Validate all fields */

    const isValid =
        validateName(
            firstName,
            "firstNameError",
            "First name"
        ) &&

        validateName(
            lastName,
            "lastNameError",
            "Last name"
        ) &&

        validateEmail() &&

        validatePhone() &&

        validateDOB() &&

        validateGender() &&

        validateStudentId() &&

        validateSelect(
            department,
            "departmentError",
            "Please select your department"
        ) &&

        validateSelect(
            year,
            "yearError",
            "Please select your current year"
        ) &&

        validateCGPA() &&

        validateAddress() &&

        validateCity() &&

        validatePincode() &&

        validatePassword() &&

        validateConfirmPassword() &&

        validateTerms();


    /* If valid */

    if (isValid) {

        successModal.classList.add("show");

        console.log("Student Registration Successful!");

    }

});


closeModal.addEventListener("click", () => {

    successModal.classList.remove("show");

    form.reset();

});


const inputFields = [
    firstName,
    lastName,
    email,
    phone,
    dob,
    studentId,
    department,
    year,
    cgpa,
    address,
    city,
    pincode,
    password,
    confirmPassword
];


inputFields.forEach((input) => {

    input.addEventListener("input", () => {

        input.classList.remove("input-error");

    });

});

phone.addEventListener("input", () => {

    phone.value =
        phone.value.replace(/\D/g, "");

});


pincode.addEventListener("input", () => {

    pincode.value =
        pincode.value.replace(/\D/g, "");

});

confirmPassword.addEventListener("input", () => {

    if (
        confirmPassword.value !== "" &&
        confirmPassword.value !== password.value
    ) {

        confirmPassword.classList.add("input-error");

    } else {

        confirmPassword.classList.remove("input-error");

    }

});