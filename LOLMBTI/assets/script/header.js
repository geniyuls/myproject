document.getElementById('menu-touch').addEventListener('click', function() {
    const navItems = document.getElementById('nav-items');
    navItems.style.display = navItems.style.display === 'block' ? 'none' : 'block';
});