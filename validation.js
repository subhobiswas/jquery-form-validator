
function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}
// chek the validation parameter is set or not
function checkparam(name) {
  if (name != "" && name != false) {
    return true;
  } else {
    return false;
  }
}
// return the lenth of input value
function input_lenth(name) {
  let lenth = $('input[name="' + name + '"]').val();
  return parseInt(lenth.length);
}
// focus on input box
function input_focus(name) {
  $('input[name="' + name + '"]').focus();
}
// add success class for css
function success(name) {
  $('input[name="' + name + '"]')
    .addClass("success")
    .removeClass("error");
}
function error_vali(name) {
  $('input[name="' + name + '"]')
    .removeClass("success")
    .addClass("error");
}
// print the error message
function validate_error_message(name, error_no) {
	// set focus on error input
	input_focus(name);
	// replace _ with a space 
  name = name.replace(/_/g," ");
  let msg = "";
  switch (error_no) {
    case 1:
      msg = capitalize(name) + " is too small !";
      break;
    case 2:
      msg = capitalize(name) + " is too Learge !";
      break;
    case 3:
      msg = capitalize(name) + " Filed is Required !";
      break;
    case 4:
      msg = capitalize(name) + " Must be charcter !";
      break;
    case 5:
      msg = capitalize(name) + " Must be Number  !";
      break;
    case 6:
      msg = capitalize(name) + " Not Valid  !";
      break;
    case 7:
      msg =
        capitalize(name) +
        " Must be contain Charcter Number and Symbol 8 Charcter long !";
      break;
  }
	// here is your sweet alert
  swal("Oops!", msg, "error");
}
function validation(
  name,
  min_lenth = false,
  max_lenth = false,
  required = false,
  type = false
) {
  let lenth = input_lenth(name);
  let error = 0;
  if (checkparam(min_lenth)) {
    if (lenth < parseInt(min_lenth)) {
      validate_error_message(name, 1);
      error++;
    }
  }
  if (checkparam(max_lenth)) {
    if (lenth > parseInt(max_lenth)) {
      validate_error_message(name, 2);
      error++;
    }
  }
  if (checkparam(required)) {
    if (lenth < 1) {
      validate_error_message(name, 3);
      
      error++;
    }
  }
  if (checkparam(type)) {
    let input = $('input[name="' + name + '"]');
    if (type == "string" || type == "1") {
      if (!isNaN(input.val())) {
        validate_error_message(name, 4);
        error++;
      }
    }
    if (type == "number" || type == "2") {
      if (isNaN(input.val())) {
        validate_error_message(name, 5);
        error++;
      }
    }
    if (type == "email" || type == "3") {
      let regex =
        /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!regex.test(input.val())) {
        validate_error_message(name, 6);
        error++;
      }
    }
    if (type == "password" || type == "4") {
      let pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      if (!pass.test(input.val())) {
        validate_error_message(name, 7);
        
        error++;
      }
    }
  }
  if (error == 0) {
    success(name);
    return true;
  } else {
    error_vali(name);
    return false;
  }
}
