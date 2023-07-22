
const select = document.querySelector('#select')
const input = document.querySelector('#input-email')
const divEmail = document.querySelector('#div-email')
const labelEmail = document.querySelector('#label-email')
const buttonLogin = document.querySelector('#button-login')
const h1 = document.querySelector('#h1')
const h2 = document.querySelector('#h2')
const p = document.querySelector('#p')
const buttonSignup = document.querySelector('#button-signup')

    function changeLanguage() {

    if (select.value === 'PT') {
        buttonLogin.textContent = 'Entrar'
        h1.textContent = 'Filmes, séries e muito mais, sem limites'
        h2.textContent = 'Assista onde quiser. Cancele quando quiser.'
        p.textContent = 'Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.'
        labelEmail.textContent = 'Email'
        buttonSignup.textContent = 'Vamos lá >'
    }
    else {
        buttonLogin.textContent = 'Sign In'
        h1.textContent = 'Unlimited movies, TV shows, and more'
        h2.textContent = 'Watch anywhere. Cancel anytime.'
        p.textContent = 'Ready to watch? Enter your email to create or restart your membership.'
        labelEmail.textContent = 'Email Adress'
        buttonSignup.textContent = 'Get Started >'
    }
}

changeLanguage()
select.addEventListener('change', changeLanguage)

function focusChange() {

      input.style.top = 'auto'
      input.style.bottom = '5px'
      input.style.transform = 'translateY(0)'
      input.style.transition = '0.2s ease'
      labelEmail.style.top = '5px'
      labelEmail.style.transform = 'translateY(0)'
      labelEmail.style.transition = '0.2s ease'
      labelEmail.style.fontSize = '15px'

  }

  function blurChange() {

    if (input.value === '') {

        input.style.top = '50%'
        input.style.bottom = 'auto'
        input.style.transform = 'translateY(-50%)'
        input.style.transition = '0.2s ease'
        labelEmail.style.top = '50%'
        labelEmail.style.transform = 'translateY(-50%)'
        labelEmail.style.transition = '0.2s ease'
        labelEmail.style.fontSize = '22px'
    }

  }
  
  input.addEventListener('focus', focusChange)
  input.addEventListener('blur', blurChange)