import PropTypes from 'prop-types';
import iconFace from '@/assets/icons/facebook.png';
import iconWhats from '@/assets/icons/whatsapp.png';

function ButtonsSocial ({ tamaño}) {
    return (
        <>
            <a
                className='btn btn-light border border-dark rounded-circle p-3'
                style={tamaño}
                href="https://www.facebook.com/profile.php?id=61559431238008"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className='img-fluid w-100'
                    src={iconFace}
                    alt="icono de Facebook"
                />
            </a>
            <a 
                className='btn btn-light border border-dark rounded-circle p-3'
                style={tamaño}
                href="https://wa.me/message/ESNGTOYTZUV3P1"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className='img-fluid w-100'
                    src={iconWhats}
                    alt="icono de WhatsApp"
                />
            </a>
        </>
    );
};

ButtonsSocial.propTypes = {
    tamaño: PropTypes.object.isRequired
};

export default ButtonsSocial;