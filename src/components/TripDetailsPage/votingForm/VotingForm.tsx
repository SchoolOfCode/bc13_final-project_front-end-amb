
function VotingForm({choices}:any) {
    console.log(choices)
    return (
        <div className="votingForm">
{choices.map((choice:any) => {
    return (<p>{choice}</p>)
})}
        </div>
    )
}

export default VotingForm