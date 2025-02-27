import './styles/style.scss'



const button = document.querySelector('.red');
const text = document.querySelector('.text')


button.addEventListener('click', () => {
  button.style = 'display : none';
  text.textContent = 'БУБУБУ';
  text.style.fontSize = '40px'

})

