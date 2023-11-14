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


    let flag = 0;
    let activeElement = null;

    $('.sidebar-menu li').click(function (e) {
        const clickedElement = $(this);

        if (clickedElement.hasClass('c-no_slide')) {
            return;
        }

        if (flag === 2) {
            $('.child-menu').slideUp(500);
            $('.chevron-icon').text('expand_more');
            $('.sidebar-menu li').removeClass('active');
            // Remove href modification
            // $('.c-blog_href a').attr('href', '');
            flag = 0;
            activeElement = null;
            return;
        }

        if (!clickedElement.hasClass('c-blog_href') && !clickedElement.hasClass('active')) {
            $('.aside_link_blog').attr('href', 'blog.html');
            flag = 0;
            activeElement = null;
            toggleChildMenu(clickedElement);
            return;
        }

        if (clickedElement.hasClass('active')) {
            return;
        }

        if (flag === 1 && !clickedElement.hasClass('active')) {
            // Set href attribute before toggle

            toggleChildMenu(clickedElement);
            flag++;
            activeElement = clickedElement;
            return;
        }

        toggleChildMenu(clickedElement);
        flag = 1;
        activeElement = clickedElement;
    });

    function toggleChildMenu(element) {
        $('.child-menu').slideUp(500);
        $('.chevron-icon').text('expand_more');
        $('.sidebar-menu li').removeClass('active');
        element.addClass('active');
        element.find('.child-menu').slideDown(500);
        element.find('.chevron-icon').text('chevron_left');
    }


    // let flag = 0;
    //
    // $('.sidebar-menu li').click(function (e) {
    //     if ($(this).hasClass('c-no_slide')) {
    //     } else if ($(this).hasClass('c-blog_href')) {
    //         if (flag === 2) {
    //             $('.child-menu', this).slideUp(500);
    //             $('.chevron-icon').text('expand_more');
    //             $('.sidebar-menu li').removeClass('active');
    //             $(this).removeClass('active');
    //             $('.c-blog_href a').attr('href', '');
    //             flag = 0;
    //         } else if (flag === 1 && !$(this).hasClass('active')) {
    //             $('.c-blog_href a').attr('href', 'blog.html');
    //             $('.child-menu', this).slideDown(500);
    //             $('.chevron-icon', this).text('chevron_left');
    //             $(this).addClass('active');
    //             flag++;
    //         } else {
    //             $('.child-menu').slideUp(500);
    //             $('.chevron-icon').text('expand_more');
    //             $('.sidebar-menu li').removeClass('active');
    //             $(this).addClass('active');
    //             $('.child-menu', this).slideDown(500);
    //             $('.chevron-icon', this).text('chevron_left');
    //             flag = 1;
    //         }
    //     } else {
    //         flag = 0;
    //         $('.child-menu').slideUp(500);
    //         $('.child-menu', this).slideDown(500);
    //         $('.chevron-icon').text('chevron_left');
    //         $('.chevron-icon', this).text('expand_more');
    //         $('.sidebar-menu li').removeClass('active');
    //         $(this).addClass('active');
    //     }
    // });


    // $('.sidebar-menu li').click(function (e) {
    //     if ($(this).hasClass('c-no_slide')) {
    //     } else if (!$(this).hasClass('active')) {
    //         if ($(this).hasClass('active') && ($(this).hasClass('c-blog_href'))) {
    //             $('.c-blog_href a').attr('href', './blog.html');
    //         } else if ($(this).hasClass('c-blog_href') && !($(this).hasClass('c-blog_href'))) {
    //             $('.child-menu').slideUp(500);
    //             $('.child-menu', this).slideDown(500);
    //             $('.chevron-icon').text('chevron_left');
    //             $('.chevron-icon', this).text('expand_more');
    //             $('.sidebar-menu li').removeClass('active');
    //             $(this).addClass('active');
    //         } else {
    //             $('.sidebar-menu li').removeClass('active');
    //             $(this).addClass('active');
    //             $('.child-menu').slideUp(500);
    //             $('.child-menu', this).slideDown(500);
    //             $('.chevron-icon').text('chevron_left');
    //             $('.chevron-icon', this).text('expand_more');
    //         }
    //     }
    // });
});

$(document).ready(function () {
    const stickyHeader = document.getElementById('sticky-header');
    let lastScrollY = 0;
    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 400) {
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







