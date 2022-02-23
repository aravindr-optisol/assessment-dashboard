import male from '../public/images/male-icon.png'
import female from '../public/images/female-icon.png';
import wordpress from '../public/images/wordpress.png';
import insta from '../public/images/insta.png';
import fb from '../public/images/fb.png';
import pdf from '../public/images/pdf.png';
import word from '../public//images/word.png';

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const content = [
    {
        title:'Stakeholder',
        view_type:'Add New',
        edit_type:true,
        sub_content_msg:'Stakeholders added',
        sub_content:[
            {
                icon:male
            },
            {
                icon:female
            }
        ]
    },
    {
        title:'Requirements',
        view_type:'Add New',
        sub_content_msg:'There are no requirements added',
    },
    {
        title:'Shortlisted Vendors',
        view_type:'Shortlist More',
        sub_content_msg:'Vendors added',
        edit_type:true,
        sub_content:[
            {
                icon:fb
            },
            {
                icon:wordpress
            },
            {
                icon:insta
            }
        ]
    },
    {
        title:'Evaluate & Score',
        view_type:'Edit',
        
        sub_content_msg:'Evaluation In Progress',
    },
    {
        title:'Request Quote',
        view_type:'View',
        sub_content_msg:'Quotes Received',
        sub_content:[
            {
                icon:pdf
            },
            {
                icon:word
            }
        ]
    },

]


export const sidebarDatas = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
    },
    {
        title:'Market',
        path:'/marketplace',
        icon:<IoIcons.IoIosPaper />,
    },
    {
        title:'Forum',
        path:'/forum',
        icon:<FaIcons.FaCartPlus />,
    },
    {
        title:'Events',
        path:'/events',
        icon:<IoIcons.IoMdPeople />,
    },
    {
        title:'Buying Spaces',
        path:'/messages',
        icon:<FaIcons.FaEnvelopeOpenText />,
    },
    {
        title:'Logout',
        path:'/logout',
        icon:<IoIcons.IoMdHelpCircle />,
    }
]
