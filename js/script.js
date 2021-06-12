const question = document.querySelectorAll('.question');

question.forEach(function(card) {
    const btn = card.querySelector('.buttons');
    
    btn.addEventListener('click', () => {
        card.classList.toggle('show-text');

        question.forEach(function(item) {
        if (item !== card) {
            item.classList.remove('show-text')
        }

        })
        
    });
});