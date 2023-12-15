// Dark mode
$(document).ready(function () {
    const themeToggleDarkIcon = $('#theme-toggle-dark-icon');
    const themeToggleLightIcon = $('#theme-toggle-light-icon');

    if (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        themeToggleLightIcon.removeClass('hidden');
    } else {
        themeToggleDarkIcon.removeClass('hidden');
    }

    const themeToggleBtn = $('#theme-toggle');
    themeToggleBtn.click(function () {
        themeToggleDarkIcon.toggleClass('hidden');
        themeToggleLightIcon.toggleClass('hidden');

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                $('html').addClass('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                $('html').removeClass('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if ($('html').hasClass('dark')) {
                $('html').removeClass('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                $('html').addClass('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });

// Dark mode md
    const themeToggleBtn_md = $('.c-dark_mode_md');
    themeToggleBtn_md.click(function () {
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                $('html').addClass('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                $('html').removeClass('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if ($('html').hasClass('dark')) {
                $('html').removeClass('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                $('html').addClass('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });


//slide toggle aside menu
    const toggleButton = $('#i-aside_icon');
    const slideTarget = $('.sidebar-menu');
    let isSlidedDown = false;
    toggleButton.click(function () {
        if (isSlidedDown) {
            slideTarget.slideUp();

        } else {
            slideTarget.slideDown();
        }
        isSlidedDown = !isSlidedDown;
    });

//login panel toggle
    $(document).mouseup(function (e) {
        let container = $(".c-login_block");
        let button = $('.c-login_click');
        if (!container.is(e.target) && container.has(e.target).length === 0 && !button.is(e.target)) {
            container.addClass('hidden').removeClass('block');
        }
    });
    $('.c-login_click').on('click', function (e) {
        e.stopPropagation();
        $('.c-login_block').toggleClass('hidden block');
    });

//footer click toggle
    $('.c-footer_click > div').click(function () {
        $('.c-footer_click > div.active-footer').removeClass('active-footer');
        $(this).addClass('active-footer');
    });

// Back to top


// Aside menu
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


// Hover menu
    $('.c-hover_change').hover(
        function () {
            $(this).find('i').eq(1).text('expand_more');
        },
        function () {
            $(this).find('i').eq(1).text('chevron_left');
        }
    );


// Sticky header
    const stickyHeader = $('#sticky-header');
    let lastScrollY = 0;

    $(window).scroll(function () {
        const currentScrollY = $(window).scrollTop();
        if (currentScrollY > 1000) {
            if (currentScrollY > lastScrollY) {
                stickyHeader.css('transform', 'translateY(-100%)');
            } else {
                stickyHeader.css('transform', 'translateY(0)');
            }
        } else {
            stickyHeader.css('transform', 'translateY(0)');
        }

        lastScrollY = currentScrollY;
    });

});