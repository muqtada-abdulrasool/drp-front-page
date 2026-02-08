// Get raw cookies, change into a URL format, then parse
var raw_cookies = new URLSearchParams(document.cookie.replace(/; /g, "&"));

// Get raw cookies
var raw_colorscheme = raw_cookies.get("colorScheme");
var raw_lang = raw_cookies.get("lang");

// Prepare in case cookies are undefined
var colorscheme = "";
var lang = "";

// If value is undefined OR null then value = default, otherwise = raw
colorscheme = raw_colorscheme ?? "light";
lang = raw_lang ?? "en";

// Setup mantine default color scheme accordingly
document.documentElement.setAttribute("data-mantine-color-scheme", colorscheme);

// Check which language is used; if Arabic, do RTL
if (lang == "ar") {
  document.documentElement.dir = "rtl";
} else {
  document.documentElement.dir = "ltr";
}
