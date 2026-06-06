export function HomePage() {
    const Containers = document.createElement('div'); // this is the big div

    const Container1 = document.createElement('div'); // this is background image container1

    Container1.classList.add(
        'image2',
        'h-1350px',
        'd-block',
        'd-flex',
        'justify-center',
        'items-center'
    );

    const ColorIncontainer = document.createElement('div') // this is the projects image in container1

    ColorIncontainer.src = '/assets/images/projectinsideIMG.png';

    ColorIncontainer.classList.add(
        'image-inside',
        'pos-relative',
        'd-flex',
        'justify-center',
        'items-center',
        'text-center',
        'h-100',
        'd-radius-10',
        'flex-column'
    );

    const projectstext = document.createElement('p'); // this is the text in propject container

    projectstext.innerHTML = 'PROJECTS - WORKS';

    projectstext.classList.add(
        'projectstext',
        'text-center',
        'f-size-40',
        'orbitron-uniquifier'
    );

    const Projectanimation = document.createElement('dotlottie-player'); // this is the animation on projects

    Projectanimation.classList.add(
        'projectanim',
        'pos-absolute',
        'd-flex'
    );

    Projectanimation.setAttribute(
        'src',
        '/assets/videos/projects.lottie'
    );

    Projectanimation.setAttribute(
        'autoplay',
        ''
    );

    Projectanimation.setAttribute(
        'loop',
        ''
    );
    
    //===========================================projects
    const project1 = document.createElement('a');
    const project2 = document.createElement('a'); 

    project1.innerHTML = 'EXELIX';
    project2.innerHTML = 'JustKoureio';

    project1.href = 'https://github.com/odiselaker/EXELIX-project.git';
    project2.href = 'https://github.com/odiselaker/JustKoureio.git';

    project1.classList.add(
        'projects',
        'd-flex',
        'justify-center',
        'items-center',
        'f-size-25',
        'bd-radius-10',
        'orbitron-uniquifier'
    );

    project2.classList.add(
        'projects',
        'd-flex',
        'justify-center',
        'items-center',
        'f-size-25',
        'bd-radius-10',
        'orbitron-uniquifier'
    );

    //===========================================project end

    const Container2 = document.createElement('div'); // this is the container2 where i putt socialmedia

    Container2.classList.add(
        'socialContainer',
        'h-900px'
    );

    const socialanim = document.createElement('dotlottie-player'); // this is the social video animation

    socialanim.classList.add(
        'socialanim',
        'pos-absolute',
        'd-flex',
        'justify-center',
        'items-center',
        'h-auto'
    );

    socialanim.setAttribute(
        'src',
        '/assets/videos/social.lottie'
    );

    socialanim.setAttribute(
        'autoplay',
        ''
    );

    socialanim.setAttribute(
        'loop',
        ''
    );


    //================================================ icons
    const instagram = document.createElement('img');
    const github = document.createElement('img');
    const linkedln = document.createElement('img');

    instagram.src = '/assets/icons/instagram.png';
    github.src = '/assets/icons/github.png';
    linkedln.src = '/assets/icons/linkedln.png';

    instagram.classList.add(
        'instagram'
    );

    github.classList.add(
        'github'
    );

    linkedln.classList.add(
        'linkedln'
    );
    //================================================ icons end


    //================================================ icons links
    const instagramlink = document.createElement('a');
    const githublink = document.createElement('a');
    const linkedlnlink = document.createElement('a');

    instagramlink.href = 'https://www.instagram.com/odiseyee/';
    githublink.href = 'https://github.com/odiselaker';
    linkedlnlink.href = 'https://linkedin.com/in/odisseas-papanidis-b80281404?utm_source=share_via&utm_content=profile&utm_medium=member_android';
    //================================================ links end




    Containers.append(Container1, Container2);
    Container1.append(ColorIncontainer);
    ColorIncontainer.append(projectstext, Projectanimation);
    ColorIncontainer.append(project1, project2);
    Container2.append(socialanim);
    Container2.append(instagramlink, githublink, linkedlnlink);

    instagramlink.append(instagram);
    githublink.append(github);
    linkedlnlink.append(linkedln);

    return Containers;
}





