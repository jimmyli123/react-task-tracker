import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1 >Hello {title}</h1>
            <Button color='green' onClick={onClick} text='Hello'/>
        </header>
    )
}

// const headingStyle = {
//     color: 'white',
//     backgroundColor: 'blue'
// }

Header.defaultProps = {
    title: "Andrea Caicedo",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
