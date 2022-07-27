import React from 'react';
import "./linkComp.scss";

export interface ILinkComponentProps { };

const LinkComponent: React.FunctionComponent<ILinkComponentProps> = props => {

    return (
        <div className="container-link-comp">
            <a href="https://devdocs.io/html/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/html5%20-%23e34f26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
            </a>&nbsp;
            <a href="https://devdocs.io/css/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/CSS3-1572B6?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
            </a>&nbsp;
            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
            </a>&nbsp;
            <a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
            </a>&nbsp;
            <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="ExpressJs" />
            </a>&nbsp;
            <a href="https://fr.reactjs.org/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="ReactJs" />
            </a>&nbsp;
            <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/node.js%20-%23339933.svg?&style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJs" />
            </a>&nbsp;
            <a href="https://www.json.org/json-en.html" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" alt="Json" />
            </a>&nbsp;
            <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/Sass-CE649A?&style=for-the-badge&logo=sass&logoColor=white" alt="HTML" />
            </a>&nbsp;
            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="VueJs" />
            </a>&nbsp;
            <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
            </a>&nbsp;
            <a href="https://api.jquery.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery" />
            </a>&nbsp;
            <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
            </a>&nbsp;
            <a href="https://symfony.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/Symfony-EEE?style=for-the-badge&logo=symfony&logoColor=000" alt="Symfony" />
            </a>&nbsp;
            <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
            </a>&nbsp;
            <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
            </a>&nbsp;
            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/MySQL-01758F?style=for-the-badge&logo=mysql&logoColor=F29111" alt="MySQL" />
            </a>&nbsp;
            <a href="https://github.com/archi974?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/Github-222?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
            </a>
        </div>
    );
}

export default LinkComponent;