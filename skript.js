
  const likeButtons = document.querySelectorAll('.cards__btn');

  likeButtons.forEach(button => {
    button.addEventListener('click', function() {

      const countSpan = this.querySelector('.like__count');
      

      let currentCount = parseInt(countSpan.textContent);
      countSpan.textContent = currentCount + 1;

      this.style.transform = "scale(1.2)";
      setTimeout(() => { this.style.transform = "scale(1)"; }, 100);
    });
  });
