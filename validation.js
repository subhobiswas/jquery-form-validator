// var booleanValue = true;
// var numericalValue = 354;
// var stringValue = "This is a String";
// var stringObject = new String( "This is a String Object" );
// alert(typeof booleanValue) // displays "boolean"
// alert(typeof numericalValue) // displays "number"
// alert(typeof stringValue) // displays "string"
// alert(typeof stringObject) // displays "object"

// make upparcase of a string
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
  let lenth = $('input[name="' + name + '"]').val().length;
  return parseInt(lenth);
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
// print the error message
function validate_error_message(name, error_no) {
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
      msg = capitalize(name) + " Must be contain Charcter Number and Symbol 8 Charcter long !";
      break;
  }
  swal("Oops!", msg, "error");
  $('input[name="' + name + '"]')
    .removeClass("success")
    .addClass("error");
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
      input_focus(name);
      error++;
    } else {
      success(name);
    }
  }
  if (checkparam(max_lenth)) {
    if (lenth > parseInt(max_lenth)) {
      validate_error_message(name, 2);
      input_focus(name);
      error++;
    } else {
      success(name);
    }
  }
  if (checkparam(required)) {
    if (lenth < 1) {
      validate_error_message(name, 3);
      input_focus(name);
      error++;
    } else {
      success(name);
    }
  }
  if (checkparam(type)) {
    let input = $('input[name="' + name + '"]');
    if (type == "string" || type == "1") {
      if (typeof input != "string") {
        validate_error_message(name, 4);
        input_focus(name);
        error++;
      } else {
        success(name);
      }
    }
    if (type == "number" || type == "2") {
      if (typeof input != "number") {
        validate_error_message(name, 5);
        input_focus(name);
        error++;
      } else {
        success(name);
      }
    }
    if (type == "email" || type == "3") {
      let regex =
        /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!regex.test(input.val())) {
        validate_error_message(name, 6);
        input_focus(name);
      } else {
        success(name);
      }
    }
    if (type == "password" || type == "4") {
      let pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      if (!pass.test(input.val())) {
        validate_error_message(name, 7);
        input_focus(name);
      } else {
        success(name);
      }
    }
  }
  if (error == 0) {
    return true;
  } else {
    return false;
  }
}
