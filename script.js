document.addEventListener('DOMContentLoaded', function () {
    const navigation = document.querySelector(".primary-navigation");
    
    if (navigation) {
        const navigationHeight = navigation.offsetHeight;
        document.documentElement.style.setProperty(
            "--scroll-padding", 
            navigationHeight + "px"
        );
    }
});

