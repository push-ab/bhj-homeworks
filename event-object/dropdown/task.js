document.addEventListener('DOMContentLoaded', function() {
    
    const dropdown = document.querySelectorAll('.dropdown');
    
    
    dropdown.forEach(dropdown => {
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        const dropdownList = dropdown.querySelector('.dropdown__list');
        const dropdownItems = dropdown.querySelectorAll('.dropdown__item');
        
        
        dropdownValue.addEventListener('click', function() {
            
            document.querySelectorAll('.dropdown__list_active').forEach(list => {
                if (list !== dropdownList) {
                    list.classList.remove('dropdown__list_active');
                }
            });
            
            
            dropdownList.classList.toggle('dropdown__list_active');
        });
        
        
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault(); 
                
                const newValue = this.querySelector('.dropdown__link').textContent;
                dropdownValue.textContent = newValue;
                
                dropdownList.classList.remove('dropdown__list_active');
            });
        });
    });
    
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown__list_active').forEach(list => {
                list.classList.remove('dropdown__list_active');
            });
        }
    });
});