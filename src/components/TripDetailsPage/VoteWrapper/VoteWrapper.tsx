
const VoteWrapper = ({children, title}:any) => {
    return(<>
    
        <div id="vote-wrapper">
        <h2 id="h2-vote-form">{title}</h2>
        {children}
        </div>
        </>
    )
}

export default VoteWrapper


