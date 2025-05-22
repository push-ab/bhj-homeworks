document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    const fontSizeControls = document.querySelectorAll('.font-size');
    
    fontSizeControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            
            fontSizeControls.forEach(c => c.classList.remove('font-size_active'));
            
            this.classList.add('font-size_active');
            
            book.classList.remove('book_fs-big', 'book_fs-small');
            
            const size = this.dataset.size;
            if (size === 'big') {
                book.classList.add('book_fs-big');
            } else if (size === 'small') {
                book.classList.add('book_fs-small');
            }
        });
    });
});