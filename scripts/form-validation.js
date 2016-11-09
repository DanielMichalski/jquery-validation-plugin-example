
function checkPESELAndSetSexType() {
    var pesel = document.getElementById('pesel').value;
    var peselLength = pesel.length;
    if (peselLength == 11) {
        var sexDigit = pesel.charAt(9);
        if (sexDigit % 2 == 0) {
            document.getElementById('sex_f').checked = true;
            document.getElementById('sex_m').checked = false;
        } else {
            document.getElementById('sex_m').checked = true;
            document.getElementById('sex_f').checked = false;
        }
    }
}

$(document).ready(function () {
    $(".form-register").validate(
        {
            rules: {
                firstname: {
                    required: true
                },
                lastname: {
                    required: true
                },
                password: {
                    required: true,
                    minlength: 8
                },
                password_again: {
                    required: true,
                    minlength: 8,
                    equalTo: "#password"
                },
                birthdate: {
                    required: true
                },
                login: {
                    required: true
                    /*
                     remote: {
                     url: "http://your-service/check-login"
                     }
                     */
                },
                pesel: {
                    required: true
                }
            },
            highlight: function (element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
            },
            messages: {
                firstname: {
                    required: "First name is required"
                },
                lastname: {
                    required: "Last name is required"
                },
                password: {
                    required: "Password is required",
                    minlength: jQuery.validator.format("Password must have at least at {0} characters")
                },
                password_again: {
                    required: "Password is required",
                    minlength: jQuery.validator.format("Password must have at least at {0} characters"),
                    equalTo: "Passwords must be the same"
                },
                birthdate: {
                    required: "Birtdate is required"
                },
                login: {
                    required: "Login is required",
                    remote: "User with selected login exists"
                },
                pesel: {
                    required: "Pesel number is required"
                },
                photo: {
                    required: "Photo is required"
                }
            }
        }
    );
});