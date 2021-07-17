theme_toggler = document.getElementsByClassName("toggler")[0];
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
    console.log(theme_toggler.checked);

    title = document.getElementsByClassName("header")[0].children[0];
    title_stats = document.getElementsByClassName("title-stats")[0];
    subheader = document.getElementsByClassName("subheader")[0];
    big_numbers = document.getElementsByClassName("big-number");
    big_number_types = document.getElementsByClassName("big-number-type");
    slider = document.getElementsByClassName("slider")[0];
    
    social_media_handles = document.getElementsByClassName("social-media-handle");
    followers = document.getElementsByClassName("social-media-handle");
    dark_mode_section = document.getElementsByClassName("dark-mode-section")[0];
    big_cards = document.getElementsByClassName('top-content');
    small_cards = document.querySelectorAll('[class*="small"]');
    full_screen_background = document.getElementsByClassName('fullscreen-background')[0];
    top_background = document.getElementsByClassName('top-background')[0];
    console.log(big_cards);

    // DARK THEME
    if (theme_toggler.checked) {
        [title, subheader, ...big_numbers].forEach(element => {
            element.style.color = WHITE;
        });

        top_background.style.backgroundColor = DARKTHEME_VERY_DARK_BLUE;
        slider.style.backgroundColor = DARKTHEME_VERY_DARK_BLUE;
        full_screen_background.style.backgroundColor = DARKTHEME_VERY_DARK_BLUE;

        // elements to change background-colour to DARKTHEME_DARK_DESATURATED_BLUE
        [...big_cards, ...small_cards].forEach(element => {
            element.style.backgroundColor = DARKTHEME_DARK_DESATURATED_BLUE;
            element.addEventListener("mouseover", 
                () => {element.style.boxShadow = "0 4px 8px 0 hsla(0, 0%, 100%, 0.2), 0 6px 20px 0 hsla(0, 0%, 100%, 0.19)"}
            );
            element.addEventListener("mouseout", 
                () => {element.style.boxShadow = ""}
            );
        });
        [dark_mode_section, title_stats, ...social_media_handles, ...big_number_types].forEach(element => {
            element.style.color = DARKTHEME_DESATURATED_BLUE;
        });
    }
    // LIGHT THEME
    else {
        [title, subheader, ...big_numbers].forEach(element => {
            element.style.color = LIGHTTHEME_VERY_DARK_BLUE;
        });

        top_background.style.backgroundColor = LIGHTTHEME_VERY_PALE_BLUE;
        full_screen_background.style.backgroundColor = WHITE;

        // elements to change background-colour to DARKTHEME_DARK_DESATURATED_BLUE
        [...big_cards, ...small_cards].forEach(element => {
            element.style.backgroundColor = LIGHTTHEME_LIGHT_GRAYISH_BLUE;
        });
        [dark_mode_section, title_stats, ...social_media_handles, ...big_number_types].forEach(element => {
            element.style.color = LIGHTTHEME_DARK_GRAYISH_BLUE;
        });
    }
}