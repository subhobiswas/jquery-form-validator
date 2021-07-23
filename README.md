# jquery-form-validator

This is a simple js file that handle form validation with sweet alert

### Requirements

sweetalert setup in your html you can check cdn alreday included in index.html.<br>
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

1. Input filed name
2. minmum lenth of input give the minimum lenth
3. maximum lenth of input give the maximum lenth
4. required or not true or false
5. type of input string,number,email,password

```
validation('first_name', '2', '20', 'true', 'string');
validation('email', '', '', 'true', 'password');
validation('password', '8', '16', 'true', 'password');
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
