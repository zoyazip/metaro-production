'use client'

import Image from 'next/image'
import './certificates.css'
import { useState } from 'react';

interface CertificatesProps {
    currentLanguage: LanguageType
}

const Certificates = ({currentLanguage}: CertificatesProps) => {

    const certificates = [
        {
            image: '/certificates/iso9001.svg',
            text: 'ISO 9001:2015',
            width: 180,
            height: 180,
            link: "/certificates/ISO9001 - 2026y.pdf"
        },
        {
            image: '/certificates/iso14001.svg',
            text: 'ISO 14001:2015',
            width: 180,
            height: 180,
            link: "/certificates/ISO14001 - 2026y.pdf"
        },
        {
            image: '/certificates/iso3834.svg',
            text: 'ISO 3834-2:2006',
            width: 180,
            height: 180,
            link: "/certificates/ISO3834 - 2026y.pdf"
        },
        {
            image: '/certificates/Certificate20240515.jpg',
            text: 'SS-EN 15085-2:2020',
            width: 140,
            height: 180,
            link: "/certificates/Certificate20240515.pdf"
        }
    ]

    const [showCertificates, setShowCertificates] = useState(false);

    const toggleCertificates = () => {
        setShowCertificates(!showCertificates);
        console.log("clicked")
    }

    return (
        <section className='certificatesContainer' id='certifications'>
            <div className='showCertificates' onClick={toggleCertificates}>
                <h2>{currentLanguage.certifications}</h2>
                <div>
                    <Image src='./certificatesArrow.svg' alt='Certificate Arrow' width={30} height={30} className={showCertificates ? 'rotateArrow' : ''} />
                </div>
            </div>
            <div className={`certificates ${showCertificates ? 'show' : ''}`}>
                {certificates.map((item, index) => (
                    <div key={index} className='certificate'>
                        <div className='certificateImage'>
                            <a href={item.link} target='_blank'>
                                <Image src={item.image} alt={item.text + ' Icon'} width={item.width} height={item.height} />
                            </a>
                        </div>
                        <div className='certificatesText'>
                            <h3>{item.text}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Certificates