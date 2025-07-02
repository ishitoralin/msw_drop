import '../style/MobCard.css'

const MobImage = ({ name }) => {
    return (
        <div className='mob-card-img-container'>
            <img
                className='mob-card-img'
                src={`${process.env.PUBLIC_URL}/images/${encodeURIComponent(name)}.png`}
                alt={name}
            />
        </div>
    )
}

export default MobImage