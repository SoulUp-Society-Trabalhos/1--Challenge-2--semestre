export default function Home(){
    return (
        a {
    text-decoration: none;
    color: inherit;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.header__container {
    background-color: #000;
    color: #fff;

    display: flex;
    align-items: center;

    position: relative;
    z-index: 9999;

    width: 100%;
    padding: 2rem 5%;
}

/* =========================
   LOGO NO CANTO ESQUERDO
========================= */

.header__title {
    font-size: 2.1rem;
    font-weight: 700;
    margin: 0;

    font-family: "Montserrat", sans-serif;
}


/* =========================
   MENU CENTRALIZADO
========================= */

.header__nav {
    position: absolute;

    left: 50%;
    transform: translateX(-50%);
}

.header__ul {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: clamp(1.5rem, 2vw, 3rem);

    list-style: none;

    margin: 0;
    padding: 0;
}

.header__li {
    display: flex;
    align-items: center;

    position: relative;

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
}


/* =========================
   LINKS E BOTÃO
========================= */

.header__li a,
.dropdown__btn {
    color: white;

    text-decoration: none;

    background: none;
    border: none;

    font: inherit;

    cursor: pointer;

    padding: 1rem 1.5rem;

    border-radius: 20rem;

    transition: 0.3s;

    font-size: 1rem;
}


/* =========================
   HOVER
========================= */

.header__li a:hover,
.dropdown__btn:hover {
    background-color: white;
    color: black;
}


/* =========================
   DROPDOWN
========================= */

.dropdown {
    position: relative;
}


/* Menu escondido */

.dropdown__menu {
    position: absolute;

    top: calc(100% + 10px);
    left: 50%;

    transform: translateX(-50%);

    min-width: 200px;

    background-color: #000;

    border: 1px solid #333;
    border-radius: 12px;

    padding: 0.5rem;

    list-style: none;

    display: none;

    z-index: 9999;
}


/* Menu aberto */

.dropdown._aberto .dropdown__menu {
    display: block;
}


/* =========================
   LINKS DO DROPDOWN
========================= */

.dropdown__menu li {
    width: 100%;
}

.dropdown__menu li a {
    display: block;

    width: 100%;

    padding: 0.8rem 1rem;

    border-radius: 8px;

    color: white;

    font-size: 0.95rem;
}


/* Hover dos itens */

.dropdown__menu li a:hover {
    background-color: white;
    color: black;
}



/* =========================
   ITEM MARCADO
========================= */

._marcado a {
    background-color: white;
    color: black;
}
    )
}