document.addEventListener('DOMContentLoaded', () => {
    const modeBtn = document.getElementById('mode-btn');

    if (modeBtn) {
        modeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                modeBtn.innerText = "تفعيل الوضع الفاتح";
            } else {
                modeBtn.innerText = "تفعيل الوضع المظلم";
            }
        });
    }
});