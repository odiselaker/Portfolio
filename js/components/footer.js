export function initFooter() {
    const Footer = document.createElement('footer');

    Footer.classList.add(
        'p-40',
        'bck-black',
        'text-center',
        'color-white'
    );

    Footer.innerHTML = '<p> &copy; Copyright by Site | Created by Papanidis Odisseas</p>';

    return Footer;
}