import React from 'react';
import styles from '../../styles/Channel.module.css'
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import Header from '../../components/header';
import { Card } from '../../components/card';
export const getStaticProps=async()=>{
	const res=await fetch(`http://localhost:3000/api/userlist`).then(res=>res.json())
	return{
		props:{ userList:res}
	}
}




const Channels = ({userList}) => {
	
    let iconStyles = { color: "black", fontSize: "1rem" };
	let greaterStyles = { color: '#1488e1', fontSize: "0.6rem" };
	let wordStyles =  { color: 'blue', fontSize: "1.5rem" };	
	
	let plusStyles =  { color: 'blue', fontSize: "3rem" };
	let pdfStyles = { color: 'brown', fontSize: "1.5rem" };
	let tabs = [
		{	
			tabName:'Channels',
			path:'/buying-spaces/channels'
		},
		{
			tabName:'Spaces',
			path:'/buying-spaces/spaces'
		}
	]
	console.log("userList",userList)
  return (
     <>
    <Header header="Buying Spaces" tabs={tabs} currentTab="Channels" />
					
	<div className='d-flex'>
    <main className={styles.content}>
    <div className={styles.container}>
		<div className="card">
			<div className="row">
				<div className={`col-xl-3 ${styles.channel_card}`}>
                    <h5>Channels</h5>
					<div className="px-4 d-none d-md-block">
						<div className="d-flex align-items-center">
							<div className="flex-grow-1">
								<input type="text" className="form-control my-3" placeholder="Search..." />
							</div>
						</div>
					</div>

					
					<a className="list-group-item list-group-item-action border-0">
						<div className="d-flex justify-content-between align-items-center">
							<img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="rounded-circle mr-1" alt="Doris Wilder" width="40" height="40" />&nbsp;
							<div className="flex-grow-1 ml-3">
								Wordpress
							</div>
						</div>
					</a>
					<a className={`list-group-item list-group-item-action border-0  ${styles.showActive}`}>
						<div className="d-flex align-items-center">
							<img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />&nbsp;
							<div className="flex-grow-1 ml-3">
								<b>Kentico Kontent</b>
							</div>
						</div>
					</a>
					<a className="list-group-item list-group-item-action border-0">
						<div className="d-flex align-items-center">
							<img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="rounded-circle mr-1" alt="Haley Kennedy" width="40" height="40" />&nbsp;
							<div className="flex-grow-1 ml-3">
								Ghost CMS
							</div>
						</div>
					</a>

					<hr className="d-block d-lg-none mt-1 mb-0" />
				</div>
				<div className="col-xl-9">
					<div className="py-2 px-4 border-bottom d-none d-lg-block">
						<div className="d-flex align-items-center py-1">
							<div className="position-relative">
								<img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
							</div>
							<div className="flex-grow-1 p-2">
								<strong >Kentico Kontent &nbsp;&nbsp;<span className="dot"></span> online</strong>
							</div>
							<div>
								<img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />&nbsp;
								<img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />&nbsp;
								<img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />&nbsp;
								<AiIcons.AiFillPlusSquare style={plusStyles} />
							</div>
						</div>
					</div>

					<div className="position-relative">
						<div className="chat-messages p-2">
						<div className={styles.date}>	
							<span>Wednesday, December 1st</span><p className={styles.line}></p>
						</div>	
							<div className="chat-message-right pb-4 d-flex">
								<div>
									<img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
								</div>
								<div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
									<div className="font-weight-bold mb-1"><b>Mabrice Rodriguez</b> <span className="text-muted small text-nowrap">&nbsp;&nbsp;2:33 am</span></div>
                                        Joined to Kentico Kontent channel <span className="text-muted">- take a second to say hello</span>
								</div>
							</div>

							<div className="chat-message-left pb-4 d-flex">
								<div>
									<img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
								</div>
								<div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
									<div className="font-weight-bold mb-1"><b>Joanne Wells</b><span className="text-muted small text-nowrap">&nbsp;&nbsp;9:28 am</span></div>
                                        Joined to Kentico Kontent channel  <span className="text-muted">- take a second to say hello</span>
								</div>
							</div>
							
							<div className={styles.date}>	
								<span>Friday, December 3rd</span><p className={styles.line}></p>
							</div>	
                            <div className="chat-message-right pb-4 d-flex">
								<div>
									<img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
									
								</div>
								<div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
									<div className="font-weight-bold mb-1"><b>Maurice Rodriguez</b><span className="text-muted small text-nowrap">&nbsp;&nbsp;2:33 am</span></div>
                                        <div className={styles.req_border}>12 Requirements added</div>
								</div>
							</div>

							<div className="chat-message-left pb-4 d-flex">
								<div>
									<img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
								</div>
								<div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
									<div className="font-weight-bold mb-1"><b>John Nielsan</b><span className="text-muted small text-nowrap">&nbsp;&nbsp;10:30 am</span></div>
                                    <div className={styles.reply_border}> <p><b>@Maurice Rodriguez</b></p>check the requirements again and schedule the meeting</div>
								</div>
							</div>

							<div className="chat-message-right pb-4 d-flex">
								<div>
									<img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
									
								</div>
								<div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
									<div className="font-weight-bold mb-1"><b>Maurice Rodriguez</b><span className="text-muted small text-nowrap">&nbsp;&nbsp;2:33 am</span></div>
                                        <div className={styles.req_border}>Yes i have updated the Requirements</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex-grow-0 py-4 px-2 border-top">
						<div className="input-group">
                            <div className='input-form'>
                                <span className='icon pl-icon1' ><BsIcons.BsEmojiSmile /></span>
                                <span className='icon pl-icon2'><BsIcons.BsCardImage /></span>
                                <span className='icon pl-icon3' ><AiIcons.AiOutlineVideoCameraAdd /></span>
                            </div>
							<input type="text" className="form-control" placeholder="Add comment..." />
							<button className="btn btn-primary">Send</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </main>
	<div className={styles.side_main}>
	<Card content={()=>{return(
				<div>
				<div>
					<img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
				</div>
				<div className={styles.top_name}>
					<h6>Tristan Wells</h6>
					<span className='text-muted'>Kentico Kontent's Sales Agent</span>
				</div>					
				<button>Schedule Meeting</button>
				</div>
	)}}/>
	
		
	
	<div className={styles.side_main_2}>
		<div className={styles.top_card_2}>
		<h6><b>Added Requirements-05</b></h6>
		<h6><FiIcons.FiEdit2 style={iconStyles}/></h6>				
		</div>	
		<div className={styles.side_main_content}>
			<span>Build website</span><br /><hr />
			<span>Build blogging site</span><br /><hr />
			<span>Post blogs and track traffic</span><br /><hr />
			<span>Host a forum</span><br /><hr />
			<h6>View More&nbsp;<FaIcons.FaGreaterThan style={greaterStyles}/></h6>
		</div>
	</div>
	<div className={styles.side_main_3}>
		<div className={styles.top_card_3}>
		<h6><b>Documents/Files/Links-06</b></h6>
		<h6><FiIcons.FiEdit2 style={iconStyles}/></h6>				
		</div>	
		<div className={styles.side_main_content}>
			<span><AiIcons.AiOutlineFilePdf style={pdfStyles} />&nbsp;Quotation Business Plan 25MB</span><br /><hr />
			<span><AiIcons.AiOutlineFileWord style={wordStyles} />&nbsp;how-to-choose-headless-cms</span><br /><hr />
			<h6>View More&nbsp;<FaIcons.FaGreaterThan style={greaterStyles}/></h6>
		</div>
	</div>
	</div>
	</div>
    </> 
  )
}

export default Channels