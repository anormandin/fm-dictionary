function PlayButton({url}:{url:string}) {
    
    const handlePlay = async () => {
        await (new Audio(url).play());
    }
    
    return <button type='button' className='play-button' onClick={handlePlay} aria-label='play' />
}


export default PlayButton;