document.addEventListener("DOMContentLoaded", function(event) { 
    var bar = document.querySelector('.bar')
    var navbarUl = document.querySelector('.bar_ul')
    var banner = document.querySelector('.banner')

    var modalOverlaySignUp = document.querySelector('#modal_overlay-signUp-js')
    var signUpForm = document.querySelector('#form-sign-up-js')  
    var signUpBtn = document.querySelector('#signUp-js')       
    var modalOverlay = document.querySelector('#modal_overlay-js')
    var loginForm = document.querySelector('#form-login-js')
    var loginBtn = document.querySelector('#login-js')

    var btnSigninForm = document.querySelector('.auth-form_switch-btn.signin')
    var btnSignupForm = document.querySelector('.auth-form_switch-btn.signUp')

    var email = document.querySelector('.auth-form_input.email')
    var pass = document.querySelector('.auth-form_input.pass')
    var againPass = document.querySelector('.auth-form_input.againPass')
    var btnSignUp = document.querySelector('#btnSignUp')
    var alertEmail= document.querySelector('.error-message-email')
    var alertPass= document.querySelector('.error-message-pass')
    var alertPass= document.querySelector('.error-message-pass')
    var alertAgainPass= document.querySelector('.error-message-againPass')
    var patternEmail = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/
    var patternPass = /.{8,}/

    var showBtn = document.querySelector(".show-eye")
    var hideBtn = document.querySelector(".hide-eye")

    var emailSignin = document.querySelector('.auth-form_input.emailSignin')
    var passSignin = document.querySelector('.auth-form_input.passSignin')
    var btnSignin = document.querySelector('#btnSignin')
    var alertEmailSignin= document.querySelector('.error-message-emailSignin')
    var alertPassSignin= document.querySelector('.error-message-passSignin')

    var users = []


    bar.addEventListener("click", function() {
        navbarUl.style.display = "block"
    })
    banner.addEventListener("click", function() {
        navbarUl.style.display = "none"
    })

    btnSigninForm.addEventListener("click", function() {
        signUpForm.style.display = "none"
        loginForm.style.display = "flex"
    })
    btnSignupForm.addEventListener("click", function() {
        signUpForm.style.display = "flex"
        loginForm.style.display = "none"
    })

    signUpBtn.addEventListener("click", function(event){
        event.preventDefault()
        signUpForm.style.display = "flex"
    });
    modalOverlaySignUp.addEventListener("click", function(){
        signUpForm.style.display = "none"
    });

    loginBtn.addEventListener("click", function(event) {
        event.preventDefault()
        loginForm.style.display = "flex"                              
    });
    modalOverlay.addEventListener("click", function() {
        loginForm.style.display = "none"
    });

    alertEmail.textContent = 'B???t bu???c *'
    email.addEventListener("keyup", function (event) {
        if (email.value.length == 0){
            alertEmail.textContent = 'B???t bu???c *'
            return
        }
        if(email.value.match(patternEmail)) {
            alertEmail.textContent = ''
            return
        }
        alertEmail.textContent = "Email kh??ng h???p l???"
    });

    alertPass.textContent = 'B???t bu???c *'
    pass.addEventListener("keyup", function (event) {
        if(pass.value.length == 0){
            alertPass.textContent = 'B???t bu???c *'
            showBtn.style.display = "none"
            hideBtn.style.display = "none"     
            return
        }               
        if(pass.value.match(patternPass)) {
            alertPass.textContent = ''
            return
        }
        alertPass.textContent = 'M???t kh???u t??? 8 k?? t??? tr??? l??n' 
        showBtn.style.display = "block"
    });

    alertAgainPass.textContent = 'B???t bu???c *'
    againPass.addEventListener("keyup", function (event) {
        if(againPass.value.length == 0){
            alertAgainPass.textContent = 'B???t bu???c *'
            return
        }   
        if(pass.value != againPass.value){
            alertAgainPass.textContent = 'M???t kh???u kh??ng kh???p'
            return
        }          
        alertAgainPass.textContent = ''        
    });

    showBtn.style.display = "none"     
    hideBtn.style.display = "none"     
    showBtn.addEventListener("click", function() {
        if(pass.type === "password"){
            pass.type = "text";
            showBtn.style.display = "none" 
            hideBtn.style.display = "block"  
            showBtn.classList.add(); 
        }
    })
    hideBtn.addEventListener("click", function() {
        pass.type = "password";
        showBtn.classList.remove();
        hideBtn.style.display = "none"    
        showBtn.style.display = "block"      
    })

    emailSignin.addEventListener("keyup", function (event) {
        if (emailSignin.value.length == 0){
            alertEmailSignin.textContent = ''
            return
        }
        if(emailSignin.value.match(patternEmail)) {
            alertEmailSignin.textContent = ''
            return
        }
        alertEmailSignin.textContent = "Email kh??ng h???p l???"
    });

    passSignin.addEventListener("keyup", function (event) {
        if(passSignin.value.length == 0){
            alertPassSignin.textContent = ''
            return
        }               
        if(passSignin.value.match(patternPass)) {
            alertPassSignin.textContent = ''
            return
        }
        alertPassSignin.textContent = 'M???t kh???u t??? 8 k?? t??? tr??? l??n'           
    });
    
    btnSignUp.addEventListener("click", function(event) {
        if(email.value== "" || pass.value== "" || againPass.value== "") {
            return
        }
        for(var i = 0; i < users.length; i++) {
            if(email.value == users[i].email) {
                alert("Email ???? t???n t???i")
                return
            }
        }
        if(patternEmail.test(email.value) && patternPass.test(pass.value) && pass.value == againPass.value) {
            var user = {
                email: email.value,
                pass: pass.value
            }
            users.push(user)
            alert("B???n ???? ????ng k?? th??nh c??ng")
            signUpForm.style.display = "none"
            loginForm.style.display = "flex"
        }
    })

    btnSignin.addEventListener("click", function(event) {
        if(emailSignin.value== "" || passSignin.value== "") {
            return
        }
        for(var i = 0; i < users.length; i++) {
            if(emailSignin.value == users[i].email && passSignin.value == users[i].pass) {
                alert("B???n ???? ????ng nh???p th??nh c??ng")
                loginForm.style.display = "none"
                return
            }
        }  
        alert("L???i: Email/m???t kh???u kh??ng ????ng")
    })
});    




