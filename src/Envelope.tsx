import { MouseEventHandler, useState } from 'react'
import envelopeBody from './assets/envelopeBody.svg'
import envelopeOpenTop from './assets/envelopeOpenTop.svg'
import envelopeTop from './assets/envelopeTop.svg'
import heart from './assets/heart.png'
import valentinka from './assets/valentinka.png'
import cls from './Envelope.module.css'

const Envelope = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [photo, setPhoto] = useState<string>(envelopeTop)
    const [isUnTouched, setIsUnTouched] = useState<boolean>(true)
    const [isLittleHearts, setIsLittleHearts] = useState<boolean>(false)
    const [canIClickOnTheValentinka, setCanIClickOnTheValentinka] = useState<boolean>(true)
    const [isValentinkaRead, setSsValentinkaRead] = useState<boolean>(false)

    const interval = 300

    const openEnvelope = () => {
        setIsOpen(true)
        setIsUnTouched(false)
        setIsLittleHearts(true)

        setTimeout(() => {
            setPhoto(envelopeOpenTop)
        }, interval)

        setTimeout(() => {
            setIsLittleHearts(false)
        }, 7200)
    }

    const closeEnvelope = () => {
        setIsOpen(false)
        setTimeout(() => {
            setPhoto(envelopeTop)
        }, interval)
    }

    const getValentinka = () => {
        setSsValentinkaRead(true)
        setCanIClickOnTheValentinka(false)

    }

    return (
        <div
            className={`${cls.envelope} ${isUnTouched && cls.envelopePulsation}  shadow-2xl`}
            onClick={isOpen && (!isLittleHearts) ? getValentinka : openEnvelope}>
            <div className={`${cls.envelopeTop} ${isOpen || 'rotate-1'}`}>
                <img src={photo} alt="" />
            </div>

            {isLittleHearts && <div>
                <img src={heart} className={`${cls.heart1} ${isUnTouched || cls.heartAnimation1}`} alt="" />
                <img src={heart} className={`${cls.heart2} ${isUnTouched || cls.heartAnimation2}`} alt="" />
                <img src={heart} className={`${cls.heart3} ${isUnTouched || cls.heartAnimation3}`} alt="" />
                <img src={heart} className={`${cls.heart4} ${isUnTouched || cls.heartAnimation4}`} alt="" />
                <img src={heart} className={`${cls.heart5} ${isUnTouched || cls.heartAnimation5}`} alt="" />
            </div>}

            <img
                src={valentinka}
                className={`
                        ${cls.valentinka}
                        ${canIClickOnTheValentinka && isOpen && (!isLittleHearts) && cls.valentinkaClick}
                        ${isValentinkaRead && cls.bigValentinka}`} />

            <div className={cls.envelopeBody}>
                <img src={envelopeBody} />
            </div>
        </div>
    )
}

export default Envelope