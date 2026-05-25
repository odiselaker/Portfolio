export function initHeader() {
    const header = document.createElement('div'); // this is the big div

    const headerimg = document.createElement('div'); // this is the background image of header 

    headerimg.classList.add(
        'bck-dark',
        'headerimg',
        'pos-relative'
    );


    const Textarea = document.createElement('div'); // this is the text area (red)

    Textarea.classList.add(
        'textarea'
    );


    const Textarea2 = document.createElement('div'); // this is the text area (white)

    Textarea2.classList.add(
        'textarea2'
    );

    const Textin2 = document.createElement('p'); // this is the text inside the Textarea2

    Textin2.innerHTML = 'Hi! I’m Odisseas Papanidis, a Full-Stack Developer passionate about building modern and interactive websites.';

    Textin2.classList.add(
        'text2',
        'playwrite-gb-j-uniquifier'
    );


    const Textarea3 = document.createElement('div') // this is the text area (the colone red)

    Textarea3.classList.add(
        'textarea3'
    );

    const Textin3 = document.createElement('p'); // this is the text inside the Textarea3

    Textin3.innerHTML = 'My Portfolio';

    Textin3.classList.add(
        'text3',
        'orbitron-uniquifier'
    );

    
    const Animationheader = document.createElement('dotlottie-player'); // this is the video animation in header

    Animationheader.classList.add(
        'animationheader'
    );

    Animationheader.setAttribute(
        'src',
        '/assets/videos/animationheader.lottie'
    );

    Animationheader.setAttribute(
        'autoplay',
        ''
    );

    Animationheader.setAttribute(
        'loop',
        ''
    );


    const hirobot = document.createElement('dotlottie-player'); // this is the robot video in header

    hirobot.classList.add(
        'hirobot'
    );

    hirobot.setAttribute(
        'src',
        '/assets/videos/hirobot.lottie'
    );

    hirobot.setAttribute(
        'autoplay',
        ''
    );

    hirobot.setAttribute(
        'loop',
        ''
    );


    header.append(headerimg);
    headerimg.append(Textarea, Textarea2, Textarea3, Animationheader, hirobot);
    Textarea2.append(Textin2);
    Textarea3.append(Textin3);

    return header;
}