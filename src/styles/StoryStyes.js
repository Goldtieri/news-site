import styled from 'styled-components'


export const StoryWrapper = styled.section`
padding-top: 15px;
margin-bottom: 20px;
border-top 1px solid #CD5C5C;
font-weight: bold;
&:first-of-type {
	border-top: 0;
}




&:last-of-type {
	margin-bottom: 0;
	padding-bottom: 0;
}



`
export const StoryTitle = styled.h1`

margin-bottom: 5px;
font-size: 18px;
line-height: 1.8;
margin: 0;
text-decoration: none;

a{
	color: #2e2e2c;
	background-color: #add8e6;
	text-decoration: none;
	
}
`

export const StoryMeta = styled.div` 
background: #FFC0CB;
font-style: italic;
> span:not(:first-child):before {
content: '*';
margin-right: 7px;
margin-left: 7px;
background: #DB7093
}

.story__meta-bold {
	font-weight: bold;
}
`

export const StoryMetaElement = styled.span`
font-weight: bold;
background-color: #FFD700;
color: ${props => props.color || 'green'}
`

