import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import XIcon from '@mui/icons-material/X';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
export const navigationMenu =[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/home"
    },
    {
        title:"Explore",
        icon:<SearchIcon/>,
        path:"/explore"
    },
    {
        title:"Notifications",
        icon:<NotificationsNoneIcon/>,
        path:"/notifications"
    },
    {
        title:"Messages",
        icon:<MailOutlineIcon/>,
        path:"/messages"
    },
    {
        title:"Lists",
        icon:<BallotOutlinedIcon/>,
        path:"/lists"
    },
    {
        title:"Bookmarks",
        icon:<BookmarkBorderOutlinedIcon/>,
        path:"/bookmarks"
    },
    {
        title:"communities",
        icon:<PeopleOutlinedIcon/>,
        path:"/communities"
    },
    {
        title:"Premium",
        icon:<XIcon/>,
        path:"/premium"
    },
    {
        title:"Profile",
        icon:<PermIdentityIcon/>,
        path:"/profile"
    },
    {
        title:"More",
        icon:<PendingOutlinedIcon/>,
        path:"/more"
    },
]