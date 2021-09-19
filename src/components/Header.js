import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd }) => {
    
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} onClick={onAdd} text={showAdd ? 'Close' : 'Add' }/>
        </header>
    )
}

// const headingStyle = {
//     color: 'white',
//     backgroundColor: 'blue'
// }

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
