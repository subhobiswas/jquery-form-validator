# jquery-form-validator

This is a simple js file that handle form validation with sweet alert

### Requirements

sweetalert setup in your html you can chek cdn alreday included in index.html.<br>
jquery cdn

### setup

include validation.js file into your project (lower of body tag)

```
<script src="validation.js"></script>
```

include validation.css file into your project ( in header)

```
<script src="validation.css"></script>
```

### Basic

1. input name
2. minmum lenth of input give the min lenth
3. maximum lenth of input give the max lenth
4. required or not true or false
5. type of input string,number,email,password

```
validation('first_name', '', '', 'true', 'string');
validation('email', '', '', 'true', 'password');
validation('password', '5', '10', 'true', 'password');
```

### Advance

```
   $('#submit').click(function () {
        if(!validation('email_id', '', '', '', 'password'))
        {
            alert('error');
            //  do somthing
        }
        else
        {
            alert('success');
            //  do somthing
        }
    });
```
