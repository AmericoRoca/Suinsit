// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../Assets/css/Components/layout/private/NavBar.css';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

export const BarraNavegacion = () => {
    const [showItems, setShowItems] = useState(false);

    const toggleItems = () => {
        setShowItems(!showItems);
    };

    return (
        <section className='navigation'>
            <nav>
                <ul className='container'>
                    <div className='row'>
                        <div className='col-md-2'>
                            <Cuadro to="app/contrato" icon={faBook} text="Contrato" />
                        </div>
                        <div className='col-md-2'>
                            <Cuadro to="app/studio" icon={faBook} text="Studio" />
                        </div>
                        <div className='col-md-2'>
                            <Cuadro to="app/ventas" icon={faMoneyBill} text="Ventas" />
                        </div>
                        <div className='col-md-2'>
                            <Cuadro to="app/crm" icon={faBook} text="Crm" />
                        </div>
                        <div className='col-md-2'>
                            <Cuadro to="app/marketing" icon={faBook} text="Marketing" />
                        </div>
                        <div className='col-md-2'>
                            <Cuadro onClick={toggleItems} icon={showItems ? faArrowCircleUp : faArrowCircleDown} text={showItems ? "Mostrar Menos" : "Mostrar Más"} />
                        </div>
                        {showItems && (
                            <>
                                <div className='col-md-2'>
                                    <Cuadro to="app/office" icon={faBriefcase} text="Office" />
                                </div>
                                <div className='col-md-2'>
                                    <Cuadro to="app/procesos" icon={faMicrochip} text="Procesos" />
                                </div>
                                <div className='col-md-2'>
                                    <Cuadro to="app/arquitectura" icon={faSitemap} text="Arquitectura" />
                                </div>
                                <div className='col-md-2'>
                                    <Cuadro to="app/atlas" icon={faBookAtlas} text="Atlas" />
                                </div>
                                <div className='col-md-2'>
                                    <Cuadro to="app/alm" icon={faBook} text="Alm" />
                                </div>
                                <div className='col-md-2'>
                                    <Cuadro to="app/soporte" icon={faPhone} text="Soporte" />
                                </div>
                            </>
                        )}
                    </div>
                </ul>
            </nav>
        </section>
    );
};

const Cuadro = ({ to, icon, text, onClick }) => (
    <Link to={to} className='link-menu' onClick={onClick}>
        <FontAwesomeIcon icon={icon} className='icon' />
        <p>{text}</p>
    </Link>
);

export default BarraNavegacion;
