import { initHeader } from "./components/header.js";

import { HomePage } from "./pages/index.js";

import { initFooter } from "./components/footer.js";

document.addEventListener('DOMContentLoaded', ()=> {

    const Page = window.location.pathname.split('/').pop();

    document.body.appendChild(initHeader());

    document.body.appendChild(HomePage());

    document.body.appendChild(initFooter());
})