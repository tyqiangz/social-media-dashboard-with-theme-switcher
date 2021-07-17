theme_toggler = document.getElementsByTagName("input")[0];
theme_toggler.addEventListener("click", change_theme);

// DARK THEME
DARKTHEME_VERY_DARK_BLUE = "hsl(230, 17%, 14%)"
DARKTHEME_DARK_DESATURATED_BLUE = "hsl(228, 28%, 20%)"
DARKTHEME_DESATURATED_BLUE = "hsl(228, 34%, 66%)"

// LIGHT THEME
WHITE = "hsl(0, 0%, 100%)"
LIGHTTHEME_VERY_PALE_BLUE = "hsl(225, 100%, 98%)"
LIGHTTHEME_LIGHT_GRAYISH_BLUE = "hsl(227, 47%, 96%)"
LIGHTTHEME_DARK_GRAYISH_BLUE = "hsl(228, 12%, 44%)"
LIGHTTHEME_VERY_DARK_BLUE = "hsl(230, 17%, 14%)"

function change_theme() {
    // light-theme by default, toggles between light theme and dark theme
    var theme_changing_elements = document.getElementsByClassName("dark-theme");
    // console.log([...theme_changing_elements][0].classList);
    [...theme_changing_elements].forEach(element => {
        element.classList.toggle("light-theme")
    });
    console.log([...theme_changing_elements]);
}

// function change_theme() {
//     console.log(theme_toggler.checked);
//     title = document.getElementsByClassName("header")[0].children[0];
//     total_followers = document.getElementsByClassName("header")[0].children[1];
//     social_media_handles = document.getElementsByClassName("social-media-handle");

//     dark_mode_section = document.getElementsByClassName("dark-mode-section")[0];
//     big_cards = document.querySelectorAll('[class*="big"]');
//     small_cards = document.querySelectorAll('[class*="small"]');
//     top_background = document.getElementsByClassName('top-background')
//     console.log(big_cards);

//     // DARK THEME
//     if (theme_toggler.checked) {
//         title.style.color = WHITE;
//         total_followers.style.color = DARKTHEME_DESATURATED_BLUE;
//         dark_mode_section.style.color = DARKTHEME_DESATURATED_BLUE;

//         top_background[0].style.backgroundColor = DARKTHEME_VERY_DARK_BLUE;

//         big_cards.forEach(element => {
//             element.style.backgroundColor = DARKTHEME_DARK_DESATURATED_BLUE;
//             // element.style.color = WHITE;
//         });
//         small_cards.forEach(element => {
//             element.style.backgroundColor = DARKTHEME_DARK_DESATURATED_BLUE;
//             element.style.color = WHITE;
//         });
//         [...social_media_handles].forEach(element => {
//             element.style.color = DARKTHEME_DESATURATED_BLUE;
//         });
//     }
//     // LIGHT THEME
//     else {
//         title.style.color = LIGHTTHEME_VERY_DARK_BLUE;
//         total_followers.style.color = LIGHTTHEME_VERY_DARK_BLUE;
//         dark_mode_section.style.color = LIGHTTHEME_VERY_DARK_BLUE;
//         top_background[0].style.backgroundColor = LIGHTTHEME_VERY_PALE_BLUE;

//         big_cards.forEach(element => {
//             element.style.backgroundColor = WHITE;
//             element.style.color = LIGHTTHEME_VERY_DARK_BLUE;
//         });
//         small_cards.forEach(element => {
//             element.style.backgroundColor = WHITE;
//             element.style.color = LIGHTTHEME_VERY_DARK_BLUE;
//         });
//     }
// }