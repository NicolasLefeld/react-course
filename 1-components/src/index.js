import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Nick" 
                    timeAgo="Today" 
                    message="Hey!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Robert" 
                    timeAgo="Yesterday" 
                    message="Crazy!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Shober" 
                    timeAgo="Yesterday" 
                    message="¡¡WOW!!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)