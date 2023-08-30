export default ({updatenewsbtn,indx}) => {
    return (<div>
            <form onSubmit={()=>updatenewsbtn(indx)}>
               <input type="text" name="name"  />
               <input type="text" name="news" />
               <input type="text" name="description" />
               <button type="submit">Update</button>
               
               
            </form>
    </div>)
}