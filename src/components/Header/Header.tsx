import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../feature/themeList'
import { HeaderComponent,HeaderContainer, HeaderNavLink } from "./Header.styled"

export const Header = () => {
  const dispatch = useDispatch()
  const getActiveClass = ({isActive}: {isActive: boolean}):string => {
    return isActive ? `${classes.active} ${classes.link}` : classes.link
  }
  return (
    <HeaderComponent>
        <HeaderContainer>

          <HeaderNavLink to="/" className={getActiveClass}>  ToDo  </HeaderNavLink>
          <HeaderNavLink to="/list" className={getActiveClass}>List</HeaderNavLink>
         
         <div className={classes.toggleButton}>
              <button onClick={() => dispatch(toggleThemeAction())}>toggle</button>
         </div>
 
        </HeaderContainer>
    </HeaderComponent>
  )
}