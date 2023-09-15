function darkMode () {
  const btnSwitch = document.querySelector('.switch');
 
   btnSwitch.addEventListener('click', (e) => {
      document.body.classList.toggle('dark')
      btnSwitch.classList.toggle('active')

      if (document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
  
      } else {
        localStorage.setItem('dark-mode', 'false')
      }

    })

    
    if (localStorage.getItem('dark-mode') === 'true'){
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    
}

export default darkMode