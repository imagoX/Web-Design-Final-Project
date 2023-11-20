var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}
var themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', function () {
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
$(document).ready(function () {

    $('.sidebar-menu li').click(function (e) {
        if ($(this).hasClass('c-no_slide')) {
        } else if (!$(this).hasClass('active')) {
            if ($(this).hasClass('active') && ($(this).hasClass('c-blog_href'))) {
                $('.c-blog_href a').attr('href', './blog.html');
            } else if ($(this).hasClass('c-blog_href') && !($(this).hasClass('c-blog_href'))) {
                $('.child-menu').slideUp(500);
                $('.child-menu', this).slideDown(500);
                $('.chevron-icon').text('chevron_left');
                $('.chevron-icon', this).text('expand_more');
                $('.sidebar-menu li').removeClass('active');
                $(this).addClass('active');
            } else {
                $('.sidebar-menu li').removeClass('active');
                $(this).addClass('active');
                $('.child-menu').slideUp(500);
                $('.child-menu', this).slideDown(500);
                $('.chevron-icon').text('chevron_left');
                $('.chevron-icon', this).text('expand_more');
            }
        }
    });
});

$(document).ready(function () {
    const stickyHeader = document.getElementById('sticky-header');
    let lastScrollY = 0;
    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 1000) {
            if (currentScrollY > lastScrollY) {
                stickyHeader.style.transform = 'translateY(-100%)';
            } else {
                stickyHeader.style.transform = 'translateY(0)';
            }
        } else {
            stickyHeader.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    });
});







